import React from "react";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import { X, Users } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
// import Switch from "react-switch";
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
    commentaire: "",
    listeTournes: "",
    emailBody: "",
    checked: false,
    options: [
      { value: "attestation_mutuelle", label: "Attestation Mututelle" },
      { value: "probleme_ordonnance", label: "Probleme ordonnance" },
      { value: "probleme_carte_vital", label: "Probleme carte vital" },
    ],
    document_manquant_value: "",
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

  fetch_email_text = async (commande_id) => {
    try {
      // if (!commande_id) {
      //   return alert("l'identifiant de la commande est invalide.");
      // }
      const response = await externalAxios.get(
        `/commandes/${commande_id}/annuler_form?access_token=a`
      );
      const message = response.data.default_message.email_text
        ? response.data.default_message.email_text
        : null;

      const email_text = message ? message : "Pas de message pour l'instant";
      const newEditorState = EditorState.createWithContent(
        ContentState.createFromText(email_text)
      );
      this.setState({
        editorState: newEditorState,
        email_text: email_text,
      });
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
      editorState: EditorState.createEmpty(),
      editorState1: EditorState.createEmpty(),
      commentaire: "",
      listeTournes: "",
      emailBody: "",
      checked: false,
    });
  };

  async componentDidMount() {
    // await axios
    //   .get("/api/apps/calendar/events")
    //   .then((response) => {
    //     const data = response.data
    //       .filter((item) => item.start >= new Date())
    //       .map((item) => {
    //         return {
    //           start: item.start,
    //           end: item.end,
    //           value: `${item.start.toISOString().split("T")[0]}  ${
    //             item.start.toISOString().split("T")[1].split(":")[0]
    //           }H:${item.start.toISOString().split("T")[1].split(":")[1]} - ${
    //             item.end.toISOString().split("T")[1].split(":")[0]
    //           }H:${item.end.toISOString().split("T")[1].split(":")[1]}`,
    //           label: `${item.start.toISOString().split("T")[0]}  ${
    //             item.start.toISOString().split("T")[1].split(":")[0]
    //           }H:${item.start.toISOString().split("T")[1].split(":")[1]} - ${
    //             item.end.toISOString().split("T")[1].split(":")[0]
    //           }H:${item.end.toISOString().split("T")[1].split(":")[1]}`,
    //         };
    //       });
    //     const sortedData = data.sort((a, b) => a.start - b.start);
    //     this.setState({
    //       tournées: sortedData,
    //       selectedTournée: sortedData[0],
    //     });
    //   })
    //   .catch((err) => console.log(err));
    this.fetch_email_text(this.props.ordonnance.id);
  }

  render() {
    const { editorState, options } = this.state;

    return (
      <Card
        className={`compose-email shadow-none ${
          this.props.currentStatus ? "open" : ""
        }`}
      >
        <CardHeader className="compose-mail-header align-items-center">
          <div className="compose-mail-title">
            <h3 className="text-bold-600 card-title">Annuler commande</h3>
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
            {/* <div className="form-label-group mt-5">
              <span style={{ fontSize: "15px" }}>Annuler commande</span>
              <Select
                // isDisabled={!this.state.checked}
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
            </div> */}
            <div id="email-notif" style={{ marginTop: "50px" }}>
              <span style={{ fontSize: "15px" }}>
                <Users className="mr-75" size="20" color="red" />
                Notification client sms et Email
              </span>
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                // editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                onChange={(e) => this.setState({ emailBody: e.blocks })}
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
            <div className="action-btns d-flex justify-content-start mt-1">
              <Button.Ripple
                color="light-info"
                style={{
                  backgroundColor: "#fbdddd",
                }}
                className=" font-weight-bold text-danger mr-1"
                // disabled={
                //   this.state.emailTo.length && this.state.emailBody.length > 0
                //     ? false
                //     : true
                // }
                onClick={() => {
                  this.handleSidebarClose();

                  alert(
                    this.state.editorState.getCurrentContent().getPlainText()
                  );
                  this.setState({
                    editorState: EditorState.createWithContent(
                      ContentState.createFromText(
                        this.state.editorState
                          .getCurrentContent()
                          .getPlainText()
                      )
                    ),
                  });
                }}
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
