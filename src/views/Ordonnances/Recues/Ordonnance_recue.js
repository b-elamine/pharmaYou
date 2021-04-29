import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import DataTableCustom from "../../DataTableCustom/DataTableCustom";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import Icon from "./ICON.png";
import { Badge } from "reactstrap";
import axios from "../../../axios";
import SweetAlert from "react-bootstrap-sweetalert";

import {history} from '../../../history'

import {
  CursorFill,
  EyeFill,
  ThreeDotsVertical,
  Truck,
  ExclamationTriangleFill,
  HourglassSplit,
  Calendar3,
  Check2All,
  Calendar2Week,
  Check2,
  Exclamation,
  Hourglass,
} from "react-bootstrap-icons";
// fake database

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
          console.log(row);
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
    cell: (row) => <p className="text-bold-500 mb-0">{row.montant}</p>,
  },
  {
    name: "DATE",
    selector: "date",
    sortable: true,
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
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
    minWidth: "200px",
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
          Infirmier MEDADOM
        </Badge>
      ) : row.origine === "web" ? (
        <Badge
          color="light-success text-wrap text-bold-500 mb-0"
          style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
          pill
        >
          Infirmier WEB
        </Badge>
      ) : row.origine === "appli" ? (
        <Badge
          color="light-success text-wrap text-bold-500 mb-0"
          style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
          pill
        >
          Infirmier Appli
        </Badge>
      ) : null,
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
];

class Ordonnances_recue extends React.Component {
  state = {
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
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  fetching_data = async () => {
    console.log("fetching ....");
    try {
      const commandes = await axios.get("/commandes?access_token=a");
      // const commandes = {statusText :"OK",data : data };

      if (commandes.statusText === "OK") {
        const commandes_ordo = commandes.data.filter(
          (item) => item.type === "ordo"
        );
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
            image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
            montant: item.montant_total,
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
    this.fetching_data();
    // fetching the data from the database and passing it to the state

    this.setState({
      columns: columns,
      // data: data,
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

    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Ordonnance Reçues."
          breadCrumbParent="Ordonnance reçues"
        />
        <Row>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#fadcdc"
              second_color="#f5f3f3"
              bg_color="danger"
              iconBg="danger"
              icon={<ExclamationTriangleFill className="danger" size={25} />}
              stat={nbr_ordo_non_traité}
              statTitle="Ordonnances Non traité"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#faeed8"
              second_color="#faeed8"
              iconBg="primary"
              icon={<img src={Icon} width="45px" height="40px" alt="Icon" />}
              stat={nbr_ordo_incomplet}
              statTitle="Dossiers Incomplet"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#d3f4f9"
              second_color="#f5fcfd"
              bg_color="info"
              iconBg="info"
              icon={<HourglassSplit className="info" size={25} />}
              stat={nbr_ordo_approvis}
              statTitle="Ordonnances attente approvisionnement"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#feddcf"
              second_color="#feedcf"
              bg_color="primary"
              iconBg="primary"
              icon={<Calendar3 className="primary" size={25} />}
              stat={nbr_ordo_assigner_tournée}
              statTitle="Ordonnances assignés a une tournée"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#d0cdd9"
              second_color="#f3f2f6"
              bg_color="warning"
              iconBg="warning"
              icon={<Truck className="warning" size={25} />}
              stat={nbr_ordo_en_cours_livraison}
              statTitle="Ordonnances en Cours de livraison"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color="#cbeed3"
              second_color="#ebf7ee"
              bg_color="success"
              iconBg="success"
              icon={<Check2All className="success" size={25} />}
              stat={nbr_ordo_livrée}
              statTitle="Ordonnances livré Aujourd'hui."
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
