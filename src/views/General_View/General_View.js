import React from "react"
import { Row, Col } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import DataTableCustom from "../DataTableCustom/DataTableCustom"
import "../../assets/scss/pages/dashboard-analytics.scss"
import { Badge} from "reactstrap";
import {CursorFill, EyeFill, ThreeDotsVertical } from "react-bootstrap-icons"

const data = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
      name: "Phaedra Jerrard",
      email: "pjerrard3@blogs.com",
      date: "November 30, 2018",
      status: "inactive",
      montant: "$10,000",
      ratings: "bad",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
      name: "Conn Plose",
      email: "cplose4@geocities.com",
      date: "April 8, 2017",
      status: "active",
      montant: "$22,000",
      ratings: "average",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      name: "Tootsie Brandsma",
      email: "tbrandsma5@theatlantic.com",
      date: "August 12, 2019",
      status: "inactive",
      montant: "$49,000",
      ratings: "bad",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-8.jpg"),
      name: "Sibley Bum",
      email: "sbum6@sourceforge.net",
      date: "October 1, 2017",
      status: "active",
      montant: "$56,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-7.jpg"),
      name: "Kristoffer Thew",
      email: "kthew7@amazon.com",
      date: "February 28, 2018",
      status: "inactive",
      montant: "$83,000",
      ratings: "bad",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-26.jpg"),
      name: "Fay Hasard",
      email: "fhasard8@java.com",
      date: "January 29, 2018",
      status: "active",
      montant: "$26,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-12.jpg"),
      name: "Tabby Abercrombie",
      email: "tabercrombie9@statcounter.com",
      date: "April 1, 2019",
      status: "active",
      montant: "$60,000",
      ratings: "average",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-10.jpg"),
      name: "	Stella Indruch",
      email: "sindruch1@mayoclinic.com",
      date: "Dec 4, 2019",
      status: "active",
      montant: "$21,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-17.jpg"),
      name: "	Aron McNirlin",
      email: "amcnirlin2@samsung.com",
      date: "Jan 4, 2018",
      status: "inactive",
      montant: "$30,000",
      ratings: "bad",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-20.jpg"),
      name: "Ange Trenholm",
      email: "atrenholm4@slideshare.net	",
      date: "February 23, 2019",
      status: "active",
      montant: "$12,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-14.jpg"),
      name: "Caterina Starkie",
      email: "cstarkie5@feedburner.com",
      date: "September 8, 2018",
      status: "active",
      montant: "$40,000",
      ratings: "average",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-25.jpg"),
      name: "Hugibert McGeagh",
      email: "hmcgeaghf@smh.com.au",
      date: "August 20, 2017",
      status: "active",
      montant: "$90,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-9.jpg"),
      name: "Jaime Maher",
      email: "jmaher1@msu.edu",
      date: "April 7, 2019",
      status: "active",
      montant: "$38,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-24.jpg"),
      name: "Amalle Pladen",
      email: "jmaher1@msu.edu",
      date: "March 30, 2018",
      status: "active",
      montant: "$18,000",
      ratings: "average",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-18.jpg"),
      name: "Dorris Ferries",
      email: "dferries7@ucoz.com",
      date: "August 25, 2017",
      status: "active",
      montant: "$69,000",
      ratings: "bad",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-23.jpg"),
      name: "Andy Fettes",
      email: "afettesh@upenn.edu",
      date: "September 30, 2017",
      status: "inactive",
      montant: "$35,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      name: "Allene Hughf",
      email: "ahughf0@dropbox.com",
      date: "June 21, 2018",
      status: "active",
      montant: "$35,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
      name: "Petra Rheubottom",
      email: "prheubottom0@globo.com",
      date: "July 4, 2018",
      status: "active",
      montant: "$72,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
      name: "Ambrosius Olyfant",
      email: "aolyfant1@timesonline.co.uk",
      date: "May 5, 2019",
      status: "inactive",
      montant: "$13,000",
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
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
      name: "Sayer Rodger",
      email: "srodgerb@rakuten.co.jp",
      date: "January 30, 2018",
      status: "inactive",
      montant: "$15,000",
      ratings: "bad",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
      name: "Skyler Scotcher",
      email: "sscotcher3@soup.io",
      date: "November 3, 2018",
      status: "active",
      montant: "$26,000",
      ratings: "average",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      name: "Florette Shotbolt",
      email: "fshotbolt7@wiley.com",
      date: "March 12, 2017",
      status: "active",
      montant: "$69,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-8.jpg"),
      name: "Janis Bakhrushkin",
      email: "jbakhrushkina@epa.gov",
      date: "July 10, 2017",
      status: "active",
      montant: "$65,000",
      ratings: "good",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-7.jpg"),
      name: "Alric Peinton",
      email: "apeinton0@google.cn",
      date: "February 6, 2017",
      status: "inactive",
      montant: "$38,000",
      ratings: "bad",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-26.jpg"),
      name: "Rubie Pitkethly",
      email: "rpitkethlyf@51.la",
      date: "February 20, 2018",
      status: "active",
      montant: "$62,000",
      ratings: "average",
    },
    {
      image: require("../../assets/img/portrait/small/avatar-s-12.jpg"),
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
      cell: (row) => (
        <Badge
          color={row.status === "inactive" ? "light-danger" : "light-success"}
          pill
        >
          {row.status}
        </Badge>
      ),
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
          color={
            row.type === "particulier" ? "light-primary" : "light-success"
          }
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
      sortable: true,
      cell: (row) => (
        <p className="text-bold-500 text-truncate mb-0">{row.code}</p>
      ),
    },
    {
      name: "Origine",
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
      name: "Actions",
      selector: "actions",
      minWidth :"180px",
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
              alert("view the ordonnace " + row.id);
            }}
          />
          <ThreeDotsVertical
            className="cursor-pointer"
            size={20}
            onClick={() => {
              alert("more " + row.id);
            }}
          />
        </div>
      ),
    },
  
  ]
  
