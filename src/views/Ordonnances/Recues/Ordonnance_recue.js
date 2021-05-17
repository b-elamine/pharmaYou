import React from "react";
import { Row, Col, Spinner } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import DataTableCustom from "../../DataTableCustom/DataTableCustom";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
// import Icon from "./ICON.png";
import { Badge } from "reactstrap";
import axios from "../../../axios";
import SweetAlert from "react-bootstrap-sweetalert";

import { history } from "../../../history";

import {

  Truck,
  ExclamationTriangleFill,
  HourglassSplit,
  Calendar3,
  Check2All,
  Calendar2Week,
  Check2,
  Exclamation,
  Hourglass,
  FolderMinus,
} from "react-bootstrap-icons";
import { Eye } from "react-feather";

import Select from "react-select";
import moment from "moment-timezone";
import "moment/locale/fr";

// fake database

// const data = [
//   {
//     commande_id: "1-IZ-62",
//     commande_serial_id: 1749,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497935,
//     nom_complet_livraison: "Ian Atlas",
//     adresse_livraison: "2 rue du Commerce",
//     code_postal_livraison: "75015",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 2,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Ian",
//     prenom_patient: "Atlas",
//   },
//   {
//     commande_id: "1-LE-27",
//     commande_serial_id: 1762,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Dean Ethan",
//     adresse_livraison: "125",
//     code_postal_livraison: "75013",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Dean",
//     prenom_patient: "Ethan",
//   },
//   {
//     commande_id: "1-NH-04",
//     commande_serial_id: 1763,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "David Hunter",
//     adresse_livraison: "117 rue de Losserand",
//     code_postal_livraison: "75014",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "David",
//     prenom_patient: "Hunter",
//   },
//   {
//     commande_id: "1-JB-50",
//     commande_serial_id: 1761,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Luca Arthur",
//     adresse_livraison: "119 rue de Flandres",
//     code_postal_livraison: "75019",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Luca",
//     prenom_patient: "Arthur",
//   },
//   {
//     commande_id: "1-GY-73",
//     commande_serial_id: 1760,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Alex August",
//     adresse_livraison: "129 rue d\u2019Al\u00e9sia",
//     code_postal_livraison: "75014",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Alex",
//     prenom_patient: "August",
//   },
//   {
//     commande_id: "1-EV-96",
//     commande_serial_id: 1759,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Luka Braxton",
//     adresse_livraison: "117 rue de Losserand",
//     code_postal_livraison: "75014",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Luka",
//     prenom_patient: "Braxton",
//   },
//   {
//     commande_id: "1-XT-01",
//     commande_serial_id: 1756,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Hunter Luis",
//     adresse_livraison: "91 rue du faubourg Saint-Denis",
//     code_postal_livraison: "75010",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Hunter",
//     prenom_patient: "Luis",
//   },
//   {
//     commande_id: "1-TN-47",
//     commande_serial_id: 1754,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Elias Felix",
//     adresse_livraison: "54 bd de l\u2019H\u00f4pital",
//     code_postal_livraison: "75013",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Elias",
//     prenom_patient: "Felix",
//   },
//   {
//     commande_id: "1-VQ-24",
//     commande_serial_id: 1755,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Javier Finn",
//     adresse_livraison: "92 rue d\u2019Al\u00e9sia",
//     code_postal_livraison: "75014",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Javier",
//     prenom_patient: "Finn",
//   },
//   {
//     commande_id: "1-CT-19",
//     commande_serial_id: 1758,
//     type: "ordo",
//     created_at: 1619497729,
//     updated_at: 1619497729,
//     nom_complet_livraison: "Parker Santiago",
//     adresse_livraison: "125",
//     code_postal_livraison: "75013",
//     ville_livraison: "Paris",
//     geocoords_livraison: { lat: 48.8566, lon: 2.3522 },
//     telephone: "0612345678",
//     email: null,
//     status_commande: 0,
//     montant_total: null,
//     origine: null,
//     nom_patient: "Parker",
//     prenom_patient: "Santiago",
//   },
// ];
// const ordonnances = {
//   non_traité: 10,
//   en_attente: 2,
//   en_cours_livraison: 20,
//   livrée: 30,
//   assigner_tournée: 14,
//   dossier_incomplet: 4,
// };
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
    name: "STATUT",
    selector: "status",
    minWidth: "150px",
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
    minWidth: "180px",
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
    sortable: true,
    cell: (row) =>
      row.type === "particulier" ? (
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
    sortable: true,
    cell: (row) => row.montant !== null ? <p className="text-bold-500 mb-0">{row.montant} €</p>:<p className="text-bold-500 mb-0">En calcul</p>,
  },
  {
    name: "DATE",
    selector: "date",
    minWidth: "180px",
    sortable: true,
    cell: (row) => (
      <p className="text-bold-500 text-wrap mb-0">{row.date}</p>
    ),
  },
  {
    name: "CODE POSTAL",
    selector: "code_postal",
    sortable: true,
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.code}</p>
    ),
  },
  {
    name: "ORIGINE",
    selector: "origine",
    sortable: true,
    minWidth: "150px",
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
      ) : <Badge
      color="light-success text-wrap text-bold-500 mb-0"
      style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
      pill
    >
      Pro
    </Badge>,
  },
  {
    name: "Actions",
    selector: "actions",
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

class Ordonnances_recue extends React.Component {
  state = {
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
  };

  extract_distinct_values(data) {
    const origines = [];
    const status = [];
    data.forEach((row) => {
      if (row.origine) {
        if (!origines.includes(row.origine)) {
          origines.push(row.origine);
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
        origines: origine_options,
        status: status_options,
      },
    });
  }

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

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

  fetching_data = async () => {
    try {
      const commandes = await axios.get("/commandes?access_token=a");
      console.log(commandes)
      // const commandes = {statusText :"OK",data : data };

      if (commandes.statusText === "OK") {
        const commandes_ordo = commandes.data.filter(
          (item) => item.type === "ordo"
        );
        console.log(commandes_ordo)

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
            name: item.nom_patient + " " + item.prenom_patient,
            type: item.type === "ordo" ? "Particulier" : "Professionnel",
            montant: item.montant_total,
            date: new Date(moment(item.updated_at * 1000).tz('Europe/Paris')).toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
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
            mutuelle: item.vitale_ok,
          };
        });
        this.setState({
          data: custom_commandes,
        });
        this.extract_distinct_values(this.state.data ? this.state.data : []);
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
          ? "Une erreur s'est produite lors de la récupération des données."
          : "Vérifiez votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
  };

  componentDidMount() {
    // fetching the data from the database and passing it to the state
    this.fetching_data();
    this.setState({
      columns: columns,
      // data: data,
    });
  }

  render() {
    const ordo_non_traité = this.state.data.filter(
      (item) => item.status_commande === 0
    );
    const nbr_ordo_non_traité = ordo_non_traité.length;

    const ordo_attente_approvis = this.state.data.filter(
      (item) => item.status_commande === 1
    );
    const nbr_ordo_approvis = ordo_attente_approvis.length;

    const ordo_assigner_tournée = this.state.data.filter(
      (item) => item.status_commande === 4
    );
    const nbr_ordo_assigner_tournée = ordo_assigner_tournée.length;

    const ordo_en_cours_livraison = this.state.data.filter(
      (item) => item.status_commande === 5
    );
    const nbr_ordo_en_cours_livraison = ordo_en_cours_livraison.length;

    const ordo_livrée = this.state.data.filter(
      (item) => item.status_commande === 3
    );
    const nbr_ordo_livrée = ordo_livrée.length;
    const ordo_incomplet = this.state.data.filter(
      (item) => item.status_commande === -1
    );
    const nbr_ordo_incomplet = ordo_incomplet.length;
    const { value, filteredData } = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Ordonnances reçues."
          breadCrumbParent="Ordonnances reçues."
        />
        <Row>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#fadcdc"
              second_color="#f5f3f3"
              bg_color="danger"
              iconBg="danger"
              icon={
                
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"8px",
                  backgroundColor:"#F7CFCF",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <ExclamationTriangleFill 
                style={{
                  color:"#EA5455"
                }}
                size={30} />
                </div> }
              stat={nbr_ordo_non_traité}
              statTitle="Ordonnances non traitées"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#faeed8"
              second_color="#faeed8"
              iconBg="primary"
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"10px",
                  backgroundColor:"#FBE3C2",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <FolderMinus 
                style={{
                  color:"#EA5455"
                }}
                size={30} />
                </div> }
              stat={nbr_ordo_incomplet}
              statTitle="Dossiers incomplets"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#d3f4f9"
              second_color="#f5fcfd"
              bg_color="info"
              iconBg="info"
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"10px",
                  backgroundColor:"#BCF0F8",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <HourglassSplit 
                style={{
                  color:"#00CFE8"
                }}
                size={30} />
                </div> }
              stat={nbr_ordo_approvis}
              statTitle="Ordonnances en attente d'approvisionnement"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#feddcf"
              second_color="#feedcf"
              bg_color="primary"
              iconBg="primary"
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"10px",
                  backgroundColor:"#FFD8BB",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <Calendar3 
                style={{
                  color:"#FF9F43"
                }}
                size={30} />
                </div> }
                stat={nbr_ordo_assigner_tournée}
                statTitle="Ordonnances assignées à une tournée"
                
              />
             
            
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
           
              hideChart
              first_color="#d0cdd9"
              second_color="#f3f2f6"
              bg_color="warning"
              iconBg="warning"
              icon={
              <div
              style={{
                marginRight:"auto",
                marginLeft:"auto",
                padding:"8px",
                backgroundColor:"#CAC5E3",
                borderRadius:"50%",
                height:"50px",
                width:"50px",
              }}
              >
              <Truck 
              className="warning"
              size={35} />
              </div> }
              stat={nbr_ordo_en_cours_livraison}
              statTitle="Ordonnances en cours de livraison"
              
            />
            
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#cbeed3"
              second_color="#ebf7ee"
              bg_color="success"
              iconBg="success"
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"8px",
                  backgroundColor:"#BFECCF",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <Check2All 
                style={{
                  color:"#28C76F"
                }}
                size={35} />
                </div> }
              stat={nbr_ordo_livrée}
              statTitle="Ordonnances livrées aujourd'hui"
            />
          </Col>
        </Row>

        <Row>
          <Col md="4" sm="8">
            <Select
              classNamePrefix="select"
              placeholder="Statut"
              name="Status"
              onChange={this.handle_filter_status}
              options={this.state.options.status}
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
          <Col sm="12">
            {this.state.data.length !== 0 ? (
              <DataTableCustom
                columns={this.state.columns}
                data={value.length ? filteredData : this.state.data}
              />
            ) : (
              <div className="text-center mt-4">
                <Spinner
                  style={{ width: "5rem", height: "5rem" }}
                  color="warning"
                />
              </div>
            )}
          </Col>
        </Row>
        <SweetAlert
          error
          title="Erreur"
          show={this.state.errorAlert}
          onConfirm={() => this.handleAlert("errorAlert", false)}
        >
          <p className="sweet-alert-text">{this.state.errorText}</p>
        </SweetAlert>
      </React.Fragment>
    );
  }
}

export default Ordonnances_recue;
