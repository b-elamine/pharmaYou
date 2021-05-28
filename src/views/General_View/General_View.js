import React from "react";
import { Row, Col, Spinner } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import "../../assets/scss/pages/dashboard-analytics.scss";
import { Badge } from "reactstrap";
import {
  Calendar2Week,
  Check2,
  Check2All,
  Exclamation,
  ExclamationTriangleFill,
  Hourglass,
  HourglassSplit,
} from "react-bootstrap-icons";
import { Truck, User, FileText, DollarSign, Eye } from "react-feather";
import { history } from "../../history";
import DataTableGeneralView from "./DataTableGeneral_View";
import axios from "../../axios";
import SweetAlert from "react-bootstrap-sweetalert";

const dt = 333; //test à supprimer

const columns = [
  {
    name: "#",
    selector: "id",
    sortable: true,
    maxWidth: "100px",
    cell: (row) => (
      <p
        style={{ cursor: "pointer" }}
        className="text-bold-500 mb-0"
        onClick={() => {
          const url = `/ordonnance/${row.id}`;
          history.push(url, row);
        }}
      >
        {row.id}
      </p>
    ),
  },
  {
    name: "STATUT",
    selector: "status",
    minWidth: "100px",
    maxWidth: "150px",
    center: true,
    cell: (row) =>
      row.status === "en_attente" ? (
        <Badge
          pill
          color="light-primary"
          className="text-primary pl-50 pr-50 font-small-1 text-wrap text-bold-500"
        >
          <HourglassSplit className="primary mr-50" size={20} />
          En attente
        </Badge>
      ) : row.status === "non-traité" ? (
        <Badge color="light-danger pl-50 pr-50 " pill>
          <ExclamationTriangleFill className="danger mr-50" size={20} />
          Non-traité
        </Badge>
      ) : row.status === "en_livraison" ? (
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
      ) : row.status === "livrée" ? (
        <Badge color="light-success pl-50 pr-50 " pill>
          <Check2All className="success mr-50" size={20} />
          Livré
        </Badge>
      ) : row.status === "tournée_assigné" ? (
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
      ) : row.status === "annulée" ? (
        <Badge color="light-danger pl-50 pr-50 " pill>
          <Exclamation className="danger mr-0" size={20} />
          Annulée
        </Badge>
      ) : row.status === "validée" ? (
        <Badge color="light-success pl-50 pr-50 " pill>
          <Check2 className="success mr-50" size={20} />
          Validée
        </Badge>
      ) : row.status === "incomplet" ? (
        <Badge color="light-primary pl-50 pr-50 " pill>
          <Hourglass className="primary mr-50" size={20} />
          Incomplet
        </Badge>
      ) : null,
  },
  {
    name: "NOM CLIENT",
    selector: "nom_client",
    sortable: true,
    minWidth: "210px",
    cell: (row) => (
      <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
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
    selector: "type",
    // center: true,
    sortable: true,
    maxWidth: "130px",
    cell: (row) =>
      row.type === "Particulier" ? (
        <Badge
          // color="light-primary"
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
    selector: "montant",
    center: true,
    sortable: true,
    maxWidth: "100px",
    cell: (row) =>
      row.montant !== null ? (
        <p className="text-bold-500 mb-0">{row.montant} €</p>
      ) : (
        <p className="text-bold-500 mb-0">En calcul</p>
      ),
  },
  {
    name: "DATE",
    selector: "date",
    sortable: true,
    minWidth: "200px",
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
    ),
  },
  {
    name: "CODE POSTAL",
    selector: "code_postal",
    maxWidth: "120px",
    sortable: true,
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.code}</p>
    ),
  },
  {
    name: "ORIGINE",
    selector: "origine",
    maxWidth: "190px",
    // center: true,
    sortable: true,
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
    name: "ACTIONS",
    selector: "actions",
    center: true,
    maxWidth: "120px",
    cell: (row) => (
      <div className="data-list-action">
        <Eye
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            history.push(`/ordonnance/${row.id}`);
          }}
        />
      </div>
    ),
  },
];

