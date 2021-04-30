import React from "react"
import { Row, Col } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import "../../assets/scss/pages/dashboard-analytics.scss"
import { Badge} from "reactstrap";
import { EyeFill, HourglassSplit } from "react-bootstrap-icons"
import { Truck, User, FileText, DollarSign } from "react-feather";
import {history} from "../../history"
import DataTableGeneral_View from "./DataTableGeneral_View"
import axios from "../../axios";

const dt = 333; //test à supprimer 

// fake data
const data = [
  {
    commande_id: "1-IZ-62",
    commande_serial_id: 1749,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497935,
    nom_complet_livraison: "Ian Atlas",
    adresse_livraison: "2 rue du Commerce",
    code_postal_livraison: "75015",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 2,
    montant_total: null,
    origine: null,
    nom_patient: "Ian",
    prenom_patient: "Atlas",
  },
  {
    commande_id: "1-LE-27",
    commande_serial_id: 1762,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Dean Ethan",
    adresse_livraison: "125",
    code_postal_livraison: "75013",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Dean",
    prenom_patient: "Ethan",
  },
  {
    commande_id: "1-NH-04",
    commande_serial_id: 1763,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "David Hunter",
    adresse_livraison: "117 rue de Losserand",
    code_postal_livraison: "75014",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "David",
    prenom_patient: "Hunter",
  },
  {
    commande_id: "1-JB-50",
    commande_serial_id: 1761,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Luca Arthur",
    adresse_livraison: "119 rue de Flandres",
    code_postal_livraison: "75019",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Luca",
    prenom_patient: "Arthur",
  },
  {
    commande_id: "1-GY-73",
    commande_serial_id: 1760,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Alex August",
    adresse_livraison: "129 rue d\u2019Al\u00e9sia",
    code_postal_livraison: "75014",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Alex",
    prenom_patient: "August",
  },
  {
    commande_id: "1-EV-96",
    commande_serial_id: 1759,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Luka Braxton",
    adresse_livraison: "117 rue de Losserand",
    code_postal_livraison: "75014",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Luka",
    prenom_patient: "Braxton",
  },
  {
    commande_id: "1-XT-01",
    commande_serial_id: 1756,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Hunter Luis",
    adresse_livraison: "91 rue du faubourg Saint-Denis",
    code_postal_livraison: "75010",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Hunter",
    prenom_patient: "Luis",
  },
  {
    commande_id: "1-TN-47",
    commande_serial_id: 1754,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Elias Felix",
    adresse_livraison: "54 bd de l\u2019H\u00f4pital",
    code_postal_livraison: "75013",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Elias",
    prenom_patient: "Felix",
  },
  {
    commande_id: "1-VQ-24",
    commande_serial_id: 1755,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Javier Finn",
    adresse_livraison: "92 rue d\u2019Al\u00e9sia",
    code_postal_livraison: "75014",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Javier",
    prenom_patient: "Finn",
  },
  {
    commande_id: "1-CT-19",
    commande_serial_id: 1758,
    type: "ordo",
    created_at: 1619497729,
    updated_at: 1619497729,
    nom_complet_livraison: "Parker Santiago",
    adresse_livraison: "125",
    code_postal_livraison: "75013",
    ville_livraison: "Paris",
    geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
    telephone: "0612345678",
    email: null,
    status_commande: 0,
    montant_total: null,
    origine: null,
    nom_patient: "Parker",
    prenom_patient: "Santiago",
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
         
          <EyeFill
            className="cursor-pointer mr-1"
            size={20}
            onClick={() => {
              alert("Voir la commande reçue " + row.id);
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
            data: [15 ,21, 22, 10, 28]
          }],
          options: {
            chart: {
              toolbar: {
                  show : false 
              },
              height: "3.5rem",
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
                columnWidth: '20%',
                distributed: true,
                borderRadius:3,
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
    pro_chart_line : {
        series: [{
            data: [13,17, 20, 14, 16]
          }],
          options: {
            chart: {
              toolbar : {
                  show : false 
              },
              height: "3.5rem",
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
                columnWidth: '20%',
                distributed: true,
                borderRadius:3,
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
    particular_char_bar : {
        series: [{
            data: [18, 22, 10, 28, 33]
          }],
          options: {
            chart: {
              toolbar : {
                show : false
              },
              height: "3.5rem",
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
                columnWidth: '20%',
                distributed: true,
                borderRadius:3,
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
    particular_char_line : {
        series: [{
            data: [21, 22, 10, 28, 33]
          }],
          options: {
            chart: {
              toolbar : {
                  show : false 
              },
              height: "3.5rem",
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
                columnWidth: '20%',
                distributed: true,
                borderRadius:3,
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
    table : {
      options: {
        professions: [],
        origines: [],
        status: [],
      },
      errorAlert: false,
      errorText: "Vérifier votre cnnexion",
      columns: [],
      data: [],
      ordonnances: {
        non_traité: 0,
        en_attente: 0,
        en_cours_livraison: 0,
        livrée: 0,
        assigner_tournée: 0,
        dossier_incomplet: 0,
      },
      value : ""
    },
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };


  fetching_Data_Table = async () => {
    try {
      const commandes = await axios.get("/commandes?access_token=a");
      // const commandes = {statusText :"OK",data : data };

      if (commandes.statusText === "OK") {
        const all_commandes = commandes;
        const custom_commandes = all_commandes.map((item) => {
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
            image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
            montant: item.montant_total ? item.montant_total : 0,
            date: new Date(item.created_at).toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            code: item.code_postal_livraison,
            origine: "infirmier",
            email: item.email,
            ville: item.ville_livraison,
            paiment: "reglé",
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
            mutuelle: false,
          };
        });
        this.setState({
          data: custom_commandes,
        });
        this.extract_distinct_values(this.state.table.data ? this.state.table.data : []);
      } else {
        this.handleAlert(
          "errorAlert",
          true,
          commandes.error_code ? commandes.error_code : commandes.statusText
        );
      }
    } catch (err) {
      const error_message =
        err.message === "Network Error"
          ? "Une erreur est produite lors de la récupération des données."
          : "Vérifier votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
  };


  componentDidMount() {
    // fetching the data table from the database and passing it to the state

    this.fetching_Data_Table();
    console.log(this.state.table.data)
    console.log(this.state.table.columns)
  }
  

  render() {
    return (
      <React.Fragment>
        <Row>
        
          <h5>Particuliers</h5>
          <div 
            className="d-flex flex-sm-row justify-content-center"
            style={{
            backgroundColor:"#ffc4ad",
            borderRadius:"15px",
            width:"100%",
            marginRight:"1rem",
            height:"15rem",
            padding:"2rem",
            marginBottom:"35px",
            }}>
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
                    <h5 style={{marginTop:"0.5rem",marginBottom:"1rem", fontSize:"14px"}} >Ordonnances reçues</h5>
                    <h5 style={{marginBottom:"-2rem",}} ><b>321</b></h5>
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
                    <h5 style={{marginTop:"0.5rem",marginBottom:"1rem", fontSize:"14px"}} >Chiffre d'affaire ordonnance</h5>
                    <h5 style={{marginBottom:"-2rem",}} ><b>3 984 £</b></h5>
                    </div>
                    <ReactApexChart
                      options={this.state.pro_chart_line.options}
                      series={this.state.pro_chart_line.series}
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
                style ={{ 
                    backgroundColor : "#ffe3d8",
                   borderRadius:"18px",
                   width :"60%",
                   height:"100%",
                   padding : "1rem"
              }}>
                  Statistiques particuliers
                  <div style={{
                      marginTop:"2rem",
                      overflowX:"scroll",
                      
                  }}
                  className="d-flex flex-sm-row justify-content-between align-items-center scroll-hide" >
                
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <FileText  style ={{
                    marginRight :"10px",
                    background:"#D7E1DD",
                     padding:"5px",
                    borderRadius:"50%",
                   
                }}
                    className="primary" size={35}    />
                <div>
                <h7>12</h7>
                <p style={{
                    fontSize :"12px"
                }}>Commandes<br/>
                pro en attente <br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <User  style ={{
                    marginRight :"10px",
                    background:"#DFE7D6",
                    padding:"5px",
                   borderRadius:"50%",
                }}
                    className="warning" size={35} />
                <div>
                <h7>12</h7>
                <p style={{
                    fontSize :"12px"
                }}>Commandes <br/>
                pro livrés <br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <HourglassSplit  style ={{
                    marginRight :"10px",
                    background:"#E4E6C6",
                    padding:"5px",
                   borderRadius:"50%",
                }}
                    className="danger" size={35} />
                <div>
                <h7>12</h7>
                <p style={{
                    fontSize :"12px"
                }}>client <br/>
                pro <br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <Truck  style ={{
                    marginRight :"10px",
                    background:"#DFE7D6",
                    padding:"5px",
                    borderRadius:"50%",
                }}
                    color="#180852" size={35} />
                <div>
                <h7>{dt}</h7>
                <p style={{
                    fontSize :"12px"
                }}>Commandes<br/>
                en livraison<br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <DollarSign  style ={{
                    marginRight :"10px",
                    background:"#E4E6C6",
                    padding:"5px",
                    borderRadius:"50%",
                }}
                    className="danger" size={35} />
                <div>
                <h7>12</h7> 
                 
                <p style={{
                    fontSize :"12px"
                }}>moyenne par<br/>
                commande<br/></p>
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
            backgroundImage:"linear-gradient(#a5c8fc, #a1ecf6)",
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
                  backgroundColor : "#d1eafc",
                  borderRadius:"18px",
                  width : "80%",
                  height:"11rem"
              }}>
              <Col>
              <div className="align-self-center">
              <div>
              <h5 style={{marginTop:"0.5rem",marginBottom:"1rem", fontSize:"14px"}} >Commandes professionnelles</h5>
              <h5 style={{marginBottom:"-2rem",}} ><b>467</b></h5>
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
                    <h5 style={{marginTop:"0.5rem",marginBottom:"1rem", fontSize:"14px"}} >Chiffre d'affaire professionnel</h5>
                    <h5 style={{marginBottom:"-2rem",}} ><b>6 294 £</b></h5>
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
                style ={{ 
                    backgroundColor : "#d1eafc",
                   borderRadius:"18px",
                   width :"60%",
                   height:"100%",
                   padding : "1rem"
              }}>
                  Statistiques professionnelles
                  <div style={{
                      marginTop:"2rem",
                      overflowX:"scroll"
                  }}
                  className="d-flex flex-sm-row justify-content-between align-items-center scroll-hide" >
                
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <FileText  style ={{
                    marginRight :"10px",
                    background:"#C6DCFB",
                    padding:"5px",
                   borderRadius:"50%",
                   
                }}
                    className="danger" size={35} bg_color="black"  />
                <div>
                <h7>12</h7>
                <p style={{
                    fontSize :"12px"
                }}>Commandes<br/>
                pro en attente <br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <User  style ={{
                    marginRight :"10px",
                    background:"#D6E2DC",
                    padding:"5px",
                   borderRadius:"50%",
                }}
                    className="primary" size={35} />
                <div>
                <h7>12</h7>
                <p style={{
                    fontSize :"12px"
                }}>Commandes <br/>
                pro livrés <br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <HourglassSplit  style ={{
                    marginRight :"10px",
                    background:"#D4DBE7",
                    padding:"5px",
                   borderRadius:"50%",
                }}
                   className="danger" size={35} />
                <div>
                <h7>12</h7>
                <p style={{
                    fontSize :"12px"
                }}>client <br/>
                pro <br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <Truck  style ={{
                    marginRight :"10px",
                    background:"#C6DCFB",
                    padding:"5px",
                   borderRadius:"50%",
                }}
                    color="#180852" size={35} />
                <div>
                <h7>{dt}</h7>
                <p style={{
                    fontSize :"12px"
                }}>Commandes<br/>
                en livraison<br/></p>
                </div>
               </div>
               <div className="d-flex flex-sm-row justify-content-between align-items-center">
                <DollarSign  style ={{
                    marginRight :"10px",
                    background:"#D4DBE7",
                    padding:"5px",
                   borderRadius:"50%",
                }}
                    className="danger" size={35} />
                <div>
                <h7>12</h7>
                <p style={{
                    fontSize :"12px"
                }}>moyenne par<br/>
                commande<br/></p>
                </div>
               </div>
              </div>
            </div>
            </div>
        </Row>
        <Row>
          <Col>
          <h1>Dernières commandes reçus</h1>
            <DataTableGeneral_View
            className="dataTable-custom"
            noHeader
            pagination
            subHeader 
            highlightOnHover
            columns = {this.state.table.columns}
            data={this.state.table.data}
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default General_View
