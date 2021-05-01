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
import { FaCar, FaMotorcycle, FaEdit, FaEye } from "react-icons/fa";

import DataTable from "react-data-table-component";
import { Search } from "react-feather";

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
        minWidth:"240px",
        cell: (row) => <p className="text-wrap" title={row.email}>{row.email}</p>,
      },
      {
        name: "VEHICULE",
        selector: "Véhicule",
        sortable: false,
        cell: (row) => (
          //   <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
          <Badge style={{ padding: "8" }} color="warning" pill>
            {row.vihecule === "voiture" ? (
              <FaCar size="14" style={{ marginRight: "5px" }} />
            ) : (
              <FaMotorcycle size="14" style={{ marginRight: "5px" }} />
            )}
            {row.vihecule}
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
        cell: (row) => (
          <Badge
            className="text-truncate"
            color={
              row.status === "Desactivé"
                ? "light-danger"
                : row.status === "Actif"
                ? "light-success"
                : "light-primary"
            }
            pill
          >
            {row.status}
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
        selector: "revenue",
        sortable: true,
        cell: (row) => <p className="text-bold-500 mb-0">{row.balance}</p>,
      },
      {
        name: "CHIFRE D'AFFAIRE",
        selector: "revenue",
        sortable: true,
        cell: (row) => <p className="text-bold-500 mb-0">{row.revenue}</p>,
      },
      {
        name: "",
        selector: "",
        sortable: true,
        cell: (row) => {
          return (
            <div className="d-flex flex-row align-items-center">
              <FaEye style={{ color: "grey", marginRight: "15" }} size="20" />
              <FaEdit style={{ color: "grey" }} size="20" />
            </div>
          );
        },
      },
    ],
    data: [
      {
        image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: "Alyss Lillecrop",
        email: "alillecrop0@twitpic.com",
        vihecule: "moto",
        code_postale: "236542",
        date: "09 fev 2021",
        status: "Actif",
        commandes_livrés: "120",
        revenue: "25,000£",
        balance: "220£",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        vihecule: "moto",
        code_postale: "236542",
        date: "05 mars 2020",
        status: "Desactivé",
        commandes_livrés: "15",
        balance: "220£",

        revenue: "50,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
        name: "Gasper Morley",
        email: "gmorley2@chronoengine.com",
        vihecule: "voiture",
        code_postale: "236542",
        date: "24 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "1231",
        balance: "220£",

        revenue: "78,000",
        ratings: "average",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
        name: "Phaedra Jerrard",
        email: "pjerrard3@blogs.com",
        vihecule: "moto",
        code_postale: "236542",
        date: "01 janvier 2019",
        status: "Acitf",
        commandes_livrés: "56",
        balance: "220£",

        revenue: "10,000",
        ratings: "bad",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
        name: "Conn Plose",
        email: "cplose4@geocities.com",
        vihecule: "voiture",
        code_postale: "236542",
        date: "12 decembre 2020",
        status: "Desactivé",
        commandes_livrés: "198",
        balance: "220£",

        revenue: "22,000",
        ratings: "average",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
        name: "Tootsie Brandsma",
        email: "tbrandsma5@theatlantic.com",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "49,000",
        ratings: "bad",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-8.jpg"),
        name: "Sibley Bum",
        email: "sbum6@sourceforge.net",
        vihecule: "voiture",
        code_postale: "236542",
        date: "12 decembre 2020",
        status: "Actif",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "56,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-7.jpg"),
        name: "Kristoffer Thew",
        email: "kthew7@amazon.com",
        vihecule: "voiture",
        code_postale: "236542",
        date: "12 decembre 2020",
        status: "Desactivé",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "83,000",
        ratings: "bad",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-26.jpg"),
        name: "Fay Hasard",
        email: "fhasard8@java.com",
        vihecule: "voiture",
        code_postale: "236542",
        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "26,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-12.jpg"),
        name: "Tabby Abercrombie",
        email: "tabercrombie9@statcounter.com",
        vihecule: "voiture",
        code_postale: "236542",
        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "60,000",
        ratings: "average",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-10.jpg"),
        name: "	Stella Indruch",
        email: "sindruch1@mayoclinic.com",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "21,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-17.jpg"),
        name: "	Aron McNirlin",
        email: "amcnirlin2@samsung.com",
        vihecule: "voiture",
        code_postale: "236542",
        balance: "220£",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",

        revenue: "30,000",
        ratings: "bad",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-20.jpg"),
        name: "Ange Trenholm",
        email: "atrenholm4@slideshare.net	",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "12,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-14.jpg"),
        name: "Caterina Starkie",
        email: "cstarkie5@feedburner.com",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "40,000",
        ratings: "average",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-25.jpg"),
        name: "Hugibert McGeagh",
        email: "hmcgeaghf@smh.com.au",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "90,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-9.jpg"),
        name: "Jaime Maher",
        email: "jmaher1@msu.edu",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "38,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-24.jpg"),
        name: "Amalle Pladen",
        email: "jmaher1@msu.edu",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "18,000",
        ratings: "average",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-18.jpg"),
        name: "Dorris Ferries",
        email: "dferries7@ucoz.com",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "69,000",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-23.jpg"),
        name: "Andy Fettes",
        email: "afettesh@upenn.edu",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "35,000",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
        name: "Allene Hughf",
        email: "ahughf0@dropbox.com",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",

        revenue: "35,000",
        ratings: "good",
      },
      {
        image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: "Petra Rheubottom",
        email: "prheubottom0@globo.com",
        vihecule: "voiture",
        code_postale: "236542",

        date: "12 decembre 2020",
        status: "En attente de validation",
        commandes_livrés: "120",
        balance: "220£",
        revenue: "72,000",
      },
    ],
    filteredData: [],
    value: "",
  };

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
                history.push("/livreurs/info",row);
              }}
              paginationRowsPerPageOptions={element}
              subHeaderComponent={
                <CustomHeader value={value} handleFilter={this.handleFilter} />
              }
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Livreurs;
