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
import SweetAlert from "react-bootstrap-sweetalert";
import { readRemoteFile } from "react-papaparse";

import axios from "../../../axios";
import { PenTool } from "react-feather";

class Ordonnance extends Component {
  state = {
    composeMailStatus: false,
    statusAssignerTourneSideBar: false,
    statusDocumentManquantSideBar: false,
    statusAttenteApproSideBar: false,
    statusAnnulerCommandeSideBar: false,
    errorAlert: false,
    errorText: "Vérifier votre connexion",
    scuccesAlert: true,
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
    inputs: [
      {
        id: 1,
        produit: "",
        quantité: 1,
        prix: 0,
      },
    ],

    total: 0,
    note_patient: "",
    commentaire_interne: "",
    commentaire_interne_edited: "",

    suggestions: [],
    medNames: [],
    medPrises: [],
  };

  quantité_input_change_handler(value, id) {
    this.setState((prev_state, props) => {
      const updated_produit_index = prev_state.inputs.findIndex((el) => {
        return el.id === id;
      });
      const updated_produit = {
        ...this.state.inputs[updated_produit_index],
      };

      updated_produit.quantité = isNaN(parseInt(value)) ? "" : parseInt(value);
      const inputs = [...this.state.inputs];
      inputs[updated_produit_index] = updated_produit;
      return {
        inputs: inputs,
      };
    });
  }
  prix_input_change_handler(value, id) {
    this.setState((prev_state, props) => {
      const updated_produit_index = prev_state.inputs.findIndex((el) => {
        return el.id === id;
      });
      const updated_produit = {
        ...this.state.inputs[updated_produit_index],
      };
      updated_produit.prix = isNaN(parseFloat(value)) ? "" : parseFloat(value);
      const inputs = [...this.state.inputs];
      inputs[updated_produit_index] = updated_produit;
      return {
        inputs: inputs,
      };
    });
  }
  produit_input_change_handler(value, id) {
    this.setState((prev_state, props) => {
      const updated_produit_index = prev_state.inputs.findIndex((el) => {
        return el.id === id;
      });
      const updated_produit = {
        ...this.state.inputs[updated_produit_index],
      };
      let indexfound = this.state.suggestions.findIndex(
        (item) => item.title === value
      );
      if (indexfound !== -1) {
        updated_produit.prix = isNaN(
          parseFloat(this.state.suggestions[indexfound].price)
        )
          ? 0
          : parseFloat(this.state.suggestions[indexfound].price);
        indexfound = -1;
      }
      updated_produit.produit = value;
      const inputs = [...this.state.inputs];
      inputs[updated_produit_index] = updated_produit;
      return {
        inputs: inputs,
      };
    });
  }

  

  async save() {
    try {
      const contenue = this.state.inputs.map((input) => {
        return {
          nom: input.produit,
          montant_unitaire: input.prix,
          quantite: input.quantité,
        };
      });

      const request_data = {
        renouvelable: this.state.ordonnance.renouvelable,
        renouvellement_intervalle:
          this.state.ordonnance.renouvellement_intervalle,
        renouvellement_nombre: this.state.ordonnance.renouvellement_nombre,
        nirpp: this.state.ordonnance.nirpp,
        mutuelle_expiration_date  : this.state.ordonnance.mutuelle.expiration_date,
        note_admin : this.state.ordonnance.commentaire_interne,
        contenue: contenue,
        note_patient : this.state.note_patient
      };
      console.log(request_data);
      const res = await axios.patch(
        `commandes/${this.state.ordonnance.id}?access_token=a`,
        request_data
      );
      this.handleAlert(
        "errorAlert",
        true,
        "Sauvgarde des informations éffectuer avec succée !",
        true
      );
    } catch (err) {
      const err_message = err.message.includes("Network")
        ? "une erreur est produite veillez réesseyez !"
        : err.message;
      this.handleAlert("errorAlert", true, err_message, false);
    }
  }

  commentaire_interne_input_handle_change(value) {
    this.setState((prev_state, props) => {
      return {
        ordonnance: {
          ...prev_state.ordonnance,
          commentaire_interne: value,
        },
      };
    });
  }

