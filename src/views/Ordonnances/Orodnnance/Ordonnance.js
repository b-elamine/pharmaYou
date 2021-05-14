import React, { Component } from "react";

import { Card, Row, Col } from "reactstrap";

import FirstSection from "./Premiere_section";
import SecondSection from "./Deuxieme_section";
import ThirdSection from "./Troisieme_section";
import ForthSection from "./Quatrieme_section";
import PartieDroiteHaut from "./PartieDroite_1";

import PartieDroiteBas from "./PartieDroite_2";
import "../../../assets/scss/pages/app-email.scss";

import SidebarAssignerTournee from "./SideBarAssignerTournee";
import SideBarAttenteApprovisionnement from "./SideBarAttenteApprovisionnement";
import SideBarDocumentManquant from "./SideBarDocumentManquant";
import SideBarAnnulerCommande from "./SideNarAnnulerCommande";

import axios from "../../../axios";

// const commentaires_notes = [
//   {
//     id: 1,
//     type: "Commentaire interne",
//     commentaire: "Bon client",
//     image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
//     nom: "Zongo meryouli",
//   },
//   {
//     id: 2,
//     type: "Commentaire interne",
//     commentaire: "Un client deyer ki tfou",
//     image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
//     nom: "Benssnan zakzouk",
//   },
//   {
//     id: 3,
//     type: "Note envoyé au client",
//     commentaire: "4 dose de brygabaline",
//     image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
//     nom: "Nadjet Boudouara",
//   },
//   {
//     id: 4,
//     type: "Note envoyé au client",
//     commentaire: "4 dose de brygabaline",
//     image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
//     nom: "Nadjet Boudouara",
//   },
//   {
//     id: 5,
//     type: "Commentaire interne",
//     commentaire: "Client ki soukour",
//     image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
//     nom: "Djaluidji Boufon",
//   },
// ];

class Ordonnance extends Component {
  state = {
    composeMailStatus: false,
    statusAssignerTourneSideBar: false,
    statusDocumentManquantSideBar: false,
    statusAttenteApproSideBar: false,
    statusAnnulerCommandeSideBar : false,
    ordonnance: {
      patient: {
        note: "",
        nom: "",
        prenom: "",
        email: "",
      },
      historique: [],
    },
  };
  componentDidMount() {
    const id_commande = this.props.match.params.id_commande;
    this.fetcher_commande(id_commande);
  }

