import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import DataTableCustom from "./DataTableCustom";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import Icon from "./Icon.svg";

import {
  Truck,
  ExclamationTriangleFill,
  HourglassSplit,
  Calendar3,
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
    status: "active",
    montant: "$32,000",
    ratings: "good",
    type: "particulier",
    code: 12345,
    origine: "Partenaire App",
  },
  {
    id: 2,
    image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
    name: "Shep Pentlow",
    email: "spentlow1@home.pl",
    date: "June 5, 2019",
    status: "active",
    montant: "$50,000",
    ratings: "good",
    type: "particulier",
    code: 56789,
    origine: "Partenaire infermier",
  },
  {
    id: 3,
    image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
    name: "Gasper Morley",
    email: "gmorley2@chronoengine.com",
    date: "December 24, 2019",
    status: "active",
    montant: "$78,000",
    ratings: "average",
    type: "professionnel",
    code: 1245,
    origine: "Partenaire MEDADOM",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-4.jpg"),
    name: "Phaedra Jerrard",
    email: "pjerrard3@blogs.com",
    date: "November 30, 2018",
    status: "inactive",
    montant: "$10,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
    name: "Conn Plose",
    email: "cplose4@geocities.com",
    date: "April 8, 2017",
    status: "active",
    montant: "$22,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Tootsie Brandsma",
    email: "tbrandsma5@theatlantic.com",
    date: "August 12, 2019",
    status: "inactive",
    montant: "$49,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-8.jpg"),
    name: "Sibley Bum",
    email: "sbum6@sourceforge.net",
    date: "October 1, 2017",
    status: "active",
    montant: "$56,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-7.jpg"),
    name: "Kristoffer Thew",
    email: "kthew7@amazon.com",
    date: "February 28, 2018",
    status: "inactive",
    montant: "$83,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-26.jpg"),
    name: "Fay Hasard",
    email: "fhasard8@java.com",
    date: "January 29, 2018",
    status: "active",
    montant: "$26,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-12.jpg"),
    name: "Tabby Abercrombie",
    email: "tabercrombie9@statcounter.com",
    date: "April 1, 2019",
    status: "active",
    montant: "$60,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-10.jpg"),
    name: "	Stella Indruch",
    email: "sindruch1@mayoclinic.com",
    date: "Dec 4, 2019",
    status: "active",
    montant: "$21,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-17.jpg"),
    name: "	Aron McNirlin",
    email: "amcnirlin2@samsung.com",
    date: "Jan 4, 2018",
    status: "inactive",
    montant: "$30,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-20.jpg"),
    name: "Ange Trenholm",
    email: "atrenholm4@slideshare.net	",
    date: "February 23, 2019",
    status: "active",
    montant: "$12,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-14.jpg"),
    name: "Caterina Starkie",
    email: "cstarkie5@feedburner.com",
    date: "September 8, 2018",
    status: "active",
    montant: "$40,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-25.jpg"),
    name: "Hugibert McGeagh",
    email: "hmcgeaghf@smh.com.au",
    date: "August 20, 2017",
    status: "active",
    montant: "$90,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-9.jpg"),
    name: "Jaime Maher",
    email: "jmaher1@msu.edu",
    date: "April 7, 2019",
    status: "active",
    montant: "$38,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-24.jpg"),
    name: "Amalle Pladen",
    email: "jmaher1@msu.edu",
    date: "March 30, 2018",
    status: "active",
    montant: "$18,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-18.jpg"),
    name: "Dorris Ferries",
    email: "dferries7@ucoz.com",
    date: "August 25, 2017",
    status: "active",
    montant: "$69,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-23.jpg"),
    name: "Andy Fettes",
    email: "afettesh@upenn.edu",
    date: "September 30, 2017",
    status: "inactive",
    montant: "$35,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Allene Hughf",
    email: "ahughf0@dropbox.com",
    date: "June 21, 2018",
    status: "active",
    montant: "$35,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    name: "Petra Rheubottom",
    email: "prheubottom0@globo.com",
    date: "July 4, 2018",
    status: "active",
    montant: "$72,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
    name: "Ambrosius Olyfant",
    email: "aolyfant1@timesonline.co.uk",
    date: "May 5, 2019",
    status: "inactive",
    montant: "$13,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
    name: "Letti Trineman",
    email: "ltrineman2@cnbc.com",
    date: "February 15, 2017",
    status: "active",
    montant: "$84,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-4.jpg"),
    name: "Sayer Rodger",
    email: "srodgerb@rakuten.co.jp",
    date: "January 30, 2018",
    status: "inactive",
    montant: "$15,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
    name: "Skyler Scotcher",
    email: "sscotcher3@soup.io",
    date: "November 3, 2018",
    status: "active",
    montant: "$26,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Florette Shotbolt",
    email: "fshotbolt7@wiley.com",
    date: "March 12, 2017",
    status: "active",
    montant: "$69,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-8.jpg"),
    name: "Janis Bakhrushkin",
    email: "jbakhrushkina@epa.gov",
    date: "July 10, 2017",
    status: "active",
    montant: "$65,000",
    ratings: "good",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-7.jpg"),
    name: "Alric Peinton",
    email: "apeinton0@google.cn",
    date: "February 6, 2017",
    status: "inactive",
    montant: "$38,000",
    ratings: "bad",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-26.jpg"),
    name: "Rubie Pitkethly",
    email: "rpitkethlyf@51.la",
    date: "February 20, 2018",
    status: "active",
    montant: "$62,000",
    ratings: "average",
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-12.jpg"),
    name: "Hortensia Soaper",
    email: "hsoaperh@mapy.cz",
    date: "June 1, 2017",
    status: "active",
    montant: "$60,000",
    ratings: "good",
  },
];
const ordonnances = {
  non_traité: 10,
  en_attente: 2,
  en_cours_livraison: 20,
  livrée: 30,
  assigner_tournée: 14,
  dossier_incomplet: 4,
};

