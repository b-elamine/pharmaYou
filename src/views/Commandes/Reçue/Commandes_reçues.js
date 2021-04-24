import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import DataTableCustom from "../../DataTableCustom/DataTableCustom";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import Icon from "./Icon.svg";
import { Badge } from "reactstrap";
import { CursorFill, EyeFill, CreditCard2Back } from "react-bootstrap-icons";

import {
  Truck,
  ExclamationTriangleFill,
  HourglassSplit,
  Check2All,
} from "react-bootstrap-icons";
// fake database
const data = [
  {
    id: 1,
    image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    name: "Alyss Lillecrop",
    email: "alillecrop0@twitpic.com",
    date: "May 13, 2018",
    status: "En attente",
    montant: "$32,000",
    ratings: "good",
    type: "particulier",
    code: 12345,
    origine: "Partenaire App",
    paiment: "En attente",
  },
  {
    id: 2,
    image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
    name: "Shep Pentlow",
    email: "spentlow1@home.pl",
    date: "June 5, 2019",
    status: "Non-traité",
    montant: "$50,000",
    ratings: "good",
    type: "particulier",
    code: 56789,
    origine: "Partenaire infermier",
    paiment: "En attente",
  },
  {
    id: 3,
    image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
    name: "Gasper Morley",
    email: "gmorley2@chronoengine.com",
    date: "December 24, 2019",
    status: "Non-traité",
    montant: "$78,000",
    ratings: "average",
    type: "professionnel",
    code: 1245,
    origine: "Partenaire MEDADOM",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-4.jpg"),
    name: "Phaedra Jerrard",
    email: "pjerrard3@blogs.com",
    date: "November 30, 2018",
    status: "en attente",
    montant: "$10,000",
    ratings: "bad",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
    name: "Conn Plose",
    email: "cplose4@geocities.com",
    date: "April 8, 2017",
    status: "En livraison",
    montant: "$22,000",
    ratings: "average",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Tootsie Brandsma",
    email: "tbrandsma5@theatlantic.com",
    date: "August 12, 2019",
    status: "en attente",
    montant: "$49,000",
    ratings: "bad",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-8.jpg"),
    name: "Sibley Bum",
    email: "sbum6@sourceforge.net",
    date: "October 1, 2017",
    status: "En livraison",
    montant: "$56,000",
    ratings: "good",
    paiment: "J+15",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-7.jpg"),
    name: "Kristoffer Thew",
    email: "kthew7@amazon.com",
    date: "February 28, 2018",
    status: "en attente",
    montant: "$83,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-26.jpg"),
    name: "Fay Hasard",
    email: "fhasard8@java.com",
    date: "January 29, 2018",
    status: "En livraison",
    montant: "$26,000",
    ratings: "good",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-12.jpg"),
    name: "Tabby Abercrombie",
    email: "tabercrombie9@statcounter.com",
    date: "April 1, 2019",
    status: "Livré",
    montant: "$60,000",
    ratings: "average",
    paiment: "J+18",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-10.jpg"),
    name: "	Stella Indruch",
    email: "sindruch1@mayoclinic.com",
    date: "Dec 4, 2019",
    status: "Livré",
    montant: "$21,000",
    ratings: "good",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-17.jpg"),
    name: "	Aron McNirlin",
    email: "amcnirlin2@samsung.com",
    date: "Jan 4, 2018",
    status: "en attente",
    montant: "$30,000",
    ratings: "bad",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-20.jpg"),
    name: "Ange Trenholm",
    email: "atrenholm4@slideshare.net	",
    date: "February 23, 2019",
    status: "En attente",
    montant: "$12,000",
    ratings: "good",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-14.jpg"),
    name: "Caterina Starkie",
    email: "cstarkie5@feedburner.com",
    date: "September 8, 2018",
    status: "En attente",
    montant: "$40,000",
    ratings: "average",
    paiment: "Reglé",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-25.jpg"),
    name: "Hugibert McGeagh",
    email: "hmcgeaghf@smh.com.au",
    date: "August 20, 2017",
    status: "En attente",
    montant: "$90,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-9.jpg"),
    name: "Jaime Maher",
    email: "jmaher1@msu.edu",
    date: "April 7, 2019",
    status: "En attente",
    montant: "$38,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-24.jpg"),
    name: "Amalle Pladen",
    email: "jmaher1@msu.edu",
    date: "March 30, 2018",
    status: "En attente",
    montant: "$18,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-18.jpg"),
    name: "Dorris Ferries",
    email: "dferries7@ucoz.com",
    date: "August 25, 2017",
    status: "En attente",
    montant: "$69,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-23.jpg"),
    name: "Andy Fettes",
    email: "afettesh@upenn.edu",
    date: "September 30, 2017",
    status: "en attente",
    montant: "$35,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Allene Hughf",
    email: "ahughf0@dropbox.com",
    date: "June 21, 2018",
    status: "En attente",
    montant: "$35,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    name: "Petra Rheubottom",
    email: "prheubottom0@globo.com",
    date: "July 4, 2018",
    status: "En attente",
    montant: "$72,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
    name: "Ambrosius Olyfant",
    email: "aolyfant1@timesonline.co.uk",
    date: "May 5, 2019",
    status: "en attente",
    montant: "$13,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
    name: "Letti Trineman",
    email: "ltrineman2@cnbc.com",
    date: "February 15, 2017",
    status: "En attente",
    montant: "$84,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-4.jpg"),
    name: "Sayer Rodger",
    email: "srodgerb@rakuten.co.jp",
    date: "January 30, 2018",
    status: "en attente",
    montant: "$15,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
    name: "Skyler Scotcher",
    email: "sscotcher3@soup.io",
    date: "November 3, 2018",
    status: "En attente",
    montant: "$26,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Florette Shotbolt",
    email: "fshotbolt7@wiley.com",
    date: "March 12, 2017",
    status: "En attente",
    montant: "$69,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-8.jpg"),
    name: "Janis Bakhrushkin",
    email: "jbakhrushkina@epa.gov",
    date: "July 10, 2017",
    status: "En attente",
    montant: "$65,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-7.jpg"),
    name: "Alric Peinton",
    email: "apeinton0@google.cn",
    date: "February 6, 2017",
    status: "en attente",
    montant: "$38,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-26.jpg"),
    name: "Rubie Pitkethly",
    email: "rpitkethlyf@51.la",
    date: "February 20, 2018",
    status: "En attente",
    montant: "$62,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-12.jpg"),
    name: "Hortensia Soaper",
    email: "hsoaperh@mapy.cz",
    date: "June 1, 2017",
    status: "En attente",
    montant: "$60,000",
    ratings: "good",
  },
];
const commandes = {
  non_traité: 98,
  en_attente: 14,
  pro_en_attente: 2,
  en_cours_livraison: 82,
  livrée: 51,
};
const columns = [
  {
    name: "#",
    selector: "id",
    sortable: true,
    minWidth: "10px",
    cell: (row) => <p className="text-bold-500 mb-0">{row.id}</p>,
  },
  {
    name: "Statut",
    selector: "status",
    sortable: true,
    minWidth: "190px",
    cell: (row) =>
      row.status === "en attente" ? (
        <Badge
          pill
          style={{ backgroundColor: "#f8e7b6", color: "#ff7535" }}
          className="pl-50 pr-50 font-small-1 text-wrap text-bold-500"
        >
          <img src={Icon} alt="Icon" height="22" width="22" className="mr-50" />
          Traité ! Réglement en attente
        </Badge>
      ) : row.status === "Non-traité" ? (
        <Badge color="light-danger pl-50 pr-50 " pill>
          <ExclamationTriangleFill className="danger mr-50" size={20} />
          {row.status}
        </Badge>
      ) : row.status === "En livraison" ? (
        <Badge
          style={{
            color: "#180852",
            backgroundColor: "#e9e8ee",
            fontWeight: "bold",
          }}
          color="pl-50 pr-50"
          pill
        >
          <Truck className="mr-50" size={20} />
          {row.status}
        </Badge>
      ) : row.status === "Livré" ? (
        <Badge color="light-success pl-50 pr-50 " pill>
          <Check2All className="success mr-50" size={20} />
          {row.status}
        </Badge>
      ) : row.status === "En attente" ? (
        <Badge color="light-primary pl-50 pr-50 " pill>
          <HourglassSplit className="primary mr-50" size={20} />
          {row.status}
        </Badge>
      ) : null,
    // {row.status === "en attente" ? (
    //   <img src={Icon} alt="Icon" height="22" width="22" />
    // ) : row.status === "En attente" ? (
    //   <HourglassSplit className="primary" size={20} />
    // ) : row.status === "En livraison" ? (
    //   <Truck className="dark" size={20} />
    // ) : row.status === "Livré" ? (
    //   <Check2All className="success" size={20} />
    // ) : row.status === "Non-traité" ? (
    //   <ExclamationTriangleFill className="danger" size={20} />
    // ) : null}

    // {row.status === "en attente"
    //   ? "Traité! Réglement en attente"
    //   : row.status}
  },
  {
    name: "Nom Client",
    selector: "nom_client",
    sortable: true,
    minWidth: "200px",
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
    name: "Type",
    selector: "type",
    sortable: true,
    cell: (row) => (
      <Badge
        color={row.type === "particulier" ? "light-primary" : "light-success"}
        pill
      >
        {row.type}
      </Badge>
    ),
  },
  {
    name: "Montant",
    selector: "montant",
    sortable: true,
    cell: (row) => <p className="text-bold-500 mb-0">{row.montant}</p>,
  },
  {
    name: "Date",
    selector: "date",
    sortable: true,
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
    ),
  },
  {
    name: "Code postal",
    selector: "code_postal",
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.code}</p>
    ),
  },
  {
    name: "Paiment",
    selector: "paiment",
    minWidth: "150px",
    cell: (row) =>
      row.paiment === "En attente" ? (
        <Badge
          pill
          //   style={{ color: "red" }}
          className="gradient-light-primary pl-50 pr-50 text-warning text-wrap font-weight-bold"
        >
          <CreditCard2Back className="light-warning mr-50" size={20} />
          {row.paiment}
        </Badge>
      ) : row.paiment === "Reglé" ? (
        <Badge
          pill
          color="light-success pl-50 pr-50  text-success text-wrap font-weight-bold"
          size={20}
        >
          <CreditCard2Back className="light-success mr-50" size={20} />
          <strong>{row.paiment}</strong>
        </Badge>
      ) : (
        <Badge
          pill
          style={{ backgroundColor: "#fde64b", color: "black" }}
          className="pl-50 pr-50 font-small-4 text-wrap text-bold-600"
        >
          <Truck className="dark mr-50" size={20} />
          <strong>{row.paiment}</strong>
        </Badge>
      ),
    //   <Badge
    //     color={`
    //     light-success text-wrap text-bold-500 mb-0
    //     gradient-light-${
    //       row.paiment === "En attente"
    //         ? "primary"
    //         : row.paiment === "Reglé"
    //         ? "success"
    //         : "secondary"
    //     }
    //     `}
    //     style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
    //     pill
    //   >
    //     {row.paiment === "En attente" ? (
    //       <img src={Icon} alt="Icon" />
    //     ) : row.status === "Reglé" ? (
    //       <HourglassSplit className="info" size={25} />
    //     ) : (
    //       <Truck className="warning" size={25} />
    //     )}

    //     {row.paiment}
    //   </Badge>
  },
  {
    name: "Actions",
    selector: "actions",
    minWidth: "180px",
    cell: (row) => (
      <div className="data-list-action">
        <CursorFill
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            alert("Send a message " + row.id);
          }}
        />
        <EyeFill
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            alert("view the Commande " + row.id);
          }}
        />
      </div>
    ),
  },
];

