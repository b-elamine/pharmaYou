import React from "react";
import { Row, Col, Badge, Spinner } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import DataTableCustom from "../../DataTableCustom/DataTableCustom";
import { Check, Edit, AlertTriangle, Eye } from "react-feather";

import CustomSelects from "./CustomSelects";
import { history } from "../../../history";
import axios from "../../../axios";
import SweetAlert from "react-bootstrap-sweetalert";

// fake database
// const data = [
//   {
//     // id: 1,
//     image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
//     name: "Alyss Lillecrop",
//     email: "alillecrop0@twitpic.com",
//     date: "May 13, 2018",
//     status: "active",
//     montant: "$32,000",
//     ratings: "good",
//     type: "particulier",
//     code: 12345,
//     origine: "Partenaire App",
//     ordonnances: 15,
//     carte_vital: true,
//     mutuelle: false,
//     role: "inferermier",
//   },
//   {
//     // id: 2,
//     image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
//     name: "Shep Pentlow",
//     email: "spentlow1@home.pl",
//     date: "June 5, 2019",
//     status: "active",
//     montant: "$50,000",
//     ratings: "good",
//     type: "particulier",
//     code: 56789,
//     origine: "Partenaire infermier",
//     ordonnances: 4,
//     carte_vital: false,
//     mutuelle: true,
//     role: "inferermier",
//   },
//   {
//     // id: 3,
//     image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
//     name: "Gasper Morley",
//     email: "gmorley2@chronoengine.com",
//     date: "December 24, 2019",
//     status: "active",
//     montant: "$78,000",
//     ratings: "average",
//     type: "professionnel",
//     code: 1245,
//     origine: "Partenaire MEDADOM",
//     ordonnances: 16,
//     carte_vital: false,
//     mutuelle: true,
//     role: "inferermier",
//   },
//   {
//     image: require("../../../assets/img/portrait/small/avatar-s-4.jpg"),
//     name: "Phaedra Jerrard",
//     email: "pjerrard3@blogs.com",
//     date: "November 30, 2018",
//     status: "inactive",
//     montant: "$10,000",
//     ratings: "bad",
//     carte_vital: true,
//     mutuelle: true,
//     origine: "Partenaire App",
//     role: "inferermier",
//   },
//   {
//     image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
//     name: "Conn Plose",
//     email: "cplose4@geocities.com",
//     date: "April 8, 2017",
//     status: "active",
//     montant: "$22,000",
//     ratings: "average",
//     ordonnances: 10,
//     mutuelle: true,
//     origine: "Partenaire App",
//     role: "inferermier",
//   },
//   {
//     image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
//     name: "Tootsie Brandsma",
//     email: "tbrandsma5@theatlantic.com",
//     date: "August 12, 2019",
//     status: "inactive",
//     montant: "$49,000",
//     ratings: "bad",
//     ordonnances: 0,
//     mutuelle: true,
//     origine: "Partenaire App",
//     role: "inferermier",
//   },
//   {
//     image: require("../../../assets/img/portrait/small/avatar-s-8.jpg"),
//     name: "Sibley Bum",
//     email: "sbum6@sourceforge.net",
//     date: "October 1, 2017",
//     status: "active",
//     montant: "$56,000",
//     ratings: "good",
//     mutuelle: true,
//     origine: "Partenaire App",
//     role: "inferermier",
//   },
//   {
//     image: require("../../../assets/img/portrait/small/avatar-s-7.jpg"),
//     name: "Kristoffer Thew",
//     email: "kthew7@amazon.com",
//     date: "February 28, 2018",
//     status: "inactive",
//     montant: "$83,000",
//     ratings: "bad",
//     origine: "Partenaire App",
//     role: "inferermier",
//   },
//   {
//     image: require("../../../assets/img/portrait/small/avatar-s-26.jpg"),
//     name: "Fay Hasard",
//     email: "fhasard8@java.com",
//     date: "January 29, 2018",
//     status: "active",
//     montant: "$26,000",
//     ratings: "good",
//     origine: "Partenaire App",
//     role: "inferermier",
//   },
// ];

