import React from "react";
import { Row, Col, Badge } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import DataTableCustom from "../../DataTableCustom/DataTableCustom";
import { Check, Edit, Trash, AlertTriangle } from "react-feather";
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
    ordonnances: 15,
    carte_vital: true,
    mutuelle: false,
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
    ordonnances: 4,
    carte_vital: false,
    mutuelle: true,
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
    ordonnances: 16,
    carte_vital: false,
    mutuelle: true,
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-4.jpg"),
    name: "Phaedra Jerrard",
    email: "pjerrard3@blogs.com",
    date: "November 30, 2018",
    status: "inactive",
    montant: "$10,000",
    ratings: "bad",
    carte_vital: true,
    mutuelle: true,
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
    name: "Conn Plose",
    email: "cplose4@geocities.com",
    date: "April 8, 2017",
    status: "active",
    montant: "$22,000",
    ratings: "average",
    ordonnances: 10,
    mutuelle: true,
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Tootsie Brandsma",
    email: "tbrandsma5@theatlantic.com",
    date: "August 12, 2019",
    status: "inactive",
    montant: "$49,000",
    ratings: "bad",
    ordonnances: 0,
    mutuelle: true,
  },
  {
    image: require("../../../assets/img/portrait/small/avatar-s-8.jpg"),
    name: "Sibley Bum",
    email: "sbum6@sourceforge.net",
    date: "October 1, 2017",
    status: "active",
    montant: "$56,000",
    ratings: "good",
    mutuelle: true,
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
    minWidth: "150px",
    sortable: true,
    cell: (row) => <p className="text-bold-200 mb-0">{row.status}</p>,
  },
  {
    name: "CODE POSTAL",
    selector: "code_postal",
    minWidth: "150px",
    sortable: true,
    cell: (row) => <p className="text-truncate mb-0">{row.code}</p>,
  },
  {
    name: "ORIGINE",
    selector: "origine",
    sortable: true,
    minWidth: "200px",
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
    cell: (row) => <p className="text-truncate mb-0">{row.date}</p>,
  },
  {
    name: "ORDONNANCES",
    selector: "ordonnances",
    sortable: true,
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
    // il faut faire des icons
    cell: (row) => (
      <div className="data-list-action">
        <Edit
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            alert("editing the client " + row.id);
          }}
        />
        <Trash
          className="cursor-pointer"
          size={20}
          onClick={() => {
            alert("deleting the client " + row.id);
          }}
        />
      </div>
    ),
  },
];

class Client_particuliers extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    // fetching the data from the database and passing it to the state
    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle=""
          breadCrumbParent="Clients particuliers"
        />
        <Row>
          <Col sm="12">
            <DataTableCustom  add_new columns={columns} data={this.state.data} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Client_particuliers;
