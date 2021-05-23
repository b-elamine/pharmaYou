import React from "react";
import { Row, Col, Badge, Spinner } from "reactstrap";
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb";
// import DataTableCustom from "../DataTableCustom/DataTableCustom";
import { Edit, Eye } from "react-feather";
import Select from "react-select";
import axios from "../../axios";
import { history } from "../../history";
import DataTablePartenaire from "./DataTablePartenaire";
import moment from "moment-timezone";
import "moment/locale/fr";

// fake database
const columns = [
  {
    name: "NOM",
    selector: "nom",
    sortable: true,
    minWidth: "230px",
    cell: (row) => (
      <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
        <div className="user-info text-truncate ml-xl-50 ml-0">
          <span
            title={row.name}
            className="d-block text-bold-600 text-truncate mb-0 primary font-small-3"
          >
            {row.name}
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "EMAIL",
    selector: "email",
    sortable: true,
    minWidth: "200px",
    cell: (row) => <p className="text-bold-200 mb-0">{row.email}</p>,
  },
  {
    name: "VILLE",
    selector: "ville",
    maxWidth: "80px",
    sortable: true,
    cell: (row) => <p className="text-bold-200 mb-0">{row.ville}</p>, //row.ville
  },
  {
    name: "STATUT",
    selector: "statut",
    sortable: true,
    center: true,
    minWidth: "180px",
    cell: (row) => (
      <Badge
        color={`light-${
          row.status === "actif" ? "success" : "danger"
        } text-wrap text-bold-500 mb-0`}
        style={{ width: "7rem", fontSize: "74%", lineHeight: "1.1" }}
        pill
      >
        {row.status}
      </Badge>
    ),
  },
  {
    name: "CODE POSTAL",
    selector: "code_postal",
    minWidth: "140px",
    center: true,
    sortable: true,
    cell: (row) => <p className="text-truncate mb-0">{row.code}</p>,
  },
  {
    name: "PROFESSION",
    selector: "profession",
    sortable: true,
    minWidth: "150px",
    cell: (row) => (
      <Badge
        color={`light-${
          row.type === "individu" ? "success" : "primary"
        } text-wrap text-bold-500 mb-0`}
        style={{ width: "7rem", fontSize: "74%", lineHeight: "1.1" }}
        pill
      >
        {row.type}
      </Badge>
    ),
  },
  {
    name: "PARTENAIRE DEPUIS",
    selector: "date_client",
    minWidth: "180px",
    sortable: true,
    cell: (row) => <p className="text-bold-500 text-wrap mb-0">{row.date}</p>,
  },
  {
    name: "NOMBRE DE PATIENTS",
    selector: "nbr_patients",
    sortable: true,
    cell: (row) => (
      <p className="font-small-4 text-truncate mb-0">{row.nbr_ordonnances}</p>
    ),
  },
  {
    name: "ACTION",
    selector: "action",
    // il faut faire des icons
    cell: (row) => (
      <div className="data-list-action">
        <Eye
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            // il faut le remplacer
            history.push(`/partenaire/${row.id}`);
          }}
        />
        <Edit
          className="cursor-pointer"
          size={20}
          onClick={() => {
            history.push("/partenaires/modifier_partenaire", row);
          }}
        />
      </div>
    ),
  },
];

class Partenaire extends React.Component {
  state = {
    data: [],
    options: {
      professions: [],
      origines: [],
      status: [],
    },
    value: "",
    filteredData: [],
    errorAlert: false,
    errorText: "Vérifier votre cnnexion",
  };
  

