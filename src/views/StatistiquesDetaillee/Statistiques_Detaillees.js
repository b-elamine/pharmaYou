import React from "react";
import { Row, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
// import DataTableCustom from "../DataTableCustom/DataTableCustom"
import "../../assets/scss/pages/dashboard-analytics.scss";
import { Badge, Button, ButtonGroup } from "reactstrap";
import {
  BellFill,
  CursorFill,
  EyeFill,
  HourglassSplit,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import { Truck, User, FileText, DollarSign } from "react-feather";

const dt = 333; //test à supprimer

class stats extends React.Component {
  state = {
    commande_pro: Math.floor(Math.random() * 100),
    commande_pro_livre: Math.floor(Math.random() * 100),
    client_pro: Math.floor(Math.random() * 100),
    cmd_en_livraison: Math.floor(Math.random() * 100),
    moyenne: Math.floor(Math.random() * 100),
    pro_chart_bar: {
      series: [
        {
          data: [42, 21, 22, 10, 28],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        colors: ["#FF5614"],
        plotOptions: {
          bar: {
            columnWidth: "20%",
            distributed: true,
            borderRadius: 3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [["John"], ["Joe"], ["Jake"], ["Peter"]],
          labels: {
            show: false,
          },
        },
        subtitle: {
          text: undefined,
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        // title : {
        //     text : "Commande / Semaine",
        //     align : "left",
        //     style : {
        //         fontSize : "12px",
        //         fontWeight : "regular",
        //         color : "black"
        //     }
        // }
      },
    },
    pro_chart_line: {
      series: [
        {
          data: [42, 21, 22, 10, 28],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        colors: ["#28C76F"],
        plotOptions: {
          bar: {
            columnWidth: "20%",
            distributed: true,
            borderRadius: 3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [["John"], ["Joe"], ["Jake"], ["Peter"]],
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        // title : {
        //     text : "Chiffre d'aiffaire",
        //     align : "left",
        //     style : {
        //         fontSize : "12px",
        //         fontWeight : "regular",
        //         color : "black"
        //     }
        // }
      },
    },
    particular_char_bar: {
      series: [
        {
          data: [42, 21, 22, 10, 28],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        colors: ["#FC8F04"],
        plotOptions: {
          bar: {
            columnWidth: "20%",
            distributed: true,
            borderRadius: 3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [["John"], ["Joe"], ["Jake"], ["Peter"], ["Peter"]],
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        // title : {
        //     text : "Ordonnances reçues",
        //     align : "left",
        //     style : {
        //         fontSize : "12px",
        //         fontWeight : "regular",
        //         color : "black"
        //     }
        // }
      },
    },
    particular_char_line: {
      series: [
        {
          data: [42, 21, 22, 10, 28],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        colors: ["#00CFE8"],
        plotOptions: {
          bar: {
            columnWidth: "20%",
            distributed: true,
            borderRadius: 3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [["John"], ["Joe"], ["Jake"], ["Peter"]],
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        // title : {
        //     text : "Chiffre d'affiare ordonnance",
        //     align : "left",
        //     style : {
        //         fontSize : "12px",
        //         fontWeight : "regular",
        //         color : "black"
        //     }
        // }
      },
    },
    horizontal_Chart1: {
      options: {
        chart: {
          toolbar: false,
          height: "15rem",
        },
        colors: ["#fb8705"],
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            borderRadius: 10,
            barHeight: "40%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
        },
      },
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
    },
    horizontal_Chart2: {
      options: {
        chart: {
          toolbar: false,
          height: "15rem",
        },
        colors: ["#0981f6"],
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            borderRadius: 10,
            barHeight: "40%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
        },
      },
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
    },

    // table: {
    //   columns: [],
    //   // data: [],
    //   ordonnances: {
    //     non_traité: 0,
    //     en_attente: 0,
    //     en_cours_livraison: 0,
    //     livrée: 0,
    //     assigner_tournée: 0,
    //     dossier_incomplet: 0,
    //   },
    // },
  };

  // componentDidMount() {
  //   // fetching the data from the database and passing it to the state
  //   this.setState({
  //     table: {
  //       columns: columns,
  //       // data: data,
  //       ordonnances: {
  //         non_traité: ordonnances.non_traité,
  //         en_attente: ordonnances.en_attente,
  //         en_cours_livraison: ordonnances.en_cours_livraison,
  //         livrée: ordonnances.livrée,
  //         assigner_tournée: ordonnances.assigner_tournée,
  //         dossier_incomplet: ordonnances.dossier_incomplet,
  //       },
  //     },
  //   });
  // }

  render() {
    setInterval(() => {
      this.setState({
        commande_pro: Math.floor(Math.random() * 100),
        commande_pro_livre: Math.floor(Math.random() * 100),
        client_pro: Math.floor(Math.random() * 100),
        cmd_en_livraison: Math.floor(Math.random() * 100),
        moyenne: Math.floor(Math.random() * 100),
      });
    }, 20000);
    return (
      <div>
        <Row>
          <Row style={{ width: "100%" }}>
            <Col>
              <div>
                <h5>Particuliers</h5>
              </div>
            </Col>
            <Col>
              <div className="float-right">
                <ButtonGroup className="d-flex justify-content-end">
                  {" "}
                  {/*Btn grp for changing stats : daily, weekly or monthly*/}
                  <button
                    style={{ backgroundColor: "#ffc4ad" }}
                    className={`btn ${
                      this.props.view === "month"
                        ? "btn-primary"
                        : "btn-outline-primary text-white"
                    }`}
                    // onClick={() => {
                    //   this.props.onView("month");
                    // }}
                  >
                    Mois
                  </button>
                  <button
                    style={{ backgroundColor: "#ffc4ad" }}
                    className={`btn ${
                      this.props.view === "week"
                        ? "btn-primary"
                        : "btn-outline-primary text-white"
                    }`}
                    // onClick={() => {
                    //   this.props.onView("week");
                    // }}
                  >
                    Semaine
                  </button>
                  <button
                    style={{ backgroundColor: "#ffc4ad" }}
                    className={`btn ${
                      this.props.view === "day"
                        ? "btn-primary"
                        : "btn-outline-primary text-white"
                    }`}
                    // onClick={() => {
                    //   this.props.onView("day");
                    // }}
                  >
                    Jour
                  </button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
          <div
            className="d-flex flex-sm-row justify-content-center"
            style={{
              backgroundColor: "#ffc4ad",
              borderRadius: "15px",
              width: "100%",
              marginRight: "1rem",
              height: "15rem",
              padding: "2rem",
              marginBottom: "35px",
            }}
          >
            <div style={{ width: "40%" }}>
              <Row noGutters="false">
                <Col>
                  <div
                    className="align-items-center justify-content-center d-flex"
                    style={{
                      backgroundColor: "#ffe3d8",
                      borderRadius: "18px",
                      width: "80%",
                      height: "11rem",
                    }}
                  >
                    <Col>
                      <div className="align-self-center">
                        <div>
                          <h5
                            style={{
                              marginTop: "0.5rem",
                              marginBottom: "1rem",
                              fontSize: "14px",
                            }}
                          >
                            Ordonnances reçues
                          </h5>
                          <h5 style={{ marginBottom: "-2rem" }}>
                            <b>321</b>
                          </h5>
                        </div>
                        <ReactApexChart
                          options={this.state.pro_chart_bar.options}
                          series={this.state.pro_chart_bar.series}
                          type="bar"
                          height={"60%"}
                          width={"90%"}
                        />
                      </div>
                    </Col>
                  </div>
                </Col>
                <Col>
                  <div
                    className="align-items-center justify-content-center d-flex"
                    style={{
                      backgroundColor: "#ffe3d8",
                      borderRadius: "18px",
                      width: "80%",
                      height: "11rem",
                    }}
                  >
                    <Col>
                      <div className="align-self-center">
                        <div>
                          <h5
                            style={{
                              marginTop: "0.5rem",
                              marginBottom: "1rem",
                              fontSize: "14px",
                            }}
                          >
                            Chiffre d'affaire ordonnance
                          </h5>
                          <h5 style={{ marginBottom: "-2rem" }}>
                            <b>3 984 £</b>
                          </h5>
                        </div>
                        <ReactApexChart
                          options={this.state.pro_chart_line.options}
                          series={this.state.pro_chart_line.series}
                          // type="bar"
                          height={"60%"}
                          width={"90%"}
                        />
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              style={{
                backgroundColor: "#ffe3d8",
                borderRadius: "18px",
                width: "60%",
                height: "100%",
                padding: "1rem",
              }}
            >
              Statistiques particuliers
              <div
                style={{
                  marginTop: "2rem",
                  overflowX: "scroll",
                }}
                className="d-flex flex-sm-row justify-content-between align-items-center scroll-hide"
              >
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <FileText
                    style={{
                      marginRight: "10px",
                      background: "#D7E1DD",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="primary"
                    size={35}
                  />
                  <div>
                    <h7>12</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Commandes
                      <br />
                      pro en attente <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <User
                    style={{
                      marginRight: "10px",
                      background: "#DFE7D6",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="warning"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.commande_pro}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Commandes <br />
                      pro livrés <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <HourglassSplit
                    style={{
                      marginRight: "10px",
                      background: "#E4E6C6",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="danger"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.commande_pro_livre}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      client <br />
                      pro <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <Truck
                    style={{
                      marginRight: "10px",
                      background: "#DFE7D6",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    color="#180852"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.client_pro}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Commandes
                      <br />
                      en livraison
                      <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <DollarSign
                    style={{
                      marginRight: "10px",
                      background: "#E4E6C6",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="danger"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.cmd_en_livraison}</h7>

                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      moyenne par
                      <br />
                      commande
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <Row style={{ width: "100%" }}>
            <Col>
              <div>
                <h5>Professionnels</h5>
              </div>
            </Col>
            <Col>
              <div className="float-right">
                <ButtonGroup className="d-flex justify-content-end">
                  {" "}
                  {/*Btn grp for changing stats : daily, weekly or monthly*/}
                  <button
                    style={{ backgroundColor: "#a5c8fc" }}
                    className={`btn ${
                      this.props.view === "month"
                        ? "btn-primary"
                        : "btn-outline-primary text-white"
                    }`}
                    // onClick={() => {
                    //   this.props.onView("month");
                    // }}
                  >
                    Mois
                  </button>
                  <button
                    style={{ backgroundColor: "#a5c8fc" }}
                    className={`btn ${
                      this.props.view === "week"
                        ? "btn-primary"
                        : "btn-outline-primary text-white"
                    }`}
                    // onClick={() => {
                    //   this.props.onView("week");
                    // }}
                  >
                    Semaine
                  </button>
                  <button
                    style={{ backgroundColor: "#a5c8fc" }}
                    className={`btn ${
                      this.props.view === "day"
                        ? "btn-primary"
                        : "btn-outline-primary text-white"
                    }`}
                    // onClick={() => {
                    //   this.props.onView("day");
                    // }}
                  >
                    Jour
                  </button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
          <div
            className="d-flex flex-sm-row justify-content-center"
            style={{
              backgroundImage: "linear-gradient(#a5c8fc, #a1ecf6)",
              borderRadius: "15px",
              width: "100%",
              marginRight: "1rem",
              height: "15rem",
              padding: "2rem",
              marginBottom: "35px",
            }}
          >
            <div style={{ width: "40%" }}>
              <Row noGutters="false">
                <Col>
                  <div
                    className="align-items-center justify-content-center d-flex"
                    style={{
                      backgroundColor: "#d1eafc",
                      borderRadius: "18px",
                      width: "80%",
                      height: "11rem",
                    }}
                  >
                    <Col>
                      <div className="align-self-center">
                        <div>
                          <h5
                            style={{
                              marginTop: "0.5rem",
                              marginBottom: "1rem",
                              fontSize: "14px",
                            }}
                          >
                            Commandes professionnelles
                          </h5>
                          <h5 style={{ marginBottom: "-2rem" }}>
                            <b>467</b>
                          </h5>
                        </div>
                        <ReactApexChart
                          options={this.state.pro_chart_bar.options}
                          series={this.state.pro_chart_bar.series}
                          type="bar"
                          height={"60%"}
                          width={"90%"}
                        />
                      </div>
                    </Col>
                  </div>
                </Col>
                <Col>
                  <div
                    className="align-items-center justify-content-center d-flex"
                    style={{
                      backgroundColor: "#d1eafc",
                      borderRadius: "18px",
                      width: "80%",
                      height: "11rem",
                    }}
                  >
                    <Col>
                      <div className="align-self-center">
                        <div>
                          <h5
                            style={{
                              marginTop: "0.5rem",
                              marginBottom: "1rem",
                              fontSize: "14px",
                            }}
                          >
                            Chiffre d'affaire professionnel
                          </h5>
                          <h5 style={{ marginBottom: "-2rem" }}>
                            <b>6 294 £</b>
                          </h5>
                        </div>
                        <ReactApexChart
                          options={this.state.pro_chart_line.options}
                          series={this.state.pro_chart_line.series}
                          // type="bar"
                          height={"60%"}
                          width={"90%"}
                        />
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              style={{
                backgroundColor: "#d1eafc",
                borderRadius: "18px",
                width: "60%",
                height: "100%",
                padding: "1rem",
              }}
            >
              Statistiques professionnelles
              <div
                style={{
                  marginTop: "2rem",
                  overflowX: "scroll",
                }}
                className="d-flex flex-sm-row justify-content-between align-items-center scroll-hide"
              >
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <FileText
                    style={{
                      marginRight: "10px",
                      background: "#C6DCFB",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="danger"
                    size={35}
                    bg_color="black"
                  />
                  <div>
                    <h7>{this.state.commande_pro}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Commandes
                      <br />
                      pro en attente <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <User
                    style={{
                      marginRight: "10px",
                      background: "#D6E2DC",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="primary"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.commande_pro_livre}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Commandes <br />
                      pro livrés <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <HourglassSplit
                    style={{
                      marginRight: "10px",
                      background: "#D4DBE7",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="danger"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.client_pro}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      client <br />
                      pro <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <Truck
                    style={{
                      marginRight: "10px",
                      background: "#C6DCFB",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    color="#180852"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.cmd_en_livraison}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Commandes
                      <br />
                      en livraison
                      <br />
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-sm-row justify-content-between align-items-center">
                  <DollarSign
                    style={{
                      marginRight: "10px",
                      background: "#D4DBE7",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    className="danger"
                    size={35}
                  />
                  <div>
                    <h7>{this.state.moyenne}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      moyenne par
                      <br />
                      commande
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>

        <div
          style={{
            height: "100%",
          }}
        >
          <Row>
            <Col>
              <h6>Chiffre d'affiares ordonnances par jour</h6>
              <h5>456,345$</h5>
            </Col>
            <Col>
              <BellFill
                style={{
                  marginRight: "1rem",
                }}
                color="#0981f6"
                size={"20"}
              />
              22/03/2021
            </Col>
          </Row>
          <ReactApexChart
            options={this.state.horizontal_Chart1.options}
            series={this.state.horizontal_Chart1.series}
            type="bar"
            height={"200%"}
            width={"70%"}
          />
        </div>

        <div
          style={{
            height: "100%",
            marginTop: "4rem",
          }}
        >
          <Row>
            <Col>
              <h6>Chiffre d'affiares professionnel</h6>
              <h5>456,345$</h5>
            </Col>
            <Col>
              <BellFill
                style={{
                  marginRight: "1rem",
                }}
                color="#0981f6"
                size={"20"}
              />
              22/03/2021
            </Col>
          </Row>
          <ReactApexChart
            options={this.state.horizontal_Chart2.options}
            series={this.state.horizontal_Chart2.series}
            type="bar"
            height={"200%"}
            width={"70%"}
          />
        </div>
      </div>
    );
  }
}

export default stats;