class Commande_recue extends React.Component {
  state = {
    columns: [],
    data: [],
    commandes: {
      non_traité: 0,
      en_attente: 0,
      en_cours_livraison: 0,
      livrée: 0,
      pro_en_attente: 0,
    },
  };

  componentDidMount() {
    // fetching the data from the database and passing it to the state
    this.setState({
      columns: columns,
      data: data,
      commandes: {
        non_traité: commandes.non_traité,
        en_attente: commandes.en_attente,
        pro_en_attente: commandes.pro_en_attente,
        en_cours_livraison: commandes.en_cours_livraison,
        livrée: commandes.livrée,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Commabdes Reçues."
          breadCrumbParent="Commandes"
        />
        <Row>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              bg_color="danger"
              iconBg="danger"
              icon={<ExclamationTriangleFill className="danger" size={25} />}
              stat={this.state.commandes.non_traité}
              statTitle="Commandes pro Non traité"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              bg_color="info"
              iconBg="info"
              //   icon={<HourglassSplit className="info" size={25} />}
              icon={<img src={Icon} alt="Icon" />}
              stat={this.state.commandes.en_attente}
              statTitle="Commandes en attente de paiment"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              bg_color="primary"
              iconBg="primary"
              icon={<HourglassSplit className="primary" size={25} />}
              stat={this.state.commandes.pro_en_attente}
              statTitle="Commandes pro en attente"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              bg_color="warning"
              iconBg="warning"
              icon={<Truck className="warning" size={25} />}
              stat={this.state.commandes.en_cours_livraison}
              statTitle="Commandes pro en Cours de livraison"
            />
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <DataTableCustom
              columns={this.state.columns}
              data={this.state.data}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Commande_recue;
