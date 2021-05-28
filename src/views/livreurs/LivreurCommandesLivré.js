import React from "react";
import {
  Card,
  CardBody,
  Badge,
  //   Input,
  CardHeader,
  CardTitle,
  Col,
  //   FormGroup,
  //   Form,
  //   Label,
} from "reactstrap";
import moment from "moment-timezone";

import Select from "react-select";

import DataTable from "react-data-table-component";
import {
  Truck,
  ExclamationTriangleFill,
  HourglassSplit,
  Check2All,
  Calendar2Week,
  Check2,
  Exclamation,
  Hourglass,
} from "react-bootstrap-icons";
import { Eye } from "react-feather";
import { history } from "../../history";

const Statut = [
  { value: "Tous", label: "Tous" },
  { value: "Livré", label: "Livré" },
  { value: "En attente", label: "En attente" },
];
const CustomHeader = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-end">
      <Col md="4" sm="12">
        <Select
          className="React"
          classNamePrefix="select"
          placeholder="status commande"
          name="Statut"
          options={Statut}
          onChange={props.handleFilterSelect}
        />
      </Col>
    </div>
  );
};

class CommandesLivres extends React.Component {
  state = {
    columns: [
      {
        name: "#",
        selector: "id",
        sortable: true,
        minWidth: "90px",
        cell: (row) => (
          <p
            style={{ cursor: "pointer" }}
            className="text-bold-500 mb-0"
            onClick={() => {
              const url = `/ordonnance/${row.commande_id}`;
              history.push(url, row);
            }}
          >
            {row.commande_id}
          </p>
        ),
      },
      {
        name: "STATUT",
        selector: "status",
        minWidth: "130px",
        cell: (row) =>
          row.status_commande === 1 ? (
            <Badge
              pill
              color="light-primary"
              className="text-primary pl-50 pr-50 font-small-1 text-wrap text-bold-500"
            >
              <HourglassSplit className="primary mr-50" size={20} />
              En attente
            </Badge>
          ) : row.status_commande === 0 ? (
            <Badge color="light-danger pl-50 pr-50 " pill>
              <ExclamationTriangleFill className="danger mr-50" size={20} />
              Non-traité
            </Badge>
          ) : row.status_commande === 5 ? (
            <Badge
              style={{
                color: "#180852",
                backgroundColor: "#e9e8ee",
                fontWeight: "bold",
              }}
              color="pl-50 pr-50"
              // className="text-warning"
              pill
            >
              <Truck className="mr-50" size={20} />
              En livraison
            </Badge>
          ) : row.status_commande === 3 ? (
            <Badge color="light-success pl-50 pr-50 " pill>
              <Check2All className="success mr-50" size={20} />
              Livré
            </Badge>
          ) : row.status_commande === 4 ? (
            <Badge
              style={{
                backgroundImage: "linear-gradient(#ffd5c0, #fee6bf)",
                color: "#fe5f29",
                fontWeight: "bold",
              }}
              className="pl-50 pr-50 "
              pill
            >
              <Calendar2Week className="primary mr-50" size={20} />
              Tournée assigné
            </Badge>
          ) : row.status_commande === -2 ? (
            <Badge color="light-danger pl-50 pr-50 " pill>
              <Exclamation className="danger mr-0" size={20} />
              Annulée
            </Badge>
          ) : row.status_commande === 2 ? (
            <Badge color="light-success pl-50 pr-50 " pill>
              <Check2 className="success mr-50" size={20} />
              Validée
            </Badge>
          ) : row.status_commande === -1 ? (
            <Badge color="light-primary pl-50 pr-50 " pill>
              <Hourglass className="primary mr-50" size={20} />
              Incomplet
            </Badge>
          ) : null,
      },

      {
        name: "NOM CLIENT",
        selector: "NOM CLIENT",
        sortable: true,
        minWidth: "190px",
        cell: (row) => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.nom_complet_livraison}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.nom_complet_livraison}
              </span>
            </div>
          </div>
        ),
      },
      {
        name: "TYPE",
        selector: "type",
        // center: true,
        sortable: true,
        maxWidth: "130px",
        cell: (row) =>
          row.type === "Particulier" ? (
            <Badge
              style={{
                backgroundColor: "#ff9f43",
                color: "white",
                fontWeight: "bold",
              }}
              pill
            >
              {row.type}
            </Badge>
          ) : (
            <Badge color="light-success" pill>
              {row.type}
            </Badge>
          ),
      },
      {
        name: "MONTANT",
        selector: "MONTANT",
        sortable: true,
        minWidth:"120px",
        cell: (row) => (
          <p className="text-bold-500 mb-0">
            {row.montant_total === null ? "En calcule" : row.montant_total}
          </p>
        ),
      },

      {
        name: "DATE",
        selector: "DATE",
        sortable: true,
        minWidth: "130px",
        cell: (row) => (
          <p className="text-bold-500  mb-0">
            {new Date(
              moment(row.updated_at * 1000).tz("Europe/Paris")
            ).toLocaleDateString("fr-FR")}
          </p>
        ),
      },
      {
        name: "CODE POSTALE",
        selector: "CODE POSTALE",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500 mb-0">{row.code_postal_livraison}</p>
        ),
      },

      {
        name: "ORIGINE",
        selector: "origine",
        sortable: true,
        minWidth: "150px",
        cell: (row) =>
          row.origine === "infirmier" ? (
            <Badge
              color="light-success text-wrap text-bold-500 mb-0"
              style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
              pill
            >
              Infirmier
            </Badge>
          ) : row.origine === "medadom" ? (
            <Badge
              color="light-success text-wrap text-bold-500 mb-0"
              style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
              pill
            >
              MEDADOM
            </Badge>
          ) : row.origine === "web" ? (
            <Badge
              color="light-success text-wrap text-bold-500 mb-0"
              style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
              pill
            >
              WEB
            </Badge>
          ) : row.origine === "app" ? (
            <Badge
              color="light-success text-wrap text-bold-500 mb-0"
              style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
              pill
            >
              Appli
            </Badge>
          ) : (
            <Badge
              color="light-success text-wrap text-bold-500 mb-0"
              style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
              pill
            >
              Pro
            </Badge>
          ),
      },
      {
        name: "Actions",
        selector: "actions",
        cell: (row) => (
          <div className="data-list-action">
            <Eye
              className="cursor-pointer mr-1"
              size={20}
              onClick={() => {
                history.push(`/ordonnance/${row.commande_id}`);
              }}
            />
          </div>
        ),
      },
    ],

    filteredData: [],
    value: "",
  };

  handleFilterSelect = (e) => {
    // let value = e.value;
    // let data = this.props.data;
    // let filteredData = this.state.filteredData;
    // this.setState({ value });
    // if (value === "Tous") {
    //   this.setState({ value: "" });
    // }

    // if (value.length) {
    //   filteredData = data.filter((item) => {
    //     let startsWithCondition = item.status
    //       .toLowerCase()
    //       .startsWith(value.toLowerCase());

    //     let includesCondition = item.status
    //       .toLowerCase()
    //       .includes(value.toLowerCase());
    //     if (startsWithCondition) {
    //       return startsWithCondition;
    //     } else if (!startsWithCondition && includesCondition) {
    //       return includesCondition;
    //     } else return null;
    //   });
    //   this.setState({ filteredData });
    // }
  };
  render() {
    let { columns, value, filteredData } = this.state;
    // let element = [];
    // for (let index = 0; index < this.props.data.length; index++) {
    //   if (index % 5 === 0 && index > 9) {
    //     element.push(index);
    //   }
    // }
    // element.push(this.props.data.length);
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Commandes livrés</CardTitle>
          </CardHeader>
          <CardBody className="rdt_Wrapper">
            <DataTable
              className="dataTable-custom"
              data={value.length ? filteredData : this.props.data}
              columns={columns}
              noHeader
              pagination
              subHeader
              highlightOnHover
              // paginationRowsPerPageOptions={element}
              subHeaderComponent={
                <CustomHeader
                  value={value}
                  handleFilterSelect={this.handleFilterSelect}
                />
              }
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CommandesLivres;