class Ordonnances_recue extends React.Component {
  state = {
    data: [],
    ordonnances: {
      non_traité: 0,
      en_attente: 0,
      en_cours_livraison: 0,
      livrée: 0,
      assigner_tournée: 0,
      dossier_incomplet: 0,
    },
  };

  componentDidMount() {
    // fetching the data from the database and passing it to the state
    this.setState({
      data: data,
      ordonnances: {
        non_traité: ordonnances.non_traité,
        en_attente: ordonnances.en_attente,
        en_cours_livraison: ordonnances.en_cours_livraison,
        livrée: ordonnances.livrée,
        assigner_tournée: ordonnances.assigner_tournée,
        dossier_incomplet: ordonnances.dossier_incomplet,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Ordonnance Reçues."
          breadCrumbParent="Ordonnance reçues"
        />
        <Row 
        
        // style={{
        //   justifyContent:"space-between",
        //   alignItems:"flex-start",
        //   display:"flex"
        // }}
        >
          <Col>
            <StatisticsCard
              hideChart
              bg_color="danger"
              iconBg="danger"
              icon={<ExclamationTriangleFill className="danger" size={25} />}
              stat={this.state.ordonnances.non_traité}
              statTitle="Ordonnances Non traité"
            />
          </Col>
          <Col xl="2" lg="4" sm="4">
            <StatisticsCard
              hideChart
              bg_color="info"
              iconBg="info"
              icon={<HourglassSplit className="info" size={25} />}
              stat={this.state.ordonnances.en_attente}
              statTitle="Ordonnances attente approvisionnement"
            />
          </Col>
          <Col xl="2" lg="4" sm="4">
            <StatisticsCard
              hideChart
              bg_color="primary"
              iconBg="primary"
              icon={<Calendar3 className="primary" size={25} />}
              stat={this.state.ordonnances.assigner_tournée}
              statTitle="Ordonnances assignés a une tournée"
            />
          </Col>
          <Col xl="2" lg="4" sm="">
            <StatisticsCard
              hideChart
              bg_color="warning"
              iconBg="warning"
              icon={<Truck className="warning" size={25} />}
              stat={this.state.ordonnances.en_cours_livraison}
              statTitle="Ordonnances en Cours de livraison"
            />
          </Col>
          <Col xl="2" lg="4" sm="4">
            <StatisticsCard
              hideChart
              bg_color="success"
              iconBg="success"
              icon={<Check2All className="success" size={25} />}
              stat={this.state.ordonnances.livrée}
              statTitle="Ordonnances livré Aujourd'hui."
            />
          </Col>
          <Col xl="2" lg="2" sm="4">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<img src={Icon} alt="Icon" />}
              stat={this.state.ordonnances.dossier_incomplet}
              statTitle="Dossiers Incomplet"
            />
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <DataTableCustom data={this.state.data} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Ordonnances_recue;
