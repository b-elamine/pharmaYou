import React from "react";
import { Card, CardHeader, CardBody, Button, Input } from "reactstrap";
import { X, Users } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import Select from "react-select";
import externalAxios from "../../../axios";

class ComposeEmail extends React.Component {
  state = {
    email_title: `[Commande ${this.props.ordonnance.id}] Votre commande est incompl\u00e8te`,
    email_text: `Bonjour,\n\nVotre commande ${this.props.ordonnance.id} est incompl\u00e8te. Veuillez la corriger ici : https:\/\/www.pharmayou.fr\/commandes\/1-CA-39 .\n\nPharma You`,
    sms_text: `Votre commande ${this.props.ordonnance.id} est incompl\u00e8te.`,
    push_text: "Votre commande est incompl\u00e8te.",
    options: [
      { value: "attestation_mutuelle", label: "Attestation Mututelle" },
      { value: "probleme_ordonnance", label: "Probleme ordonnance" },
      { value: "probleme_carte_vital", label: "Probleme carte vital" },
    ],
    document_manquant_value: "",
  };

  fetch_email_text = async (commande_id) => {
    try {
      // if (!commande_id) {
      //   return alert("l'identifiant de la commande est invalide.");
      // }
      const response = await externalAxios.get(
        `/commandes/${commande_id}/invalider_form?access_token=a`
      );
      const message = response.data.default_message
        ? response.data.default_message
        : null;
      if (message !== null) {
        this.setState({
          email_title: message.email_title,
          email_text: message.email_text,
          sms_text: message.sms_text,
          push_text: message.push_text,
        });
      }
    } catch (err) {
      if (err.message.includes("Network")) {
        alert("Verifiez votre connexion !");
      } else {
        alert(err.message);
      }
    }
  };

  handleSidebarClose = () => {
    this.props.handleComposeSidebar("close");
    this.setState({
      email_title: `[Commande ${this.props.ordonnance.id}] Votre commande est incompl\u00e8te`,
      email_text: `Bonjour,\n\nVotre commande ${this.props.ordonnance.id} est incompl\u00e8te. Veuillez la corriger ici : https:\/\/www.pharmayou.fr\/commandes\/1-CA-39 .\n\nPharma You`,
      sms_text: `Votre commande ${this.props.ordonnance.id} est incompl\u00e8te.`,
      push_text: "Votre commande est incompl\u00e8te.",
      document_manquant_value: "",
    });
  };

  async componentDidMount() {
    this.fetch_email_text(this.props.ordonnance.id);
  }

  Valider = async () => {
    try {
      const response = await externalAxios.post(
        `commandes/${this.props.ordonnance.id}/invalider?access_token=a`,
        {
          document_manquant: this.state.document_manquant_value,
          default_message: {
            email_title: this.state.email_title,
            email_text: this.state.email_text,
            sms_text: this.state.sms_text,
            push_text: this.state.push_text,
          },
        }
      );
    } catch (err) {
      alert(err.message);
    }
    this.handleSidebarClose();
  };

  render() {
    const { options } = this.state;

    return (
      <Card
        className={`compose-email shadow-none ${
          this.props.currentStatus ? "open" : ""
        }`}
      >
        <CardHeader className="compose-mail-header align-items-center">
          <div className="compose-mail-title">
            <h3 className="text-bold-600 card-title">Document Manquant</h3>
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
            <div className="form-label-group mb-3">
              <span style={{ fontSize: "15px" }}>Document Manquant</span>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={options[0]}
                name="Role"
                placeholder="Attestation Mutuelle"
                options={this.state.options}
                onChange={(e) => {
                  this.setState({ document_manquant_value: e.value });
                }}
              />
            </div>
            <span style={{ fontSize: "15px" }}>
              <Users className="mr-75" size="20" color="red" />
              Notification client sms et Email
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
                rows="8"
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
            <div className="action-btns d-flex justify-content-start mt-1">
              <Button.Ripple
                color="light-info"
                style={{
                  backgroundColor: "#fbdddd",
                }}
                className=" font-weight-bold text-danger mr-1"
                onClick={this.Valider}
              >
                Envoyer
              </Button.Ripple>
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
