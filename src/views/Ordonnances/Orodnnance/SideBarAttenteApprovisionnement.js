import React from "react";
import axios from "../../../axios";
import { Card, CardHeader, CardBody, Button, Input } from "reactstrap";
import { X, Users } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import Select from "react-select";
// import "../../../assets/scss/pages/app-email.scss";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
import externalAxios from "../../../axios";

class ComposeEmail extends React.Component {
  state = {
    selectedTournée: {},
    tournées: [{ start: new Date(), end: new Date(), value: "", label: "" }],
    email_title: `[Commande ${this.props.ordonnance.id}] Votre commande a été mise en attente`,
    email_text: `Bonjour,\n\nVotre commande ${this.props.ordonnance.id} a été mise en attente.\n\nPharma You`,
    sms_text: `Votre commande ${this.props.ordonnance.id} a été mise en attente.`,
    push_text: "Votre commande a été mise en attente.",
  };

  handleSidebarClose = () => {
    this.props.handleComposeSidebar("close");
  };

  fetch_email_text = async (commande_id) => {
    try {
      // if (!commande_id) {
      //   return alert("l'identifiant de la commande est invalide.");
      // }
      
      const response = await externalAxios.get(
        `/commandes/${commande_id}/mettre_en_attente_form?access_token=a`
      );
      const data = response.data.default_message.tournees.map((item) => {
        const date = item.date.split("-");
        const start = new Date(
          date[0],
          date[1] - 1,
          date[2],
          item.plage_debut + 1,
          0,
          0
        );
        const end = new Date(
          date[0],
          date[1] - 1,
          date[2],
          item.plage_fin + 1,
          0,
          0
        );
        return {
          id: item.tournee_id,
          start: start,
          end: end,
          value: `${start.toISOString().split("T")[0]}  ${
            start.toISOString().split("T")[1].split(":")[0]
          }H:${start.toISOString().split("T")[1].split(":")[1]} - ${
            end.toISOString().split("T")[1].split(":")[0]
          }H:${end.toISOString().split("T")[1].split(":")[1]}`,
          label: `${start.toISOString().split("T")[0]}  ${
            start.toISOString().split("T")[1].split(":")[0]
          }H:${start.toISOString().split("T")[1].split(":")[1]} - ${
            end.toISOString().split("T")[1].split(":")[0]
          }H:${end.toISOString().split("T")[1].split(":")[1]}`,
        };
      });
      const message = response.data.default_message
        ? response.data.default_message
        : null;
      if (message !== null) {
        this.setState({
          tournées: data,
          email_title: message.email_title,
          email_text: message.email_text,
          sms_text: message.sms_text,
          push_text: message.push_text,
        });
      }
    } catch (err) {
      if (err.message.includes("Network")) {
        this.props.handleAlert(
          "errorAlert",
          true,
          "Verifiez votre connexion !",
          false
        );
      } else {
        this.props.handleAlert("errorAlert", true, err.message, false);
      }
    }
  };

  async componentDidMount() {
    this.fetch_email_text(this.props.ordonnance.id);
  }

  Valider = async () => {
    try {
      // const tournees = {
      //   tournee_id: this.state.selectedTournée.id,
      //   date: `${this.state.selectedTournée.start.toISOString().split("T")[0]}`,
      //   plage_debut: this.state.selectedTournée.start.getHours(),
      //   plage_fin: this.state.selectedTournée.end.getHours(),
      // };
      const response = await axios.post(
        `commandes/${this.props.ordonnance.id}/mettre_en_attente?access_token=a`,
        {
          tournee_id: this.state.selectedTournée.id,
          default_message: {
            email_title: this.state.email_title,
            email_text: this.state.email_text,
            sms_text: this.state.sms_text,
            push_text: this.state.push_text,
          },
        }
      );
      this.props.handleAlert(
        "errorAlert",
        true,
        "Commannde mise en approvisionnement",
        true
      );
    } catch (err) {
      if (err.message.includes("Network")) {
        alert("Verifiez votre connexion !");
        this.props.handleAlert(
          "errorAlert",
          true,
          "Verifiez votre connexion !",
          false
        );
      } else {
        this.props.handleAlert("errorAlert", true, err.message, false);
      }
    }
    this.handleSidebarClose();
  };

  render() {
    return (
      <Card
        className={`compose-email shadow-none ${
          this.props.currentStatus ? "open" : ""
        }`}
      >
        <CardHeader className="compose-mail-header align-items-center">
          <div className="compose-mail-title">
            <h3 className="text-bold-600 card-title">
              En attente d'approvisionnement
            </h3>
          </div>
          <div
            className="close-compose-mail"
            onClick={() => {
              this.props.handleComposeSidebar("close");
            }}
          >
            <X size={20} />
          </div>
        </CardHeader>
        <PerfectScrollbar
          options={{
            wheelPropagation: false,
          }}
        >
          <CardBody className="compose-mail-body p-1">
            <div className="form-label-group mb-3" style={{ zIndex: "10" }}>
              <span style={{ fontSize: "15px" }}>
                Déplacer dans une autre tournée
              </span>
              <Select
                className="React"
                classNamePrefix="select"
                name="Role"
                placeholder="Liste des prochaines tournées"
                options={this.state.tournées}
                onChange={(e) => {
                  this.setState({ selectedTournée: e });
                }}
              />
            </div>
            <span style={{ fontSize: "15px" }}>
              <Users className="mr-75" size="20" color="#378af9" />
              Notification client sms et email
            </span>
            <div id="email-notif" style={{ marginTop: "15px" }}>
              <label style={{ fontSize: "13px" }}>Titre de l'email</label>
              <Input
                id="email_title"
                type="textarea"
                value={this.state.email_title}
                onChange={(e) => {
                  this.setState({
                    email_title: e.target.value,
                  });
                }}
              ></Input>
              <label style={{ fontSize: "13px", marginTop: "15px" }}>
                Text de l'email
              </label>
              <Input
                id="email_text"
                type="textarea"
                rows="6"
                value={this.state.email_text}
                onChange={(e) => {
                  this.setState({
                    email_text: e.target.value,
                  });
                }}
              ></Input>
              <label style={{ fontSize: "13px", marginTop: "15px" }}>
                Sms text
              </label>
              <Input
                id="sms_text"
                type="textarea"
                rows="2"
                value={this.state.sms_text}
                onChange={(e) => {
                  this.setState({
                    sms_text: e.target.value,
                  });
                }}
              ></Input>
              <label style={{ fontSize: "13px", marginTop: "15px" }}>
                Notification text
              </label>
              <Input
                id="notification_text"
                type="textarea"
                rows="1"
                value={this.state.push_text}
                onChange={(e) => {
                  this.setState({
                    push_text: e.target.value,
                  });
                }}
              ></Input>
            </div>

            <div className="action-btns d-flex justify-content-start mt-5">
              <Button
                color="light-info"
                style={{
                  backgroundColor: "#e8fbfd",
                }}
                className=" text-info mr-1"
                onClick={this.Valider}
              >
                Valider
              </Button>
              <Button.Ripple
                outline
                color="danger"
                onClick={() => this.handleSidebarClose()}
              >
                Annuler
              </Button.Ripple>
            </div>
          </CardBody>
        </PerfectScrollbar>
      </Card>
    );
  }
}

export default ComposeEmail;