  handle_filter_status = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value: value });
    if (value.length) {
      filteredData = data.filter((item) => {
        let equalCondition = item.status.toLowerCase() === value.toLowerCase();
        if (equalCondition) {
          return equalCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };


  handle_filter_origine = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value: value });
    if (value.length) {
      filteredData = data.filter((item) => {
        if (!item.origine) {
          return null;
        }
        let equalCondition = item.origine.toLowerCase() === value.toLowerCase();
        if (equalCondition) {
          return equalCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };
  extract_distinct_values(data) {
    const origines = [];
    const professions = [];
    const status = [];
    data.forEach((row) => {
      if (row.origine) {
        if (!origines.includes(row.origine)) {
          origines.push(row.origine);
        }
      }
      if (row.type) {
        if (!professions.includes(row.type)) {
          professions.push(row.type);
        }
      }
      if (row.status) {
        if (!status.includes(row.status)) {
          status.push(row.status);
        }
      }
    });
    const origine_options = origines.map((item) => {
      return {
        value: item,
        label:
          typeof item === "string"
            ? item.charAt(0).toUpperCase() + item.slice(1)
            : null,
      };
    });
    const profession_options = professions.map((item) => {
      return {
        value: item,
        label:
          typeof item === "string"
            ? item.charAt(0).toUpperCase() + item.slice(1)
            : null,
      };
    });
    const status_options = status.map((item) => {
      return {
        value: item,
        label:
          typeof item === "string"
            ? item.charAt(0).toUpperCase() + item.slice(1)
            : null,
      };
    });
    this.setState({
      options: {
        professions: profession_options,
        origines: origine_options,
        status: status_options,
      },
    });
  }

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  fetch_data = async () => {
    try {
      const partenaires = await axios.get(
        "/users?access_token=a&type=infirmier"
      );
      if (partenaires.statusText === "OK") {
        const custom_partenaires = partenaires.data.map((item) => {
          return {
            id: item.user_id,
            name: `${item.nom} ${item.prenom}`,
            email: item.email,
            ville: item.ville_livraison,
            code: item.code_postal_livraison,
            origine: item.origine,
            date: new Date(
              moment(item.created_at * 1000).tz("Europe/Paris")
            ).toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            status :item.is_active? "actif" : "inactif",
            nbr_ordonnances: item.n_commandes,
            carte_vital: item.vitale_ok,
            mutuelle: item.mutuelle_ok,
            adresse_livraison: item.adresse_livraison,
            chiffre_affaire: item.chiffre_affaire,
            geocoords_livraison: item.geocoords_livraison,
            telephone: item.telephone,
            type: item.type,
          };
        });
        this.setState({
          data: custom_partenaires,
        });
        this.extract_distinct_values(this.state.data ? this.state.data : []);
      } else {
        this.handleAlert("errorAlert", true, partenaires.statusText);
      }
    } catch (err) {
      const error_message =
        err.message === "Network Error"
          ? "Vérifier votre connexion !"
          : "Une erreur est produite lors de la récupération des données.";
      this.handleAlert("errorAlert", true, error_message);
    }
  };
  componentDidMount() {
    this.fetch_data();
  }
 handle_filter_status = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value: value });
    if (value.length) {
      filteredData = data.filter((item) => {
        let equalCondition = item.status.toLowerCase() === value.toLowerCase();
        if (equalCondition) {
          return equalCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };
  handle_filter_origine = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value: value });
    if (value.length) {
      filteredData = data.filter((item) => {
        if (!item.origine) {
          return null;
        }
        let equalCondition = item.origine.toLowerCase() === value.toLowerCase();
        if (equalCondition) {
          return equalCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };

  add_new = () => {
    history.push("/partenaires/modifier_partenaire");
  };
  handle_filter_profession = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value: value });
    if (value.length) {
      filteredData = data.filter((item) => {
        if (!item.type) {
          return null;
        }
        let equalCondition =
          item.type.toLowerCase() === value.toLowerCase();
        if (equalCondition) {
          return equalCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };

  render() {
    const { value, filteredData, data } = this.state;
    let element = [];
    element.push(data.length);
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Partenaires"
          breadCrumbParent="Partenaires."
        />
        <Row>
          <Col md="4" sm="8">
            <Select
              classNamePrefix="select"
              placeholder="Professions"
              name="Professions"
              onChange={this.handle_filter_profession}
              options={this.state.options.professions}
            />
          </Col>
          <Col md="4" sm="8">
            <Select
              classNamePrefix="select"
              placeholder="Origine"
              name="Origine"
              options={this.state.options.origines}
              onChange={this.handle_filter_origine}
            />
          </Col>
          <Col md="4" sm="8">
            <Select
              classNamePrefix="select"
              placeholder="Status"
              name="status"
              options={this.state.options.status}
              onChange={this.handle_filter_status}
            />
          </Col>
          <Col sm="12">
            {console.log(this.state.data.length)}
            {this.state.data.length !== 0 ? (
              <DataTablePartenaire
                add_new={this.add_new}
                columns={columns}
                data={value.length ? filteredData : this.state.data}
              />
            ) : (
              <div className="text-center mt-4">
                <Spinner
                  style={{ width: "5rem", height: "5rem" }}
                  color="warning"
                />
              </div>
            )}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Partenaire;
