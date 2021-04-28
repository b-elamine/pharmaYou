import React from "react";
import axios from "axios";
import { Input, Card, CardHeader, CardBody, Button } from "reactstrap";
import { X, Users, Truck, Edit } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import Flatpickr from "react-flatpickr";
import Switch from "react-switch";
import Select from "react-select";

import { ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import "../../../assets/scss/pages/app-email.scss";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
class ComposeEmail extends React.Component {
  state = {
    selectedTournée: {},
    tournées: [{ start: new Date(), end: new Date(), value: "", label: "" }],
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        `Bonjour, votre mutuelle est expiré,veulliez nous faire prévenir par email le document,via l'email suivant.ordonnances@pharmayou.fr.

        Réference commande # ${this.props.ordonnance.id}

        Docteur House, pour vous servir
        `
      )
    ),
    commentaire: "",
    listeTournes: "",
    emailBody: "",
    checked: false,
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  onEditorStateChange1 = (editorState1) => {
    this.setState({
      editorState1,
    });
  };

  handleChange = (checked) => {
    this.setState({ checked });
  };

  handleSidebarClose = () => {
    this.props.handleComposeSidebar("close");
    this.setState({
      editorState: EditorState.createEmpty(),
      editorState1: EditorState.createEmpty(),
      commentaire: "",
      listeTournes: "",
      emailBody: "",
      checked: false,
    });
  };

  async componentDidMount() {
    await axios
      .get("/api/apps/calendar/events")
      .then((response) => {
        const data = response.data
          .filter((item) => item.start >= new Date())
          .map((item) => {
            return {
              start: item.start,
              end: item.end,
              value: `${item.start.toISOString().split("T")[0]}  ${
                item.start.toISOString().split("T")[1].split(":")[0]
              }H:${item.start.toISOString().split("T")[1].split(":")[1]} - ${
                item.end.toISOString().split("T")[1].split(":")[0]
              }H:${item.end.toISOString().split("T")[1].split(":")[1]}`,
              label: `${item.start.toISOString().split("T")[0]}  ${
                item.start.toISOString().split("T")[1].split(":")[0]
              }H:${item.start.toISOString().split("T")[1].split(":")[1]} - ${
                item.end.toISOString().split("T")[1].split(":")[0]
              }H:${item.end.toISOString().split("T")[1].split(":")[1]}`,
            };
          });
        const sortedData = data.sort((a, b) => a.start - b.start);
        this.setState({
          tournées: sortedData,
          selectedTournée: sortedData[0],
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { editorState } = this.state;

    // console.log(this.state.editorState.getCurrentContent().getFirstBlock().getText())
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
            <div className="form-label-group mt-5">
              <span style={{ fontSize: "15px" }}>
                Déplacer dans une autre tournée
              </span>
              <Select
                // isDisabled={!this.state.checked}
                className="React"
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
                name="Role"
                placeholder="Liste des prochaines tournées"
                options={this.state.tournées}
                onChange={(e) => {
                  this.setState({ selectedTournée: e });
                }}
              />
            </div>
            <div id="email-notif" style={{ marginTop: "50px" }}>
              <span style={{ fontSize: "15px" }}>
                <Users className="mr-75" size="20" color="#378af9" />
                Notification client sms et email
              </span>
              <Editor
                // defaultEditorState={ContentState.createFromText('test')}
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                onChange={(e) => this.setState({ emailBody: e.blocks })}
                value={this.state.editorMessage}
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
            </div>

            <div className="action-btns d-flex justify-content-start mt-5">
              <Button
                color="light-info"
                style={{
                  backgroundColor: "#e8fbfd",
                }}
                className=" text-info mr-1"
                onClick={() => {
                  this.handleSidebarClose();
                  alert(
                    this.state.editorState.getCurrentContent().getPlainText()
                  );
                  this.setState({
                    editorState: EditorState.createWithContent(
                      ContentState.createFromText(
                        `Bonjour, votre mutuelle est expiré,veulliez nous faire prévenir par email le document,via l'email suivant.ordonnances@pharmayou.fr.
                  
                          Réference commande # ${this.props.ordonnance.id}
                  
                          Docteur House, pour vous servir
                          `
                      )
                    ),
                  });
                }}
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
