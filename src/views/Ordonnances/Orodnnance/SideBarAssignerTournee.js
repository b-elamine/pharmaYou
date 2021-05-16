import React from "react";
import axios from "../../../axios";
import { Input, Card, CardHeader, CardBody, Button } from "reactstrap";
import { X, Users, Truck } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import Switch from "react-switch";
import Select from "react-select";

// import { EditorState, ContentState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../../../assets/scss/plugins/extensions/editor.scss";
// import "../../../assets/scss/pages/app-email.scss";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
class ComposeEmail extends React.Component {
  state = {
    toursSelectedMemory: [],
    defaultTours: [],
    selectedTournée: [],
    tournées: [{ start: new Date(), end: new Date(), value: "", label: "" }],
    // editorState: EditorState.createEmpty(),
    // editorState1: EditorState.createEmpty(),
    // commentaire: "",
    listeTournes: "",
    email_title: `[Commande ${this.props.ordonnance.id}] Votre commande a \u00e9t\u00e9 valid\u00e9e`,
    email_text: `Bonjour,\n\nVotre commande ${this.props.ordonnance.id} a \u00e9t\u00e9 valid\u00e9e et sera envoy\u00e9e d'ici peu.\n\nPharma You`,
    sms_text: `Votre commande ${this.props.ordonnance.id} a \u00e9t\u00e9 valid\u00e9e.`,
    push_text: "Votre commande a \u00e9t\u00e9 valid\u00e9e.",
    checked: false,
  };
  // onEditorStateChange = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };
  // onEditorStateChange1 = (editorState1) => {
  //   this.setState({
  //     editorState1,
  //   });
  // };

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
      toursSelectedMemory: [],
      defaultTours: [],
      selectedTournée: [],
      // editorState: EditorState.createEmpty(),
      // editorState1: EditorState.createEmpty(),
      // commentaire: "",
      listeTournes: "",
      email_title: "",
      email_text: "",
      sms_text: "",
      push_text: "",
      checked: false,
    });
  };

  async componentDidMount() {
    await axios
      .get("/tournees?access_token=a")
      .then((response) => {
        const data = response.data
          .map((item) => {
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
          })
          .filter((item) => item.start >= new Date());
        const sortedData = data.sort((a, b) => a.start - b.start);
        this.setState({
          tournées: sortedData,
        });
      })
      .catch((err) =>
        alert(
          "Erreur lors de la récuperation des tournées disponible \n vérifier votre connexion et recharger la page"
        )
      );
    // if (!this.props.ordonnance.id) {
    //   return alert("l'identifiant de la commande n'est pas valide.");
    // }
    await axios
      .get(
        `/commandes/${this.props.ordonnance.id}/assigner_tournee_form?access_token=a`
      )
      .then((response) => {
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
        // const text = `Email : ${
        //   response.data.default_message.email_title +
        //   "\n" +
        //   response.data.default_message.email_text
        // } \n SMS: ${response.data.default_message.sms_text} \n Notification: ${
        //   response.data.default_message.push_text
        // }`;
        this.setState({
          defaultTours: data,
          selectedTournée: data,
          email_title: response.data.default_message.email_title,
          email_text: response.data.default_message.email_text,
          sms_text: response.data.default_message.sms_text,
          push_text: response.data.default_message.push_text,
          // editorState: EditorState.createWithContent(
          //   ContentState.createFromText(text)
          // ),
        });
      })
      .catch((err) =>
        alert(
          "Erreur lors de la récuperation des tournées pour cette commande \n vérifier votre connexion et recharger la page"
        )
      );
  }

  handleSelect = (e) => {
    this.setState({
      selectedTournée: e,
      toursSelectedMemory: e,
    });
    if (!e || e.length === 0) {
      this.setState({
        toursSelectedMemory: [],
        selectedTournée: this.state.defaultTours,
      });
    }
  };

  ValiderTournée = async () => {
    const tournees = this.state.selectedTournée.map((item) => {
      return {
        tournee_id: item.id,
        date: `${item.start.toISOString().split("T")[0]}`,
        plage_debut: item.start.getHours(),
        plage_fin: item.end.getHours(),
      };
    });
    const response = await axios.post(
      `commandes/${this.props.ordonnance.id}/assigner_tournee_form?access_token=a`,
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
    // const { editorState, editorState1 } = this.state;
    let tours = "";
    for (let index = 0; index < this.state.selectedTournée.length; index++) {
      tours = tours + `${this.state.selectedTournée[index].value} ${"\n"} `;
      //   // console.log(this.props.ordonnance)
    }
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
                type="textarea"
                readOnly
                id="prochaine_tournée"
                value={tours}
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
                isMulti
                isDisabled={!this.state.checked}
                className="React"
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
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
              {/* <div id="commonataire" className="mt-3">
                <span style={{ fontSize: "15px" }}>
                  <Truck className="mr-75" size="20" color="#ff9f43" />
                  Commentaire pour le livreur
                </span>
                <Editor
                  editorState={editorState1}
                  wrapperClassName="demo-wrapper"
                  // editorClassName="demo-editor"
                  onEditorStateChange={this.onEditorStateChange1}
                  onChange={(e) => this.setState({ commentaire: e.blocks })}
                  toolbar={{
                    options: ["inline", "fontSize", "textAlign"],
                    inline: {
                      options: ["bold", "italic", "underline"],
                      bold: { className: "bordered-option-classname" },
                      italic: { className: "bordered-option-classname" },
                      underline: { className: "bordered-option-classname" },
                    },
                  }}
                />
              </div> */}
            </div>
            <div className="action-btns d-flex justify-content-start mt-1">
              <Button.Ripple
                color="primary"
                className="mr-1"
                disabled={tours === ""}
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
