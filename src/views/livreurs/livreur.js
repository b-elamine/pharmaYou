import React from "react";
import {
  Card,
  CardBody,
  Badge,
  Input,
  Button,
  CardHeader,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
} from "reactstrap";
import Select from "react-select";
import { history } from "../../history";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import SweetAlert from "react-bootstrap-sweetalert";

import DataTable from "react-data-table-component";
import { Search, Edit, Eye } from "react-feather";
import axios from "../../axios";

const CustomHeader = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-end">
      <div className="d-flex flex-wrap justify-content-end">
        <div className="position-relative has-icon-left mb-1">
          <Input
            placeholder="Chercher"
            value={props.value}
            onChange={(e) => props.handleFilter(e)}
          />
          <div className="form-control-position">
            <Search size="15" />
          </div>
        </div>
        <div style={{ marginLeft: "20px" }} className="add-new">
          <Button.Ripple color="primary">Ajouter un partenaire</Button.Ripple>
        </div>
      </div>
    </div>
  );
};

const Statut = [
  { value: "Actif", label: "Actif" },
  { value: "Desactivé", label: "Désactivé" },
  { value: "En attente de validation", label: "En attente de validation" },
];
const TypeVéhicule = [
  { value: "Voiture", label: "Voiture" },
  { value: "Moto", label: "Moto" },
];

