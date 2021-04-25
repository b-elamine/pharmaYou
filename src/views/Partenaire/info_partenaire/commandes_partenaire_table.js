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
import Select from "react-select";

import DataTable from "react-data-table-component";
import { Send, Eye, MoreVertical } from "react-feather";
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

class Commandes_partenaire extends React.Component {
  state = {
    columns: [
      {
        name: "#",
        selector: "#",
        sortable: true,
        cell: (row) => <p className="text-bold-500  mb-0"># {row.id}</p>,
      },
      {
        name: "STATUT",
        selector: "statut",
        sortable: true,
        cell: (row) => (
          <Badge
            className="text-truncate"
            color={row.status === "Livré" ? "light-success" : "light-primary"}
            pill
          >
            {row.status}
          </Badge>
        ),
      },

      {
        name: "NOM CLIENT",
        selector: "NOM CLIENT",
        sortable: true,
        minWidth: "180px",
        cell: (row) => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="30"
                width="30"
                src={row.image}
                alt={row.name}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.name}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.name}
              </span>
              <small title={row.email}>{row.email}</small>
            </div>
          </div>
        ),
      },
      {
        name: "TYPE",
        selector: "TYPE",
        sortable: false,
        cell: (row) => (
          <Badge
            style={{ padding: "8" }}
            color={row.Type === "professionnel" ? "warning" : "primary"}
            pill
          >
            {row.Type}
          </Badge>
        ),
      },
      {
        name: "MONTANT",
        selector: "MONTANT",
        sortable: true,
        cell: (row) => <p className="text-bold-500 mb-0">{row.balance}</p>,
      },

      {
        name: "DATE",
        selector: "DATE",
        sortable: true,
        minWidth: "130px",
        cell: (row) => <p className="text-bold-500  mb-0">{row.date}</p>,
      },
      {
        name: "CODE POSTALE",
        selector: "CODE POSTALE",
        sortable: true,
        cell: (row) => <p className="text-bold-500 mb-0">{row.codePostale}</p>,
      },

      {
        name: "ORIGINE",
        selector: "ORIGINE",
        sortable: true,
        minWidth: "130px",
        cell: (row) => (
          <Badge
            className="text-wrap"
            style={{ padding: "8" }}
            color="light-success"
            pill
          >
            {row.origine}
          </Badge>
        ),
      },
      {
        name: "ACTIONS",
        selector: "ACTIONS",
        sortable: true,
        cell: (row) => {
          return (
            <div className="d-flex flex-row align-items-center">
              <Send style={{ color: "grey", marginRight: "15" }} size="20" />
              <Eye style={{ color: "grey" }} size="20" />
              <MoreVertical style={{ color: "grey" }} size="20" />
            </div>
          );
        },
      },
    ],
    data: [
      {
        id: "7635",
        image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: "Alyss Lillecrop",
        email: "alillecrop0@twitpic.com",
        Type: "particulier",
        codePostale: "236542",
        date: "09 fev 2021",
        status: "Livré",
        balance: "220€",

        origine: "Partenaire infermier",
      },
      {
        id: "7635",

        image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        Type: "professionnel",
        codePostale: "236542",
        date: "05 mars 2020",
        status: "En attente",
        balance: "220€",
        origine: "Partenaire infermier",
      },
      {
        id: "7635",

        image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: "Alyss Lillecrop",
        email: "alillecrop0@twitpic.com",
        Type: "particulier",
        codePostale: "236542",
        date: "09 fev 2021",
        status: "Livré",
        balance: "220€",

        origine: "Partenaire infermier",
      },
      {
        id: "7635",

        image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        Type: "professionnel",
        codePostale: "236542",
        date: "05 mars 2020",
        status: "En attente",
        balance: "220€",
        origine: "Partenaire infermier",
      },
      {
        id: "7635",

        image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: "Alyss Lillecrop",
        email: "alillecrop0@twitpic.com",
        Type: "particulier",
        codePostale: "236542",
        date: "09 fev 2021",
        status: "Livré",
        balance: "220€",

        origine: "Partenaire infermier",
      },
      {
        id: "7635",

        image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        Type: "professionnel",
        codePostale: "236542",
        date: "05 mars 2020",
        status: "En attente",
        balance: "220€",
        origine: "Partenaire infermier",
      },
      {
        id: "7635",

        image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: "Alyss Lillecrop",
        email: "alillecrop0@twitpic.com",
        Type: "particulier",
        codePostale: "236542",
        date: "09 fev 2021",
        status: "Livré",
        balance: "220€",

        origine: "Partenaire infermier",
      },
      {
        id: "7635",

        image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        Type: "professionnel",
        codePostale: "236542",
        date: "05 mars 2020",
        status: "En attente",
        balance: "220€",
        origine: "Partenaire infermier",
      },
    ],
    filteredData: [],
    value: "",
  };

  handleFilterSelect = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });
    if (value === "Tous"){
        this.setState({ value : "" });
    }

    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition = item.status
          .toLowerCase()
          .startsWith(value.toLowerCase());

        let includesCondition = item.status
          .toLowerCase()
          .includes(value.toLowerCase());
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
            <CardTitle>Commandes des patients du partenaire</CardTitle>
          </CardHeader>
          <CardBody className="rdt_Wrapper">
            <DataTable
              className="dataTable-custom"
              data={value.length ? filteredData : data}
              columns={columns}
              noHeader
              pagination
              subHeader
              highlightOnHover
              paginationRowsPerPageOptions={element}
              subHeaderComponent={<CustomHeader value={value} handleFilterSelect={this.handleFilterSelect} />}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Commandes_partenaire;