  componentDidMount() {
    const id_commande = this.props.match.params.id_commande;
    this.fetcher_commande(id_commande);
    readRemoteFile(require("../../../medicamentsPrix/medicamentsPrix.txt"), {
      complete: (results) => {
        let medicaments = results.data.filter((item) => item[0] !== "");
        let suggestions = [];
        for (let index = 0; index < medicaments.length; index++) {
          suggestions[index] = {
            title: medicaments[index][0],
            price: medicaments[index][1],
          };
        }
        this.setState({ suggestions });
      },
    });
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
    const date = new Date(e);
    this.setState((prev_state, props) => {
      return {
        ordonnance: {
          ...prev_state.ordonnance,
          mutuelle: {
            ...prev_state.ordonnance.mutuelle,
            expiration_date: date.toISOString().split("T")[0],
          },
        },
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

  handleAlert = (state, value, text, type) => {
    this.setState({ [state]: value, errorText: text, scuccesAlert: type });
  };


  note_patient_input_handle_change(value) {
    this.setState((prev_state, props) => {
      return {
        ...prev_state, 
        note_patient: value,
      };
    });
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
        commentaire_interne: commande.note_admin
          ? commande.note_admin
          : "pas de commentaire",
      };
      this.setState({
        ordonnance: custom_commande,
        data_fetched: true,
        note_patient : commande.note_patient,
      });
    } catch (err) {
      if (err.message.includes("Network")) {
        this.handleAlert(
          "errorAlert",
          true,
          "Verifiez votre connexion !",
          false
        );
      } else {
        this.handleAlert("errorAlert", true, err.message, false);
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
    let total = 0;
    const total_array = this.state.inputs.map((item) => {
      return item.quantité * item.prix;
    });
    total_array.forEach((item) => {
      total = total + item;
    });
    total = total.toFixed(2);
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
                handleAlert={(state, value, text, type) =>
                  this.handleAlert(state, value, text, type)
                }
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
              handleAlert={(state, value, text, type) =>
                this.handleAlert(state, value, text, type)
              }
              note_admin={
                this.state.ordonnance.note_admin
                  ? this.state.ordonnance.note_admin
                  : "pas de note."
              }
              ordonnance={this.state.ordonnance}
              commentaires_notes={this.state.ordonnance.historique}
              inputs={this.state.inputs}
              suggestions={this.state.suggestions}
              produit_input_change_handler={(e, id) => {
                this.produit_input_change_handler(e, id);
              }}
              add_ligne={() => {
                this.setState((prev_state, props) => {
                  const new_item_id = prev_state.inputs.slice(-1)[0].id + 1;
                  const new_num_input = [
                    ...prev_state.inputs,
                    {
                      id: new_item_id,
                      produit: "",
                      quantité: 1,
                      prix: 0,
                    },
                  ];
                  return {
                    inputs: new_num_input,
                  };
                });
              }}
              quantité_input_change_handler={(e, id) => {
                this.quantité_input_change_handler(e, id);
              }}
              prix_input_change_handler={(e, id) => {
                this.prix_input_change_handler(e, id);
              }}
              total={total}
              commentaire_interne_input_handle_change={(e) => {
                this.commentaire_interne_input_handle_change(e);
              }}
              save={() => {
                this.save();
              }}
              commentaire_interne={
                this.state.ordonnance.commentaire_interne
                  ? this.state.ordonnance.commentaire_interne
                  : ""
              }

              note_patient_input_handle_change={(e)=> {
                this.note_patient_input_handle_change(e)
              }}
              note_patient={this.state.note_patient ? this.state.note_patient : ""}

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
              }
            />
          </Card>
        </Col>

        {this.state.ordonnance.id ? (
          <SidebarAssignerTournee
            handleAlert={(state, value, text, type) =>
              this.handleAlert(state, value, text, type)
            }
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleAssignerTourneSideBar}
            currentStatus={this.state.statusAssignerTourneSideBar}
          />
        ) : null}
        {this.state.ordonnance.id ? (
          <SideBarDocumentManquant
            handleAlert={(state, value, text, type) =>
              this.handleAlert(state, value, text, type)
            }
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleDocumentManquantSideBar}
            currentStatus={this.state.statusDocumentManquantSideBar}
          />
        ) : null}
        {this.state.ordonnance.id ? (
          <SideBarAnnulerCommande
            handleAlert={(state, value, text, type) =>
              this.handleAlert(state, value, text, type)
            }
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleAnnulerCommandeSideBar}
            currentStatus={this.state.statusAnnulerCommandeSideBar}
          />
        ) : null}
        {this.state.ordonnance.id ? (
          <SideBarAttenteApprovisionnement
            handleAlert={(state, value, text, type) =>
              this.handleAlert(state, value, text, type)
            }
            ordonnance={this.state.ordonnance}
            handleComposeSidebar={this.handleAttenteApproSideBar}
            currentStatus={this.state.statusAttenteApproSideBar}
          />
        ) : null}
        <SweetAlert
          error={!this.state.scuccesAlert}
          success={this.state.scuccesAlert}
          title={this.state.scuccesAlert ? "succes" : "Erreur"}
          show={this.state.errorAlert}
          onConfirm={() => this.handleAlert("errorAlert", false)}
        >
          <p className="sweet-alert-text">{this.state.errorText}</p>
        </SweetAlert>
      </Row>
    );
  }
}

export default Ordonnance;