const columns = [
  {
    name: "NOM",
    selector: "nom",
    sortable: true,
    minWidth: "230px",
    cell: (row) => (
      <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
        <div className="user-img ml-xl-0 ml-2">
          <img
            className="img-fluid rounded-circle"
            height="36"
            width="36"
            src={row.image}
            alt={row.name}
          />
        </div>
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
    cell: (row) => <p className="text-bold-200 mb-0">{row.ville}</p>,
  },
  {
    name: "CODE POSTAL",
    selector: "code_postal",
    minWidth: "150px",
    center: true,
    sortable: true,
    cell: (row) => <p className="text-truncate mb-0">{row.code}</p>,
  },
  {
    name: "ORIGINE",
    selector: "origine",
    sortable: true,
    center: true,

    minWidth: "150px",
    cell: (row) => (
      <Badge
        color="light-success text-wrap text-bold-500 mb-0"
        style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
        pill
      >
        {row.origine}
      </Badge>
    ),
  },
  {
    name: "CLIENT DEPUIS",
    selector: "date_client",
    sortable: true,

    minWidth: "180px",
    cell: (row) => <p className="text-truncate mb-0">{row.date}</p>,
  },
  {
    name: "ORDONNANCES",
    selector: "ordonnances",
    // sortable: true,
    center: true,
    // maxWidth:"100px",
    cell: (row) => (
      <p className="text-bold-700 font-medium-1 text-truncate mb-0">
        {row.ordonnances}
      </p>
    ),
  },
  {
    name: "CARTE VITAL",
    selector: "carte_vital",
    sortable: true,
    maxWidth: "50px",
    center: true,

    cell: (row) => {
      const core = row.carte_vital ? (
        <div className="data-list-action">
          <Check className="cursor-pointer mr-1 success" size={20} />
        </div>
      ) : (
        <div className="data-list-action">
          <AlertTriangle className="cursor-pointer mr-1 danger" size={20} />
        </div>
      );
      return core;
    },
  },
  {
    name: "MUTUELLE",
    selector: "mutuelle",
    sortable: true,
    center: true,
    maxWidth: "60px",

    cell: (row) => {
      const core = row.mutuelle ? (
        <div className="data-list-action">
          <Check className="cursor-pointer mr-1 success" size={20} />
        </div>
      ) : (
        <div className="data-list-action">
          <AlertTriangle className="cursor-pointer mr-1 danger" size={20} />
        </div>
      );
      return core;
    },
  },
  {
    name: "ACTION",
    selector: "action",
    maxWidth: "50px",

    center: true,
    cell: (row) => (
      <div className="data-list-action">
        <Eye
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            history.push(`/client/particulier/${row.id}`, row);
          }}
        />
      </div>
    ),
  },
];

class Client_particuliers extends React.Component {
  state = {
    data: [],
    value: "",
    filteredData: [],
    errorAlert: false,
    errorText: "Vérifier votre cnnexion",
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  fetch_data = async () => {
    try {
      const clientParticulier = await axios.get("/users?access_token=a");
      console.log(clientParticulier.data);
      if (clientParticulier.statusText === "OK") {
        const data = clientParticulier.data.map((item) => {
          return {
            id: item.user_id,
            image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
            name: `${item.nom} ${item.prenom}`,
            email: item.email,
            ville: item.ville_livraison,
            code: item.code_postal_livraison,
            origine: item.origine,
            date: "29 Janvier 2019",
            ordonnances: item.n_commandes,
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
          data: data,
        });
      } else {
        this.handleAlert("errorAlert", true, clientParticulier.statusText);
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
        let equalCondition = item.origine === value;
        if (equalCondition) {
          return equalCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };
  // adding handle filter role

  render() {
    const { value, filteredData } = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle=""
          breadCrumbParent="Clients particuliers"
        />
        <Row>
          <Col sm="12">
            <CustomSelects
              handle_filter_status={this.handle_filter_status}
              handle_filter_origine={this.handle_filter_origine}
              data={this.state.data}
            />
          </Col>
          <Col sm="12">
            {this.state.data.length !== 0 ? (
              <DataTableCustom
                add_new
                add_new_value="Ajouter un client"
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
          <SweetAlert
            error
            title="Erreur"
            show={this.state.errorAlert}
            onConfirm={() => this.handleAlert("errorAlert", false)}
          >
            <p className="sweet-alert-text">{this.state.errorText}</p>
          </SweetAlert>
        </Row>
      </React.Fragment>
    );
  }
}

export default Client_particuliers;