class General_View extends React.Component {
  state = {  
    pro_chart_bar : {
        series: [{
            data: [21, 22, 10, 28]
          }],
          options: {
            chart: {
              toolbar: {
                  show : false 
              },
              height: "5rem",
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            colors: ["#FF5614"],
            plotOptions: {
              bar: {
                columnWidth: '18%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: [
                ['John'],
                ['Joe'],
                ['Jake'],
                ['Peter'],
                
              ],
              labels: {
                show : false
              }
            },
            subtitle : {
                text: undefined
            },
            yaxis: {
                show : false
            },
            grid : {
                show : false
            }, 
            title : {
                text : "Cmd / Semaine",
                align : "left", 
                style : {
                    fontSize : "12px",
                    fontWeight : "regular",
                    color : "black"
                }
            }
            
          },
    },
    pro_chart_line : {
        series: [{
            data: [21, 22, 10, 28]
          }],
          options: {
            chart: {
              toolbar : {
                  show : false 
              },
              height: "5rem",
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            colors: ["#28C76F"],
            plotOptions: {
              bar: {
                columnWidth: '18%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: [
                ['John'],
                ['Joe'],
                ['Jake'],
                ['Peter'],
                
              ],
              labels: {
                show : false
              }
            },
            yaxis : {
                show : false
            },
            grid : {
                show : false
            },
            title : {
                text : "Chiffre d'aiffaire",
                align : "left", 
                style : {
                    fontSize : "12px",
                    fontWeight : "regular",
                    color : "black"
                }
            }
          },
    },
    particular_char_bar : {
        series: [{
            data: [21, 22, 10, 28]
          }],
          options: {
            chart: {
              toolbar : {
                show : false
              },
              height: "5rem",
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            colors: ["#FC8F04"],
            plotOptions: {
              bar: {
                columnWidth: '18%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: [
                ['John'],
                ['Joe'],
                ['Jake'],
                ['Peter'],
                
              ],
              labels: {
                show : false
              }
            },
            yaxis : {
                show : false
            }, 
            grid : {
                show : false
            },
            title : {
                text : "Ordonnances reçues",
                align : "left", 
                style : {
                    fontSize : "12px",
                    fontWeight : "regular",
                    color : "black"
                }
            }
          },
    },
    particular_char_line : {
        series: [{
            data: [21, 22, 10, 28]
          }],
          options: {
            chart: {
              toolbar : {
                  show : false 
              },
              height: "5rem",
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            colors: ["#00CFE8"],
            plotOptions: {
              bar: {
                columnWidth: '18%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: [
                ['John'],
                ['Joe'],
                ['Jake'],
                ['Peter'],
                
              ],
              labels: {
                show : false
              }
            }, 
            yaxis : {
                show : false
            },
            grid : {
                show : false
            }, 
            title : {
                text : "Chiffre d'affiare ordonnance",
                align : "left", 
                style : {
                    fontSize : "12px",
                    fontWeight : "regular",
                    color : "black"
                }
            }
          },
    },
    table : {
    columns :[],
    data: [],
    ordonnances: {
      non_traité: 0,
      en_attente: 0,
      en_cours_livraison: 0,
      livrée: 0,
      assigner_tournée: 0,
      dossier_incomplet: 0,
    }
    }
  };

  componentDidMount() {
    // fetching the data from the database and passing it to the state
    this.setState({
      table: {
        columns :columns,
        data: data,
        ordonnances: {
        non_traité: ordonnances.non_traité,
        en_attente: ordonnances.en_attente,
        en_cours_livraison: ordonnances.en_cours_livraison,
        livrée: ordonnances.livrée,
        assigner_tournée: ordonnances.assigner_tournée,
        dossier_incomplet: ordonnances.dossier_incomplet,
      },
    }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
        <Col sm="12">
          <h5>Particuliers</h5>
            <div 
            style={{
            backgroundImage:"linear-gradient(#F1AE73 , #EEE4DC)",
            borderRadius:"15px",
            width:"100%",
            marginRight:"1rem",
            height:"15rem",
            padding:"2rem",
            marginBottom:"35px",
            }}>
              <div style={{width:"40%"}}>
              <Row noGutters="false">
              <Col>
              <div className = "align-items-center justify-content-center d-flex" style={{
                  backgroundColor : "white",
                  opacity : "50%",
                  borderRadius:"18px",
                  width :"80%",
                  height:"100%"
              }}>
              <ReactApexChart
              options={this.state.particular_char_bar.options}
              series={this.state.particular_char_bar.series}
              type="bar"
              height={"100%"}
              width={"70%"}
              />
              </div>
              </Col>
              <Col>
              <div className = "align-items-center justify-content-center d-flex"  style={{
                  backgroundColor : "white",
                  opacity : "50%",
                  borderRadius:"18px",
                  width : "80%",
                  height:"100%"
              }}>
              <ReactApexChart
              options={this.state.particular_char_line.options}
              series={this.state.particular_char_line.series}
              type="line"
              height={"100%"}
              width={"70%"}
              />
              </div>
              </Col>
              </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
          <h5>Profesionnels</h5>
            <div 
            style={{
            backgroundImage:"linear-gradient(#F1AE73 , #EEE4DC)",
            borderRadius:"15px",
            width:"100%",
            marginRight:"1rem",
            height:"15rem",
            padding:"2rem",
            marginBottom:"35px",
            }}>
              <div style={{width:"40%"}}>
              <Row noGutters="false">
              <Col>
              <div className = "align-items-center justify-content-center d-flex"  style={{
                  backgroundColor : "white",
                  opacity : "50%",
                  borderRadius:"18px",
                  width : "80%",
                  height:"100%"
              }}>
              <ReactApexChart
              options={this.state.pro_chart_bar.options}
              series={this.state.pro_chart_bar.series}
              type="bar"
              height={"100%"}
              width={"70%"}
              />
              </div>
              </Col>
              <Col>
              <div className = "align-items-center justify-content-center d-flex"  style={{
                  backgroundColor : "white",
                  opacity : "50%",
                  borderRadius:"18px",
                  width : "80%",
                  height:"100%",
                 
              }}>      
              <ReactApexChart
              options={this.state.pro_chart_line.options}
              series={this.state.pro_chart_line.series}
              type="line"
              height={"100%"}
              width={"70%"}
              />
              </div>
              </Col>
              
              </Row>
              </div>
             
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1>Dernières commandes reçus</h1>
            <DataTableCustom columns = {this.state.table.columns} data={this.state.table.data} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default General_View
