import React from "react";
import { X } from "react-feather";
import {
  // UncontrolledDropdown,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import NumericInput from "react-numeric-input";
import { mobileStyle } from "../../forms/form-elements/number-input/InputStyles";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";

import Switch from "react-switch";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";

const eventColors = {
  // business: "chip-success",
  // work: "chip-warning",
  // personal: "chip-danger",
  créneau_de_livraison: "chip-primary",
};
class AddEvent extends React.Component {
  state = {
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    facturation: 1,
    renumeration: 1,
    label: null,
    allDay: true,
    selectable: true,
    checked: false,
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleChange = (checked) => {
    this.setState({ checked });
  };
  handleDateChange = (date) => {
    let dateN = new Date(date);
    this.setState({
      startDate: new Date(
        dateN.getFullYear(),
        dateN.getMonth(),
        dateN.getDate(),
        this.state.startDate.getHours(),
        this.state.startDate.getMinutes(),
        this.state.startDate.getSeconds()
      ),
      endDate: new Date(
        dateN.getFullYear(),
        dateN.getMonth(),
        dateN.getDate(),
        this.state.endDate.getHours(),
        this.state.endDate.getMinutes(),
        this.state.endDate.getSeconds()
      ),
    });
  };

  // handleLabelChange = (label) => {
  //   this.setState({
  //     label,
  //   });
  // };

  handleAddEvent = (id) => {
    this.props.handleSidebar(false);
    if (this.state.checked) {
      let dateD = this.state.startDate;
      let dateF = this.state.endDate;
      for (let index = 0; index < 7; index++) {
        console.log(this.state.startDate);
        this.props.addEvent({
          id: id + index,
          title: this.state.title,
          start: dateD.setDate(dateD.getDate() + index),
          end: dateF.setDate(dateF.getDate() + index),
          label:
            this.state.label === null
              ? "créneau_de_livraison"
              : this.state.label,
          allDay: this.state.allDay,
          selectable: this.state.selectable,
          facturation: this.state.facturation,
          renumeration: this.state.renumeration,
          editorState: this.state.editorState,
        });
        this.setState({
          title: "",
          startDate: new Date(),
          endDate: new Date(),
          label: null,
          allDay: true,
          selectable: true,
          facturation: 1,
          renumeration: 1,
          editorState: EditorState.createEmpty(),
          checked: false,
        });
      }
    } else {
      this.props.addEvent({
        id: id,
        title: this.state.title,
        start: this.state.startDate,
        end: this.state.endDate,
        label:
          this.state.label === null ? "créneau_de_livraison" : this.state.label,
        allDay: this.state.allDay,
        selectable: this.state.selectable,
        facturation: this.state.facturation,
        renumeration: this.state.renumeration,
        editorState: this.state.editorState,
      });
    }
    this.setState({
      title: "",
      startDate: new Date(),
      endDate: new Date(),
      label: null,
      allDay: true,
      selectable: true,
      facturation: 1,
      renumeration: 1,
      editorState: EditorState.createEmpty(),
      checked: false,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.eventInfo === null ? "" : nextProps.eventInfo.title,
      url: nextProps.eventInfo === null ? "" : nextProps.eventInfo.url,
      startDate:
        nextProps.eventInfo === null
          ? new Date()
          : new Date(nextProps.eventInfo.start),
      endDate:
        nextProps.eventInfo === null
          ? new Date()
          : new Date(nextProps.eventInfo.end),
      label: nextProps.eventInfo === null ? null : nextProps.eventInfo.label,
      allDay: nextProps.eventInfo === null ? true : nextProps.eventInfo.allDay,
      selectable:
        nextProps.eventInfo === null ? true : nextProps.eventInfo.selectable,
      renumeration:
        nextProps.eventInfo === null ? 1 : nextProps.eventInfo.renumeration,
      facturation:
        nextProps.eventInfo === null ? 1 : nextProps.eventInfo.facturation,
      checked:
        nextProps.eventInfo === null ? false : nextProps.eventInfo.checked,
      editorState:
        nextProps.eventInfo === null
          ? EditorState.createEmpty()
          : nextProps.eventInfo.editorState,
    });
  }

  render() {
    let events = this.props.events.map((i) => i.id);
    let lastId = events.pop();
    let newEventId = lastId + 1;
    return (
      <div
        style={{ overflowY: "scroll" }}
        className={`add-event-sidebar ${
          this.props.sidebar ? "show" : "hidden"
        }`}
      >
        <div className="header d-flex justify-content-between">
          <h3 className="text-bold-600 mb-0">
            {this.props.eventInfo !== null
              ? "Modifier tournée livreur"
              : "Rajouter tournée livreur"}
          </h3>
          <div
            className="close-icon cursor-pointer"
            onClick={() => this.props.handleSidebar(false)}
          >
            <X size={20} />
          </div>
        </div>
        <div className="add-event-body">
          <div className="category-action d-flex justify-content-between my-50">
            <div className="event-category">
              {this.state.label !== null ? (
                <div className={`chip ${eventColors[this.state.label]}`}>
                  <div className="chip-body">
                    <div className="chip-text text-capitalize">
                      {this.state.label}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            {/* <div className="category-dropdown">
              <UncontrolledDropdown>
                <DropdownToggle tag="div" className="cursor-pointer">
                  <Tag size={18} />
                </DropdownToggle>
                <DropdownMenu tag="ul" right>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("business")}
                  >
                    <span className="bullet bullet-success bullet-sm mr-50"></span>
                    <span>Business</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("work")}
                  >
                    <span className="bullet bullet-warning bullet-sm mr-50"></span>
                    <span>Work</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("personal")}
                  >
                    <span className="bullet bullet-danger bullet-sm mr-50"></span>
                    <span>Personal</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("others")}
                  >
                    <span className="bullet bullet-primary bullet-sm mr-50"></span>
                    <span>Others</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div> */}
          </div>
          <div className="add-event-fields mt-2">
            <FormGroup className="form-label-group">
              <Input
                type="text"
                id="EventTitle"
                placeholder="Event Title"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <Label for="EventTitle">Titre du creneau</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
              <FormGroup>
                <Label for="Date">Date</Label>
                <Flatpickr
                  id="Date"
                  className="form-control"
                  value={this.state.startDate}
                  onChange={(date) => this.handleDateChange(date)}
                  // options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="startDate">Créneau entre</Label>
                <Flatpickr
                  id="startDate"
                  className="form-control"
                  value={this.state.startDate}
                  onChange={(date) => {
                    this.state.startDate.setTime(new Date(date).getTime());
                  }}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    time_24hr: true,
                  }}
                  // options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                />
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="endDate">Et</Label>
              <Flatpickr
                id="endDate"
                className="form-control"
                value={this.state.endDate}
                onChange={(date) => {
                  this.state.endDate.setTime(new Date(date).getTime());
                }}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  time_24hr: true,
                }}
              />
            </FormGroup>
            <FormGroup>
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
                <span className="ml-50 text-wrap">
                  Rajouter dans la meme tranche pour les 7 prochaines jours
                </span>
              </div>
            </FormGroup>
            <FormGroup>
              <span style={{ marginBottom: "20px" }} className="text-wrap">
                Facturation livreur par commande (€)
              </span>
              <NumericInput
                min={0}
                value={this.state.facturation}
                mobile
                style={mobileStyle}
                onChange={(e) => {
                  this.setState({ facturation: e });
                }}
              />
            </FormGroup>
            <FormGroup>
              <span style={{ marginBottom: "20px" }} className="text-wrap">
                Définir la rénumeration de base (€)
              </span>
              <NumericInput
                min={0}
                value={this.state.renumeration}
                mobile
                style={mobileStyle}
                onChange={(e) => {
                  this.setState({ renumeration: e });
                }}
              />
            </FormGroup>
            <FormGroup>
              <div style={{ height: "200px" }}>
                <Editor
                  // onChange={(e)=>{console.log(e.blocks)}}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  defaultEditorState={this.state.editorState}
                  onEditorStateChange={this.onEditorStateChange}
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
            </FormGroup>
          </div>
          <hr className="my-2" />
          <div className="add-event-actions text-left ">
            <Button.Ripple
              disabled={this.state.title.length > 0 ? false : true}
              color="primary"
              onClick={() => {
                this.props.handleSidebar(false);
                if (
                  this.props.eventInfo === null ||
                  this.props.eventInfo.title.length <= 0
                )
                  this.handleAddEvent(newEventId);
                else
                  this.props.updateEvent({
                    id: this.props.eventInfo.id,
                    title: this.state.title,
                    label: this.state.label,
                    start: this.state.startDate,
                    end: this.state.endDate,
                    allDay: true,
                    selectable: true,
                    facturation: this.state.facturation,
                    renumeration: this.state.renumeration,
                    checked: this.state.checked,
                    editorState: this.state.editorState,
                  });
              }}
            >
              Valider
            </Button.Ripple>
            <Button.Ripple
              className="ml-1"
              color="danger"
              onClick={() => {
                this.props.handleSidebar(false);
                if (this.props.handleSelectedEvent)
                  this.props.handleSelectedEvent(null);
                else return null;
              }}
              outline
            >
              Annuler
            </Button.Ripple>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEvent;
