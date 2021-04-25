import React from "react";
import { Row, Col, Badge } from "reactstrap";
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb";
// import DataTableCustom from "../DataTableCustom/DataTableCustom";
import { Edit, Eye } from "react-feather";
import Select from "react-select";
import { history } from "../../history";
import DataTablePartenaire from "./DataTablePartenaire";

// fake database
const data = [
  {
    // id: 1,
    image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
    name: "Alyss Lillecrop",
    email: "alillecrop0@twitpic.com",
    date: "May 13, 2018",
    status: "active",
    montant: "$32,000",
    ratings: "good",
    type: "particulier",
    code: 12345,
    origine: "Partenaire App",
    ordonnances: 150,
    carte_vital: true,
    mutuelle: false,
    profession: "infirmier",
  },
  {
    // id: 2,
    image: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
    name: "Shep Pentlow",
    email: "spentlow1@home.pl",
    date: "June 5, 2019",
    status: "active",
    montant: "$50,000",
    ratings: "good",
    type: "particulier",
    code: 56789,
    origine: "Partenaire infermier",
    ordonnances: 20,
    carte_vital: false,
    mutuelle: true,
    profession: "infirmier",
  },
  {
    // id: 3,
    image: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    name: "Gasper Morley",
    email: "gmorley2@chronoengine.com",
    date: "December 24, 2019",
    status: "active",
    montant: "$78,000",
    ratings: "average",
    type: "professionnel",
    code: 1245,
    origine: "Partenaire MEDADOM",
    ordonnances: 123,
    carte_vital: false,
    mutuelle: true,
    profession: "Application Externe",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
    name: "Phaedra Jerrard",
    email: "pjerrard3@blogs.com",
    date: "November 30, 2018",
    status: "inactive",
    montant: "$10,000",
    ratings: "bad",
    carte_vital: true,
    mutuelle: true,
    profession: "Application Externe",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
    name: "Conn Plose",
    email: "cplose4@geocities.com",
    date: "April 8, 2017",
    status: "active",
    montant: "$22,000",
    ratings: "average",
    ordonnances: 10,
    mutuelle: true,
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Tootsie Brandsma",
    email: "tbrandsma5@theatlantic.com",
    date: "August 12, 2019",
    status: "inactive",
    montant: "$49,000",
    ratings: "bad",
    ordonnances: 0,
    mutuelle: true,
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-8.jpg"),
    name: "Sibley Bum",
    email: "sbum6@sourceforge.net",
    date: "October 1, 2017",
    status: "active",
    montant: "$56,000",
    ratings: "good",
    mutuelle: true,
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-7.jpg"),
    name: "Kristoffer Thew",
    email: "kthew7@amazon.com",
    date: "February 28, 2018",
    status: "inactive",
    montant: "$83,000",
    ratings: "bad",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-26.jpg"),
    name: "Fay Hasard",
    email: "fhasard8@java.com",
    date: "January 29, 2018",
    status: "active",
    montant: "$26,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-12.jpg"),
    name: "Tabby Abercrombie",
    email: "tabercrombie9@statcounter.com",
    date: "April 1, 2019",
    status: "active",
    montant: "$60,000",
    ratings: "average",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-10.jpg"),
    name: "	Stella Indruch",
    email: "sindruch1@mayoclinic.com",
    date: "Dec 4, 2019",
    status: "active",
    montant: "$21,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-17.jpg"),
    name: "	Aron McNirlin",
    email: "amcnirlin2@samsung.com",
    date: "Jan 4, 2018",
    status: "inactive",
    montant: "$30,000",
    ratings: "bad",
    profession: "infirmier",

    origine: "Partenaire App",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-20.jpg"),
    name: "Ange Trenholm",
    email: "atrenholm4@slideshare.net	",
    date: "February 23, 2019",
    status: "active",
    montant: "$12,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-14.jpg"),
    name: "Caterina Starkie",
    email: "cstarkie5@feedburner.com",
    date: "September 8, 2018",
    status: "active",
    montant: "$40,000",
    ratings: "average",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-25.jpg"),
    name: "Hugibert McGeagh",
    email: "hmcgeaghf@smh.com.au",
    date: "August 20, 2017",
    status: "active",
    montant: "$90,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-9.jpg"),
    name: "Jaime Maher",
    email: "jmaher1@msu.edu",
    date: "April 7, 2019",
    status: "active",
    montant: "$38,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-24.jpg"),
    name: "Amalle Pladen",
    email: "jmaher1@msu.edu",
    date: "March 30, 2018",
    status: "active",
    montant: "$18,000",
    ratings: "average",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-18.jpg"),
    name: "Dorris Ferries",
    email: "dferries7@ucoz.com",
    date: "August 25, 2017",
    status: "active",
    montant: "$69,000",
    ratings: "bad",
    profession: "infirmier",

    origine: "Partenaire App",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-23.jpg"),
    name: "Andy Fettes",
    email: "afettesh@upenn.edu",
    date: "September 30, 2017",
    status: "inactive",
    montant: "$35,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Allene Hughf",
    email: "ahughf0@dropbox.com",
    date: "June 21, 2018",
    status: "active",
    montant: "$35,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
    name: "Petra Rheubottom",
    email: "prheubottom0@globo.com",
    date: "July 4, 2018",
    status: "active",
    montant: "$72,000",
    ratings: "good",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
    name: "Ambrosius Olyfant",
    email: "aolyfant1@timesonline.co.uk",
    date: "May 5, 2019",
    status: "inactive",
    montant: "$13,000",
    origine: "Partenaire App",
    profession: "infirmier",

    ratings: "bad",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    name: "Letti Trineman",
    email: "ltrineman2@cnbc.com",
    date: "February 15, 2017",
    status: "active",
    montant: "$84,000",
    ratings: "average",
    profession: "infirmier",

    origine: "Partenaire App",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
    name: "Sayer Rodger",
    email: "srodgerb@rakuten.co.jp",
    date: "January 30, 2018",
    status: "inactive",
    montant: "$15,000",
    ratings: "bad",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
    name: "Skyler Scotcher",
    email: "sscotcher3@soup.io",
    date: "November 3, 2018",
    status: "active",
    montant: "$26,000",
    ratings: "average",
    profession: "infirmier",

    origine: "Partenaire App",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
    name: "Florette Shotbolt",
    email: "fshotbolt7@wiley.com",
    date: "March 12, 2017",
    status: "active",
    montant: "$69,000",
    ratings: "good",
    profession: "infirmier",

    origine: "Partenaire App",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-8.jpg"),
    name: "Janis Bakhrushkin",
    email: "jbakhrushkina@epa.gov",
    date: "July 10, 2017",
    status: "active",
    montant: "$65,000",
    ratings: "good",
    profession: "infirmier",

    origine: "Partenaire App",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-7.jpg"),
    name: "Alric Peinton",
    email: "apeinton0@google.cn",
    date: "February 6, 2017",
    status: "inactive",
    montant: "$38,000",
    ratings: "bad",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-26.jpg"),
    name: "Rubie Pitkethly",
    email: "rpitkethlyf@51.la",
    date: "February 20, 2018",
    status: "active",
    montant: "$62,000",
    ratings: "average",
    origine: "Partenaire App",
    profession: "infirmier",
  },
  {
    image: require("../../assets/img/portrait/small/avatar-s-12.jpg"),
    name: "Hortensia Soaper",
    email: "hsoaperh@mapy.cz",
    date: "June 1, 2017",
    status: "active",
    montant: "$60,000",
    ratings: "good",
    profession: "infirmier",

    origine: "Partenaire App",
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
    name: "PROFESSION",
    selector: "profession",
    sortable: true,
    minWidth: "200px",
    cell: (row) => (
      <Badge
        color={`light-${
          row.profession === "infirmier" ? "success" : "primary"
        } text-wrap text-bold-500 mb-0`}
        style={{ width: "7rem", fontSize: "74%", lineHeight: "1.1" }}
        pill
      >
        {row.profession}
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
    name: "NBR DE PATIENTS",
    selector: "nbr_patients",
    sortable: true,
    cell: (row) => (
      <p className="font-small-4 text-truncate mb-0">{row.ordonnances}</p>
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
          onClick=
            {() => {
              history.push("/partenaires/info",row);
            }}
        />
        <Edit
          className="cursor-pointer"
          size={20}
          onClick={() => {
            history.push("/partenaires/modifier_partenaire",row)

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
      if (row.profession) {
        if (!professions.includes(row.profession)) {
          professions.push(row.profession);
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

  componentDidMount() {
    // fetching the data from the database and passing it to the state
    this.setState({
      data: data,
    });
  }
  componentDidUpdate() {
    if (
      this.state.options.professions.length === 0 &&
      this.state.options.origines.length === 0 &&
      this.state.options.status.length === 0 &&
      this.state.data.length !== 0
    ) {
      this.extract_distinct_values(this.state.data);
    }
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

  add_new =()=>{
    history.push("/partenaires/nouveau_partenaire")
  }
  handle_filter_profession = (e) => {
    let value = e.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value: value });
    if (value.length) {
      filteredData = data.filter((item) => {
        if (!item.profession) {
          return null;
        }
        let equalCondition = item.profession.toLowerCase() === value.toLowerCase();
        if (equalCondition) {
          return equalCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };

  render() {
    const { value, filteredData } = this.state;
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
            <DataTablePartenaire
              add_new={this.add_new}
              columns={columns}
              data={value.length ? filteredData : this.state.data}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Partenaire;