class Livreurs extends React.Component {
  state = {
    columns: [
      {
        name: "NOM",
        selector: "NOM",
        sortable: true,
        minWidth: "180px",
        cell: (row) => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                style={{ color: "#f0ad4e" }}
                title={row.name}
                className="d-block text-truncate mb-0"
              >
                {row.name}
              </span>
            </div>
          </div>
        ),
      },
      {
        name: "Email",
        selector: "EMAIL",
        sortable: true,
        minWidth: "240px",
        cell: (row) => (
          <p className="text-wrap" title={row.email}>
            {row.email}
          </p>
        ),
      },
      {
        name: "VEHICULE",
        selector: "Véhicule",
        sortable: false,
        cell: (row) => (
          //   <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
          <Badge style={{ padding: "8" }} color="warning" pill>
            {row.vehicule === "voiture" ? (
              <FaCar size="14" style={{ marginRight: "5px" }} />
            ) : (
              <FaMotorcycle size="14" style={{ marginRight: "5px" }} />
            )}
            {row.vehicule}
          </Badge>
          //   </div>
        ),
      },
      {
        name: "CODE POSTALE",
        selector: "Code postale",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500  mb-0">{row.code_postale}</p>
        ),
      },
      {
        name: "STATUT",
        selector: "statut",
        sortable: true,
        cell: (row) =>
          row.status ? (
            <Badge className="text-truncate" color="light-danger" pill>
              Désactivé
            </Badge>
          ) : (
            <Badge className="text-truncate" color="light-success" pill>
              Actif
            </Badge>
          ),
      },
      {
        name: "LIVREUR DEPUIS",
        selector: "date",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
        ),
      },
      {
        name: "COMMANDES LIVRES",
        selector: "Commades livres",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500 mb-0">{row.commandes_livrés}</p>
        ),
      },
      {
        name: "BALANCE PAIEMENT",
        selector: "BALANCE PAIEMENT",
        sortable: true,
        cell: (row) => <p className="text-bold-500 mb-0">{row.balance}</p>,
      },
      {
        name: "CHIFRE D'AFFAIRE",
        selector: "CHIFRE D'AFFAIRE",
        sortable: true,
        cell: (row) => <p className="text-bold-500 mb-0">{row.revenue}€</p>,
      },
      {
        name: "ACTIONS",
        selector: "actions",
        sortable: true,
        cell: (row) => (
          <div className="data-list-action">
            <Eye
              className="cursor-pointer mr-1"
              size={20}
              onClick={() => {
                history.push(`/livreurs/${row.id}`);
              }}
            />
            <Edit
              className="cursor-pointer"
              size={20}
              // onClick={() => {
              //   history.push("/partenaires/modifier_partenaire", row);
              // }}
            />
          </div>
        ),
      },
    ],
    data: [],
    filteredData: [],
    value: "",
    errorAlert: false,
    errorText: "Vérifier votre cnnexion",
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/livreurs?access_token=a");
      const data = response.data.map((item) => {
        return {
          id: item.livreur_id,
          name: item.nom_complet,
          email: item.email,
          vehicule: item.vehicule,
          code_postale: item.code_postal ? item.code_postal : "pas définie",
          date: item.created_at,
          status: item.is_blocked,
          commandes_livrés: item.n_commandes,
          balance: item.balance_paiement,
          revenue: item.chiffre_affaire,
        };
      });

      this.setState({
        data,
      });
    } catch (err) {
      const error_message =
        err.message === "Network Error"
          ? "Une erreur s'est produite lors de la récupération des données."
          : "Vérifiez votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
  }

  handleFilter = (e) => {
    let value = e.target.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });

    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.revenue.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().startsWith(value.toLowerCase()) ||
          item.vihecule.toLowerCase().startsWith(value.toLowerCase()) ||
          item.code_postale.toLowerCase().startsWith(value.toLowerCase()) ||
          item.commandes_livrés.toLowerCase().startsWith(value.toLowerCase()) ||
          item.balance.toLowerCase().startsWith(value.toLowerCase());
        let includesCondition =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.date.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.revenue.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase()) ||
          item.vihecule.toLowerCase().includes(value.toLowerCase()) ||
          item.code_postale.toLowerCase().includes(value.toLowerCase()) ||
          item.commandes_livrés.toLowerCase().includes(value.toLowerCase()) ||
          item.balance.toLowerCase().includes(value.toLowerCase());
        if (startsWithCondition) {
          return startsWithCondition;
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };
  handleFilterSelect = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });

    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition =
          item.status.toLowerCase().startsWith(value.toLowerCase()) ||
          item.vihecule.toLowerCase().startsWith(value.toLowerCase());

        let includesCondition =
          item.status.toLowerCase().includes(value.toLowerCase()) ||
          item.vihecule.toLowerCase().includes(value.toLowerCase());
        if (startsWithCondition) {
          return startsWithCondition;
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };

  render() {
    let { data, columns, value, filteredData } = this.state;
    let element = [];
    for (let index = 0; index < data.length; index++) {
      if (index % 5 === 0 && index > 9) {
        element.push(index);
      }
    }
    element.push(data.length);
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Livreurs</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="mt-2">
              <Row>
                <Col md="4" sm="12">
                  <FormGroup className="form-label-group">
                    <Select
                      className="React"
                      classNamePrefix="select"
                      placeholder="statut"
                      name="Statut"
                      options={Statut}
                      onChange={this.handleFilterSelect}
                    />
                  </FormGroup>
                </Col>
                <Col md="4" sm="12">
                  <FormGroup className="form-label-group">
                    <Input
                      type="text"
                      name="lastname"
                      id="lastNameMulti"
                      placeholder="Balance paiement"
                      onChange={this.handleFilter}
                    />
                    <Label for="lastNameMulti">Balance paiement</Label>
                  </FormGroup>
                </Col>
                <Col md="4" sm="12">
                  <FormGroup className="form-label-group">
                    <Select
                      className="React"
                      classNamePrefix="select"
                      placeholder="Type de véhicule"
                      name="Véhicule"
                      options={TypeVéhicule}
                      onChange={this.handleFilterSelect}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="rdt_Wrapper">
            <DataTable
              className="dataTable-custom"
              data={value.length ? filteredData : data}
              columns={columns}
              noHeader
              pagination
              subHeader
              highlightOnHover
              onRowClicked={(row) => {
                history.push("/livreurs/info", row);
              }}
              paginationRowsPerPageOptions={element}
              subHeaderComponent={
                <CustomHeader value={value} handleFilter={this.handleFilter} />
              }
            />
            <SweetAlert
              error
              title="Erreur"
              show={this.state.errorAlert}
              onConfirm={() => this.handleAlert("errorAlert", false)}
            >
              <p className="sweet-alert-text">{this.state.errorText}</p>
            </SweetAlert>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Livreurs;