  fetcher_commande = async (id_commande) => {
    try {
      const response = await axios.get(
        `/commandes/${id_commande}?access_token=a`
      );
      const commande = response.data;
      console.log(commande)
      const custom_commande = {
        ...commande,
        id: commande.commande_id,
        status:
          commande.status_commande === -2
            ? "annulée"
            : commande.status_commande === -1
            ? "incomplet"
            : commande.status_commande === 0
            ? "non-traité"
            : commande.status_commande === 1
            ? "attente_approvisionnement"
            : commande.status_commande === 2
            ? "validée"
            : commande.status_commande === 3
            ? "livrée"
            : null,
        name: commande.nom_patient + " " + commande.prenom_patient,
        type: commande.type === "ordo" ? "Particulier" : "Professionnel",
        montant: commande.montant_total,
        date: new Date(commande.created_at * 1000).toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        code: commande.code_postal_livraison,
        origine: commande.origine,
        email: commande.email,
        ville: commande.ville_livraison,
        paiment: commande.status_paiement,
        patient: {
          nom: commande.nom_patient,
          prenom: commande.prenom_patient,
          address: `${commande.adresse_livraison}`,
          num_tel: commande.telephone,
          appeler: commande.etrerappele,
          email: commande.email,
          note: commande.note_admin
            ? commande.note_admin
            : "Pas de note pour l'instant.",
        },
        historique: commande.historique,
        CMU: commande.cmu,
        mutuelle: commande.mutuelle,
        vital: commande.vitale_ok,
      };
      this.setState({
        ordonnance: custom_commande,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  handleAssignerTourneSideBar = (status) => {
    if (status === "open") {
      this.setState({
        statusAssignerTourneSideBar: true,
      });
    } else {
      this.setState({
        statusAssignerTourneSideBar: false,
      });
    }
  };

  handleAttenteApproSideBar = (status) => {
    if (status === "open") {
      this.setState({
        statusAttenteApproSideBar: true,
      });
    } else {
      this.setState({
        statusAttenteApproSideBar: false,
      });
    }
  };

  handleDocumentManquantSideBar = (status) => {
    if (status === "open") {
      this.setState({
        statusDocumentManquantSideBar: true,
      });
    } else {
      this.setState({
        statusDocumentManquantSideBar: false,
      });
    }
  };
  handleAnnulerCommandeSideBar = (status) => {
    if (status === "open") {
      this.setState({
        statusAnnulerCommandeSideBar: true,
      });
    } else {
      this.setState({
        statusAnnulerCommandeSideBar: false,
      });
    }
  };

  render() {
    return (
      <Row className="email-application position-relative">
        <div
          className={`app-content-overlay ${
            this.state.statusAssignerTourneSideBar ||
            this.state.statusAttenteApproSideBar ||
            this.state.statusDocumentManquantSideBar
              ? "show"
              : ""
          }`}
          onClick={() => {
            this.handleAssignerTourneSideBar("close");
            this.handleDocumentManquantSideBar("close");
            this.handleAttenteApproSideBar("close");
          }}
        />
        <Col xl="9">
          <Card style={{ boxShadow: "none" }}>
            <Card className="mb-0">
              <FirstSection ordonnance={this.state.ordonnance} />
            </Card>
            <hr className="mb-0 mt-0" />
            <Card>
              <SecondSection ordonnance={this.state.ordonnance} />
            </Card>
            <hr />
            <Card>
              <ThirdSection ordonnance={this.state.ordonnance} />
            </Card>
            <hr />

            <ForthSection
              note_admin={
                this.state.ordonnance.note_admin
                  ? this.state.ordonnance.note_admin
                  : "pas de note."
              }
              ordonnance={this.state.ordonnance}
              commentaires_notes={this.state.ordonnance.patient.note}
            />
            {/* {this.state.ordonnance.note_admin ? (
            <ForthSection
              ordonnance={this.state.ordonnance}
              commentaires_notes={this.state.ordonnance.patient.note}
            />
            ) : (
              <ForthSection
                ordonnance={this.state.ordonnance}
                commentaires_notes={this.state.ordonnance.patient.note}
              />
            )} */}
          </Card>
        </Col>
        <Col xl="3">
          <Card>
            <PartieDroiteHaut
              toggleAASidebar={this.handleAttenteApproSideBar}
              toggleDMSidebar={this.handleDocumentManquantSideBar}
              toggleATSidebar={this.handleAssignerTourneSideBar}
              toggleACSidebar={this.handleAnnulerCommandeSideBar}
            />
          </Card>
          <Card style={{ boxShadow: "none" }}>
            <PartieDroiteBas
              historique_commande={
                this.state.ordonnance.historique
                  ? this.state.ordonnance.historique
                  : []
                // commentaires_notes
              }
            />
          </Card>
        </Col>
        <SidebarAssignerTournee
          ordonnance={this.state.ordonnance}
          handleComposeSidebar={this.handleAssignerTourneSideBar}
          currentStatus={this.state.statusAssignerTourneSideBar}
        />
        {this.state.ordonnance.id ? (
          <SideBarDocumentManquant
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleDocumentManquantSideBar}
            currentStatus={this.state.statusDocumentManquantSideBar}
          />
        ) : null}
        {this.state.ordonnance.id ? (
          <SideBarAnnulerCommande
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleAnnulerCommandeSideBar}
            currentStatus={this.state.statusAnnulerCommandeSideBar}
          />
        ) : null}
        <SideBarAttenteApprovisionnement
          ordonnance={this.state.ordonnance}
          handleComposeSidebar={this.handleAttenteApproSideBar}
          currentStatus={this.state.statusAttenteApproSideBar}
        />
      </Row>
    );
  }
}

export default Ordonnance;
