import React from "react";
import axios from "../../../axios";
import { Input, Card, CardHeader, CardBody, Button } from "reactstrap";
import { X, Users } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import Switch from "react-switch";
import Select from "react-select";

// import "../../../assets/scss/pages/app-email.scss";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
class ComposeEmail extends React.Component {
  state = {
    toursSelectedMemory: {},
    defaultTours: {},
    selectedTournée: {
      start: new Date(),
      end: new Date(),
      value: "",
      label: "",
    },
    tournées: [{ start: new Date(), end: new Date(), value: "", label: "" }],
    email_title: `[Commande ${this.props.ordonnance.id}] Votre commande a \u00e9t\u00e9 valid\u00e9e`,
    email_text: `Bonjour,\n\nVotre commande ${this.props.ordonnance.id} a \u00e9t\u00e9 valid\u00e9e et sera envoy\u00e9e d'ici peu.\n\nPharma You`,
    sms_text: `Votre commande ${this.props.ordonnance.id} a \u00e9t\u00e9 valid\u00e9e.`,
    push_text: "Votre commande a \u00e9t\u00e9 valid\u00e9e.",
    checked: false,
  };

  handleChange = (checked) => {
    this.setState({ checked });
    if (!checked) {
      this.setState({ selectedTournée: this.state.defaultTours });
    } else {
      this.setState({ selectedTournée: this.state.toursSelectedMemory });
    }
  };

  handleSidebarClose = () => {
    this.props.handleComposeSidebar("close");
    this.setState({
      toursSelectedMemory: {},
      defaultTours: {},
      selectedTournée: {
        start: new Date(),
        end: new Date(),
        value: "",
        label: "",
      },
      tournées: [{ start: new Date(), end: new Date(), value: "", label: "" }],
      listeTournes: "",
      email_title: `[Commande ${this.props.ordonnance.id}] Votre commande a \u00e9t\u00e9 valid\u00e9e`,
      email_text: `Bonjour,\n\nVotre commande ${this.props.ordonnance.id} a \u00e9t\u00e9 valid\u00e9e et sera envoy\u00e9e d'ici peu.\n\nPharma You`,
      sms_text: `Votre commande ${this.props.ordonnance.id} a \u00e9t\u00e9 valid\u00e9e.`,
      push_text: "Votre commande a \u00e9t\u00e9 valid\u00e9e.",
      checked: false,
    });
  };

  async componentDidMount() {
    await axios
      .get(`/commandes/${this.props.ordonnance.id}/assigner_tournee_form?access_token=a`)
      .then((response) => {
        const date = response.data.tournee_par_defaut.date.split("-");
        const start = new Date(
          date[0],
          date[1] - 1,
          date[2],
          response.data.tournee_par_defaut.plage_debut + 1,
          0,
          0
        );
        const end = new Date(
          date[0],
          date[1] - 1,
          date[2],
          response.data.tournee_par_defaut.plage_fin + 1,
          0,
          0
        );
        const defaultData = {
          id: response.data.tournee_par_defaut.tournee_id,
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
        const data = response.data.tournees.map((item) => {
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
        this.setState({
          defaultTours: defaultData,
          selectedTournée: defaultData,
          tournées: data,
          email_title: response.data.default_message.email_title,
          email_text: response.data.default_message.email_text,
          sms_text: response.data.default_message.sms_text,
          push_text: response.data.default_message.push_text,
        });
      })
      .catch(
        (err) =>
          // alert(
          //   "Erreur lors de la récuperation des tournées pour cette commande \n vérifier votre connexion et recharger la page"
          // )
        console.log(err.message)
      );
  }

  handleSelect = (e) => {
    this.setState({
      selectedTournée: e,
      toursSelectedMemory: e,
    });
    if (!e || e.length === 0) {
      this.setState({
        toursSelectedMemory: {},
        selectedTournée: this.state.defaultTours,
      });
    }
  };

  ValiderTournée = async () => {
    const tournees = {
      tournee_id: this.state.selectedTournée.id,
      date: `${this.state.selectedTournée.start.toISOString().split("T")[0]}`,
      plage_debut: this.state.selectedTournée.start.getHours(),
      plage_fin: this.state.selectedTournée.end.getHours(),
    };
    const response = await axios.post(
      `commandes/${this.props.ordonnance.id}/assigner_tournee?access_token=a`,
      {
        tournees: tournees,
        default_message: {
          email_title: this.state.email_title,
          email_text: this.state.email_text,
          sms_text: this.state.sms_text,
          push_text: this.state.push_text,
        },
      }
    );
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
              Assingner a une tournée
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
            <div className="form-label-group pt-1">
              <span style={{ fontSize: "15px" }}>
                Prochaine tournée par defaut
              </span>
              <Input
                type="text"
                readOnly
                id="prochaine_tournée"
                value={this.state.selectedTournée.value}
              />
            </div>
            <div className="form-label-group">
              <div className="d-flex flex-sm-row flex-column align-items-center justify-content-start px-0">
                <Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  offColor="#82868B"
                  onColor="#ff9f43"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={25}
                  width={50}
                />
                <span style={{ fontSize: "15px" }} className="ml-50 text-wrap">
                  Autre tournée
                </span>
              </div>
            </div>
            <div className="form-label-group" style={{ zIndex: "10" }}>
              <span style={{ fontSize: "15px" }}>
                Sélectionner une autre tournée
              </span>
              <Select
                isDisabled={!this.state.checked}
                className="React"
                classNamePrefix="select"
                name="Role"
                placeholder="Liste des prochaines tournées"
                options={this.state.tournées}
                onChange={this.handleSelect}
              />
            </div>
            <div style={{ marginBottom: "50px" }}>
              <span style={{ fontSize: "15px" }}>
                <Users className="mr-75" size="20" color="#ff9f43" />
                Notification client sms et email
              </span>
              <div id="email-notif" style={{ marginTop: "20px" }}>
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
                  rows="1"
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
            </div>
            <div className="action-btns d-flex justify-content-start mt-1">
              <Button.Ripple
                color="primary"
                className="mr-1"
                disabled={!this.state.checked}
                onClick={this.ValiderTournée}
              >
                Valider
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
