import React from "react";

class SideBar extends React.Component {
  render() {
    return (
      <div
        style={{ overflowY: "scroll" }}
        className={`add-event-sidebar 
        ${this.props.sidebar ? "show" : "hidden"}
        `}
      >
        {/* <div className="header d-flex justify-content-between">
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
        </div> */}

        <div style={{ height: "500px" }} className="add-event-body ">
          <div className="category-action d-flex justify-content-between my-50">
            <div className="event-category">
              ThirdSection
              <div>
                <div className="chip-body">
                  <div className="chip-text text-capitalize"></div>
                </div>
              </div>
            </div>
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
        {/* <div className="add-event-fields mt-2">
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
                  options={{ minDate: "today" }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="startDate">Créneau entre</Label>
                <Flatpickr
                  minDate="today"
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
                    minTime: new Date().getTime(),
                  }}
                />
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="endDate">Et</Label>
              <Flatpickr
                minDate="today"
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
                  minTime: new Date().getTime(),
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
                Facturation livreur par commande
              </span>
              <NumericInput
                min={0}
                value={this.state.facturation}
                mobile
                format={this.myFormat}
                style={mobileStyle}
                onChange={(e) => {
                  this.setState({ facturation: e });
                }}
              />
            </FormGroup>
            <FormGroup>
              <span style={{ marginBottom: "20px" }} className="text-wrap">
                Définir la rénumeration de base
              </span>
              <NumericInput
                min={0}
                value={this.state.renumeration}
                mobile
                format={this.myFormat}
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
        </div> */}
      </div>
    );
  }
}

export default SideBar;
