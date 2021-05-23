import React, { Component } from "react";

import { Card, Row, Col, Spinner } from "reactstrap";

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
import SideBarAnnulerCommande from "./SideBarAnnulerCommande";

import axios from "../../../axios";

class Ordonnance extends Component {
  state = {
    composeMailStatus: false,
    statusAssignerTourneSideBar: false,
    statusDocumentManquantSideBar: false,
    statusAttenteApproSideBar: false,
    statusAnnulerCommandeSideBar: false,
    ordonnance: {
      patient: {
        note: "",
        nom: "",
        prenom: "",
        email: "",
      },
      historique: [],
    },
    data_fetched: false,
    Date_exp: new Date(),
  };
  componentDidMount() {
    const id_commande = this.props.match.params.id_commande;
    this.fetcher_commande(id_commande);
  }

  change_renouvlable(checked) {
    this.setState((prev_state, props) => {
      return {
        ordonnance: {
          ...prev_state.ordonnance,
          renouvelable: checked,
        },
      };
    });
  }

  change_nbr_rounouv(e) {
    this.setState((prev_state, props) => {
      return {
        ordonnance: {
          ...prev_state.ordonnance,
          renouvellement_nombre: e,
        },
      };
    });
  }
  change_renouv_intervalle(e) {
    this.setState((prev_state, props) => {
      return {
        ordonnance: {
          ...prev_state.ordonnance,
          renouvellement_intervalle: e,
        },
      };
    });
  }
  change_date_exp(e) {
    this.setState((prev_state, props) => {
      return {
        ...prev_state,
        Date_exp: e,
      };
    });
  }
  change_nirpp(e) {
    console.log(e);
    this.setState((prev_state, props) => {
      return {
        ordonnance: {
          ...prev_state.ordonnance,
          nirpp: e,
        },
      };
    });
  }

  fetcher_commande = async (id_commande) => {
    try {
      const response = await axios.get(
        `/commandes/${id_commande}?access_token=a`
      );
      const commande = response.data;
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
        data_fetched: true,
      });
    } catch (err) {
      if (err.message.includes("Network")) {
        alert("Verifiez votre connexion !");
      } else {
        alert(err.message);
      }
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
    console.log(this.state.ordonnance);
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
              <ThirdSection
                ordonnance={this.state.ordonnance}
                change_date_exp={(e) => {
                  this.change_date_exp(e);
                }}
                Date_exp={this.state.Date_exp}
                change_nbr_renouv={(e) => {
                  this.change_nbr_rounouv(e);
                }}
                nbr_renouv={
                  this.state.ordonnance.renouvellement_nombre
                    ? this.state.ordonnance.renouvellement_nombre
                    : 1
                }
                change_intervall={(e) => {
                  this.change_renouv_intervalle(e);
                }}
                renouvellement_intervalle={
                  this.state.ordonnance.renouvellement_intervalle
                    ? this.state.ordonnance.renouvellement_intervalle
                    : 1
                }
                change_renouv={(e) => {
                  this.change_renouvlable(e);
                }}
                renouvelable={
                  this.state.ordonnance.renouvelable
                    ? this.state.ordonnance.renouvelable
                    : null
                }
                change_nirpp={(e) => {
                  this.change_nirpp(e);
                }}
                nirpp={
                  this.state.ordonnance.nirpp ? this.state.ordonnance.nirpp : ""
                }
              />
            </Card>
            <hr />

            <ForthSection
              note_admin={
                this.state.ordonnance.note_admin
                  ? this.state.ordonnance.note_admin
                  : "pas de note."
              }
              ordonnance={this.state.ordonnance}
              commentaires_notes={this.state.ordonnance.historique}
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

        {this.state.ordonnance.id ? (
          <SidebarAssignerTournee
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleAssignerTourneSideBar}
            currentStatus={this.state.statusAssignerTourneSideBar}
          />
        ) : null}
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
        {this.state.ordonnance.id ? (
          <SideBarAttenteApprovisionnement
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleAttenteApproSideBar}
            currentStatus={this.state.statusAttenteApproSideBar}
          />
        ) : null}
      </Row>
    );
  }
}

export default Ordonnance;