class General_View extends React.Component {
  state = {
    errorAlert: false,
    page: 1,
    page_table: 1,
    rows: 10,
    errorText: "Vérifiez votre connexion",
    dataFetched: false,
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
    table: {
      columns: [],
      data: [],
    },
    statistiques_particuliers: {
      moy_par_commande: 0,
      n_clients: 0,
      n_commandes: 0,
      n_commandes_en_attente: 0,
      n_commandes_livrees: 0,
      chiffre_daffaire: 0,
      n_commandes_en_livraison: 0,
    },
    statistiques_pro: {
      moy_par_commande: 0,
      n_clients: 0,
      n_commandes: 0,
      n_commandes_en_attente: 0,
      n_commandes_livrees: 0,
      chiffre_daffaire: 0,
      n_commandes_en_livraison: 0,
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
  };

  fetch_data = async () => {
    try {
      const commandes = await axios.get(
        `/commandes?access_token=a`
      );
      const statistiques2 = await axios.get("/statistiques?access_token=a");

      if (commandes.statusText === "OK") {
        const commandes_ordo = commandes.data;
        const custom_commandes = commandes_ordo.map((item) => {
          return {
            ...item,
            id: item.commande_id,
            status:
              item.status_commande === -2
                ? "annulée"
                : item.status_commande === -1
                ? "incomplet"
                : item.status_commande === 0
                ? "non-traité"
                : item.status_commande === 1
                ? "attente_approvisionnement"
                : item.status_commande === 2
                ? "validée"
                : item.status_commande === 3
                ? "livrée"
                : null,
            // status :"incomplet",
            name: item.nom_patient + " " + item.prenom_patient,
            // name: 'Akram Ouardas',
            type: item.type === "ordo" ? "Particulier" : "Professionnel",
            montant: item.montant_total,
            date: new Date(item.updated_at * 1000).toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            code: item.code_postal_livraison,
            origine: item.origine,
            email: item.email,
            ville: item.ville_livraison,
            paiment: item.status_paiement,
            patient: {
              nom: item.nom_patient,
              prenom: item.prenom_patient,
              address: `${item.adresse_livraison} , ${item.code_postal_livraison} , ${item.ville_livraison}`,
              num_tel: item.telephone,
              appeler: true,
              email: item.email,
              note: item.note_admin
                ? item.note_admin
                : "Pas de note pour l'instant.",
            },
            CMU: true,
            mutuelle: item.mutuelle_ok,
          };
        });
        custom_commandes.push({...custom_commandes[0]})
        this.setState({
          table: {
            columns: columns,
            data: custom_commandes,
            total_rows: commandes.data.nbr_total_commandes,
          },
        });
        this.setState({ dataFetched: true });
        this.setState((prev_state) => {
          return {
            statistiques_particuliers:
              statistiques2.data.statistiques_particuliers.jour,
            statistiques_pro:
              statistiques2.data.statistiques_professionnels.jour,
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
          };
        });
      } else {
        this.handleAlert(
          "errorAlert",
          true,
          commandes.error_code ? commandes.error_code : commandes.statusText
        );
      }
    } catch (err) {
      console.log(err);
      const error_message =
        err.message === "Network Error"
          ? "Une erreur s'est produite lors de la récupération des données."
          : "Vérifiez votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text, dataFetched: true });
  };

  componentDidMount() {
    // fetching the data from the database and passing it to the state
    this.fetch_data(1);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <h5>Particuliers</h5>
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
                            <b></b>
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
                            Chiffre d'affaires ordonnances
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
              <h5
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  fontSize: "14px",
                }}
              >
                Statistiques particuliers
              </h5>
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
                      {this.state.statistiques_particuliers.n_commandes_livrees}
                    </h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      ordonnances
                      <br />
                      livrées <br />
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
                    <h7>{this.state.statistiques_particuliers.n_clients}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      clients <br />
                      particuliers <br />
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
                      ordonnances
                      <br />
                      en attente <br />
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
                    <h7>
                      {
                        this.state.statistiques_particuliers
                          .n_commandes_en_livraison
                      }
                    </h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      ordonnances
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
                    <h7>
                      {this.state.statistiques_particuliers.moy_par_commande}
                    </h7>

                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      en moyenne par
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
          <h5>Professionnels</h5>
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
                            <b></b>
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
              <h5>Statistiques professionnelles</h5>
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
                      commandes
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
                      commandes <br />
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
                      clients <br />
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
                    <h7>
                      {this.state.statistiques_pro.n_commandes_en_livraison}
                    </h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      commandes
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
                    <h7>{this.state.statistiques_pro.moy_par_commande}</h7>
                    <p
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      en moyenne par
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
          {this.state.dataFetched ? (
            <Col>
              <h1>Dernières commandes reçus</h1>
              <DataTableGeneralView
                page={this.state.page}
                className="dataTable-custom"
                noHeader
                pagination
                subHeader
                highlightOnHover
                columns={this.state.table.columns}
                data={this.state.table.data}
                total_rows={this.state.table.total_rows}
                set_rows_page={(rows, page) => {
                  this.setState({
                    rows: rows,
                    // page_table: page,
                  });
                }}
                rows={this.state.rows}
                fetch_data={(page) => {
                  this.setState({
                    page : this.state.page +1
                  })
                  // console.log("fetche the page : ",page)
                  this.fetch_data(page)
                }}
              />
            </Col>
          ) : (
            <Col>
              <div className="align-items-center justify-content-center d-flex">
                <Spinner
                  color="warning"
                  style={{ width: "5rem", height: "5rem" }}
                />
              </div>
            </Col>
          )}

          <SweetAlert
            error
            title="Erreur"
            show={this.state.errorAlert}
            onConfirm={() => this.handleAlert("errorAlert", false)}
          >
            <p className="sweet-alert-text">{this.state.errorText}</p>
          </SweetAlert>
        </Row>
      </React.Fragment>
    );
  }
}

export default General_View;
