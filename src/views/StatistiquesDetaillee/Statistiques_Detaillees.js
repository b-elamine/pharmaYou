import React from "react";
import { Row, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import "../../assets/scss/pages/dashboard-analytics.scss";
import { ButtonGroup } from "reactstrap";
import { BellFill, HourglassSplit } from "react-bootstrap-icons";
import { User, FileText, DollarSign } from "react-feather";
import axios from "../../axios";
import { date } from "yup";

class stats extends React.Component {
  state = {
    pro_chart_bar: {
      series: [
        {
          data: [],
        },
      ],
      options: {
        chart: {
          zoom: {
            enable: false,
          },
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
        },
        colors: ["#FF5614"],
        plotOptions: {
          bar: {
            columnWidth: "25px",
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
      },
    },
    pro_chart_line: {
      series: [
        {
          data: [],
        },
      ],
      options: {
        chart: {
          zoom: {
            enable: false,
          },
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
        },
        colors: ["#28C76F"],
        plotOptions: {
          bar: {
            columnWidth: "25px",
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
          categories: [],
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
      },
    },
    particular_chart_bar: {
      series: [
        {
          data: [],
        },
      ],
      options: {
        chart: {
          zoom: {
            enable: false,
          },
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
        },
        colors: ["#FC8F04"],
        plotOptions: {
          bar: {
            columnWidth: "25px",
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
      },
    },
    particular_chart_line: {
      series: [
        {
          data: [],
        },
      ],
      options: {
        chart: {
          zoom: {
            enable: false,
          },
          toolbar: {
            show: false,
          },
          height: "3.5rem",
          type: "bar",
        },
        colors: ["#00CFE8"],
        plotOptions: {
          bar: {
            columnWidth: "25px",
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
      },
    },
    horizontal_Chart1: {
      options: {
        chart: {
          zoom: {
            enable: false,
          },
          toolbar: {
            show: false,
          },
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
          categories: [],
        },
      },
      series: [
        {
          data: [],
        },
      ],
    },
    horizontal_Chart2: {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
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
          categories: [],
        },
      },
      series: [
        {
          data: [],
        },
      ],
    },
    statistiques_particuliers: {
      moy_par_commande: 0,
      n_clients: 0,
      n_commandes: 0,
      n_commandes_en_attente: 0,
      n_commandes_livrees: 0,
      chiffre_daffaire: 0,
    },
    statistiques_pro: {
      moy_par_commande: 0,
      n_clients: 0,
      n_commandes: 0,
      n_commandes_en_attente: 0,
      n_commandes_livrees: 0,
      chiffre_daffaire: 0,
    },
    stats_objet: {
      statistiques_particuliers: {
        jour: {
          chiffre_daffaire: 0,
        },
      },
      statistiques_professionnels: {
        jour: {
          chiffre_daffaire: 0,
        },
      },
    },
    date: "",
  };

  fetching_data = async () => {
    const statistiques = await axios.get("/statistiques_ca?access_token=a");
    const statistiques2 = await axios.get("/statistiques?access_token=a");
    const statistiques_ca_par = statistiques.data.statistiques_ca_particuliers;
    const statistiques_ca_professionnels =
      statistiques.data.statistiques_ca_professionnels;
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const new_horizontal_chart_1 = {
      options: {
        chart: {
          ...this.state.horizontal_Chart1.options.chart,
        },
        colors: this.state.horizontal_Chart1.options.colors,
        plotOptions: {
          ...this.state.horizontal_Chart1.options.plotOptions,
        },
        dataLabels: {
          ...this.state.horizontal_Chart1.options.dataLabels,
        },
        legend: {
          ...this.state.horizontal_Chart1.options.legend,
        },
        xaxis: {
          categories: Object.keys(statistiques_ca_par),
        },
      },
      series: [
        {
          data: Object.values(statistiques_ca_par),
        },
      ],
    };

    const new_horizontal_chart_2 = {
      options: {
        chart: {
          ...this.state.horizontal_Chart2.options.chart,
        },
        colors: this.state.horizontal_Chart2.options.colors,
        plotOptions: {
          ...this.state.horizontal_Chart2.options.plotOptions,
        },
        dataLabels: {
          ...this.state.horizontal_Chart2.options.dataLabels,
        },
        legend: {
          ...this.state.horizontal_Chart2.options.legend,
        },
        xaxis: {
          categories: Object.keys(statistiques_ca_professionnels),
        },
      },
      series: [
        {
          data: Object.values(statistiques_ca_professionnels),
        },
      ],
    };
    this.setState((prev_state, props) => {
      return {
        //setting Last 2 horizontal charts values

        horizontal_Chart1: new_horizontal_chart_1,
        horizontal_Chart2: new_horizontal_chart_2,

        //setting first card statistics

        statistiques_particuliers:
          statistiques2.data.statistiques_particuliers.jour,
        statistiques_pro: statistiques2.data.statistiques_professionnels.jour,
        pro_chart_bar: {
          ...prev_state.pro_chart_bar,
          series: [
            prev_state.pro_chart_bar.series,
            {
              data: statistiques2.data.statistiques_professionnels.jour
                .n_commandes_plot,
            },
          ],
        },
        pro_chart_line: {
          ...prev_state.pro_chart_line,
          series: [
            prev_state.pro_chart_line.series,
            {
              data: statistiques2.data.statistiques_professionnels.jour
                .chiffre_daffaire_plot,
            },
          ],
        },
        particular_chart_bar: {
          ...prev_state.particular_chart_bar,
          series: [
            prev_state.particular_chart_bar.series,
            {
              data: statistiques2.data.statistiques_particuliers.jour
                .n_commandes_plot,
            },
          ],
        },
        particular_chart_line: {
          ...prev_state.particular_chart_line,
          series: [
            prev_state.particular_chart_line.series,
            {
              data: statistiques2.data.statistiques_particuliers.jour
                .chiffre_daffaire_plot,
            },
          ],
        },
        stats_objet: statistiques2.data,
        date: date,
      };
    });
  };

  modifierState = async (e) => {
    const type = e;
    const statistiques = await axios.get("/statistiques_ca?access_token=a");
    const statistiques2 = await axios.get("/statistiques?access_token=a");
    const statistiques_ca_par = statistiques.data.statistiques_ca_particuliers;
    const statistiques_ca_professionnels =
      statistiques.data.statistiques_ca_professionnels;
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const new_horizontal_chart_1 = {
      options: {
        chart: {
          ...this.state.horizontal_Chart1.options.chart,
        },
        colors: this.state.horizontal_Chart1.options.colors,
        plotOptions: {
          ...this.state.horizontal_Chart1.options.plotOptions,
        },
        dataLabels: {
          ...this.state.horizontal_Chart1.options.dataLabels,
        },
        legend: {
          ...this.state.horizontal_Chart1.options.legend,
        },
        xaxis: {
          categories: Object.keys(statistiques_ca_par),
        },
      },
      series: [
        {
          data: Object.values(statistiques_ca_par),
        },
      ],
    };

    const new_horizontal_chart_2 = {
      options: {
        chart: {
          ...this.state.horizontal_Chart2.options.chart,
        },
        colors: this.state.horizontal_Chart2.options.colors,
        plotOptions: {
          ...this.state.horizontal_Chart2.options.plotOptions,
        },
        dataLabels: {
          ...this.state.horizontal_Chart2.options.dataLabels,
        },
        legend: {
          ...this.state.horizontal_Chart2.options.legend,
        },
        xaxis: {
          categories: Object.keys(statistiques_ca_professionnels),
        },
      },
      series: [
        {
          data: Object.values(statistiques_ca_professionnels),
        },
      ],
    };
    this.setState((prev_state, props) => {
      return {
        //setting Last 2 horizontal charts values

        horizontal_Chart1: new_horizontal_chart_1,
        horizontal_Chart2: new_horizontal_chart_2,

        //setting first card statistics

        statistiques_particuliers:
          statistiques2.data.statistiques_particuliers[`${type}`],
        statistiques_pro:
          statistiques2.data.statistiques_professionnels[`${type}`],
        pro_chart_bar: {
          ...prev_state.pro_chart_bar,
          series: [
            prev_state.pro_chart_bar.series,
            {
              data: statistiques2.data.statistiques_professionnels[`${type}`]
                .n_commandes_plot,
            },
          ],
        },
        pro_chart_line: {
          ...prev_state.pro_chart_line,
          series: [
            prev_state.pro_chart_line.series,
            {
              data: statistiques2.data.statistiques_professionnels[`${type}`]
                .chiffre_daffaire_plot,
            },
          ],
        },
        particular_chart_bar: {
          ...prev_state.particular_chart_bar,
          series: [
            prev_state.particular_chart_bar.series,
            {
              data: statistiques2.data.statistiques_particuliers[`${type}`]
                .n_commandes_plot,
            },
          ],
        },
        particular_chart_line: {
          ...prev_state.particular_chart_line,
          series: [
            prev_state.particular_chart_line.series,
            {
              data: statistiques2.data.statistiques_particuliers[`${type}`]
                .chiffre_daffaire_plot,
            },
          ],
        },
        stats_objet: statistiques2.data,
        date: date,
      };
    });
  };

  componentDidMount() {
    this.fetching_data();
    window.setInterval(this.fetching_data, 60000);
  }

  render() {
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
                    onClick={() => {
                      this.modifierState("mois");
                    }}
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
                    onClick={() => {
                      this.modifierState("semaine");
                    }}
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
                    onClick={() => {
                      this.modifierState("jour");
                    }}
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
                            <b>{}</b>
                          </h5>
                        </div>
                        <ReactApexChart
                          options={this.state.particular_chart_bar.options}
                          series={this.state.particular_chart_bar.series}
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
                            <b>
                              {
                                this.state.statistiques_particuliers
                                  .chiffre_daffaire
                              }
                              €
                            </b>
                          </h5>
                        </div>
                        <ReactApexChart
                          options={this.state.particular_chart_line.options}
                          series={this.state.particular_chart_line.series}
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
                    <h7>
                      {
                        this.state.statistiques_particuliers
                          .n_commandes_en_attente
                      }
                    </h7>
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
                    <h7>
                      {this.state.statistiques_particuliers.n_commandes_livrees}
                    </h7>
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
                    <h7>{this.state.statistiques_particuliers.n_clients}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      client <br />
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
                    <h7>
                      {this.state.statistiques_particuliers.moy_par_commande}
                    </h7>

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
                    onClick={() => {}}
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
                    onClick={() => {}}
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
                    onClick={() => {}}
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
                            <b>{}</b>
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
                            <b>
                              {this.state.statistiques_pro.chiffre_daffaire}€
                            </b>
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
                    <h7>
                      {this.state.statistiques_pro.n_commandes_en_attente}
                    </h7>
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
                    <h7>{this.state.statistiques_pro.n_commandes_livrees}</h7>
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
                    <h7>{this.state.statistiques_pro.n_clients}</h7>
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
                    <h7>{this.state.statistiques_pro.moy_par_commande}</h7>
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
              <h5>
                {" "}
                {
                  this.state.stats_objet.statistiques_particuliers.jour
                    .chiffre_daffaire
                }{" "}
                €
              </h5>
            </Col>
            <Col>
              <BellFill
                style={{
                  marginRight: "1rem",
                }}
                color="#0981f6"
                size={"20"}
              />
              {this.state.date}
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
              <h5>
                {" "}
                {
                  this.state.stats_objet.statistiques_professionnels.jour
                    .chiffre_daffaire
                }{" "}
                €
              </h5>
            </Col>
            <Col>
              <BellFill
                style={{
                  marginRight: "1rem",
                }}
                color="#0981f6"
                size={"20"}
              />
              {this.state.date}
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
