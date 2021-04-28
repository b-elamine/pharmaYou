import React from "react";
import axios from "axios";
import { Input, Card, CardHeader, CardBody, Button } from "reactstrap";
import { X, Users, Truck } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import Flatpickr from "react-flatpickr";
import Switch from "react-switch";
import Select from "react-select";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import "../../../assets/scss/pages/app-email.scss";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
class ComposeEmail extends React.Component {
  state = {
    selectedTournée : {},
    tournées: [{ start: new Date(), end: new Date(), value: "", label: "" }],
    editorState: EditorState.createEmpty(),
    editorState1: EditorState.createEmpty(),
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
          selectedTournée : sortedData[0]
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { editorState, editorState1 } = this.state;

    return (
      <Card
        // style={{
        //   display: this.props.currentStatus ? "" : "none",

        // }}
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
                readOnly
                id="prochaine_tournée"
                value={this.state.selectedTournée.value}
                // onChange={(e) =>
                //   this.setState({ listeTournes: e.target.value })
                // }
              />
              {/* <Flatpickr
                disabled
                id="Date"
                className="form-control"
                // placeholder="hello"
                value={new Date()}
                // onChange={(date) => this.handleDateChange(date)}
                options={{
                  // enableTime: true,
                  // noCalendar: true,
                  dateFormat: "Y-m-d - H:i",
                  time_24hr: true,
                  minTime: new Date().getTime(),
                }}
              /> */}
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
            <div className="form-label-group">
              <span style={{ fontSize: "15px" }}>
                Sélectionner une autre tournée
              </span>
              <Select
                isDisabled={!this.state.checked}
                className="React"
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
                name="Role"
                placeholder="Liste des prochaines tournées"
                options={this.state.tournées}
                onChange={(e)=>{ this.setState({ selectedTournée: e })}}
              />
            </div>
            <div id="email-notif" style={{ marginTop: "80px" }}>
              <span style={{ fontSize: "15px" }}>
                <Users className="mr-75" size="20" color="#ff9f43" />
                Notification client sms et email
              </span>
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
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
            <div id="commonataire" className="mt-3">
              <span style={{ fontSize: "15px" }}>
                <Truck className="mr-75" size="20" color="#ff9f43" />
                Commentaire pour le livreur
              </span>
              <Editor
                editorState={editorState1}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
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
            </div>
            <div className="action-btns d-flex justify-content-start mt-1">
              <Button.Ripple
                color="primary"
                className="mr-1"
                // disabled={
                //   this.state.emailTo.length && this.state.emailBody.length > 0
                //     ? false
                //     : true
                // }
                onClick={() => this.handleSidebarClose()}
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
