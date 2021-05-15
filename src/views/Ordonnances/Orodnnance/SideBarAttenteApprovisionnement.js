import React from "react";
import axios from "../../../axios";
import { Card, CardHeader, CardBody, Button, Input } from "reactstrap";
import { X, Users } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import Select from "react-select";

import { ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import "../../../assets/scss/pages/app-email.scss";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
import externalAxios from "../../../axios";

class ComposeEmail extends React.Component {
  state = {
    selectedTournée: {},
    tournées: [{ start: new Date(), end: new Date(), value: "", label: "" }],
    editorState: EditorState.createEmpty(),
    // commentaire: "",
    listeTournes: "",
    email_title: `[Commande ${this.props.ordonnance.id}] Votre commande a été mise en attente`,
    email_text: `Bonjour,\n\nVotre commande ${this.props.ordonnance.id} a été mise en attente.\n\nPharma You`,
    sms_text: `Votre commande ${this.props.ordonnance.id} a été mise en attente.`,
    push_text: "Votre commande a été mise en attente.",
    checked: false,
  };
  // onEditorStateChange = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  handleChange = (checked) => {
    this.setState({ checked });
  };

  handleSidebarClose = () => {
    this.props.handleComposeSidebar("close");
    this.setState({
      editorState: EditorState.createEmpty(),
      // editorState1: EditorState.createEmpty(),
      commentaire: "",
      listeTournes: "",

      checked: false,
    });
  };

  fetch_email_text = async (commande_id) => {
    try {
      const response = await externalAxios.get(
        `/commandes/${commande_id}/mettre_en_attente_form?access_token=a`
      );
      const message = response.data.default_message
        ? response.data.default_message
        : null;
      // const newEditorState = EditorState.createWithContent(
      //   ContentState.createFromText(email_text)
      // );
      if (message !== null) {
        this.setState({
          email_title: message.email_title,
          email_text: message.email_text,
          sms_text: message.sms_text,
          push_text: message.push_text,
        });
      }
    } catch (err) {
      alert(err.message);
    }
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
              item.plage_debut,
              0,
              0
            );
            const end = new Date(
              date[0],
              date[1] - 1,
              date[2],
              item.plage_fin,
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
        const tourneeParDefaut = this.props.ordonnance.tournee_id
          ? sortedData.filter(
              (item) => item.id === this.props.ordonnance.tournee_id
            )[0]
          : sortedData[0];
        this.setState({
          tournées: sortedData,
          selectedTournée: [tourneeParDefaut],
        });
      })
      .catch((err) => alert(err.message));

    this.fetch_email_text(this.props.ordonnance.id);
  }

  render() {
    // const { editorState } = this.state;

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
                // isDisabled={!this.state.checked}
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
              {/* <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                // editorClassName="demo-editor"
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
              /> */}
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
                  const newEditorState = EditorState.createWithContent(
                    ContentState.createFromText(this.state.email_text)
                  );
                  this.setState({
                    editorState: newEditorState,
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
