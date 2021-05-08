import React from "react";
import AddEventSidebar from "./AddEventSidebar";
import AddEventButton from "./AddEventButton";
import { Card, CardBody, Button, ButtonGroup } from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import "moment/locale/fr";
import { connect } from "react-redux";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import {
  fetchEvents,
  handleSidebar,
  addEvent,
  handleSelectedEvent,
  updateEvent,
  updateDrag,
  updateResize,
} from "../../../redux/actions/calendar/index";
import { EditorState } from "draft-js";

import { ChevronLeft, ChevronRight, Check } from "react-feather";

import "react-big-calendar/lib/addons/dragAndDrop/styles.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../../assets/scss/plugins/calendars/react-big-calendar.scss";
const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
const eventColors = {
  // business: "bg-success",
  travail: "bg-warning",
  personel: "bg-danger",
  créneau_de_livraison: "bg-primary",
};

class Toolbar extends React.Component {
  render() {
    return (
      <div className="calendar-header mb-2 d-flex justify-content-between flex-wrap">
        <div className="month-label d-flex flex-column text-center text-md-right mt-1 mt-md-0">
          <div className="calendar-navigation">
            <Button.Ripple
              className="btn-icon rounded-circle"
              size="sm"
              color="primary"
              onClick={() => this.props.onNavigate("PREV")}
            >
              <ChevronLeft size={15} />
            </Button.Ripple>
            <div className="month d-inline-block mx-75 text-bold-500 font-medium-2 align-middle">
              {this.props.label}
            </div>
            <Button.Ripple
              className="btn-icon rounded-circle"
              size="sm"
              color="primary"
              onClick={() => this.props.onNavigate("NEXT")}
            >
              <ChevronRight size={15} />
            </Button.Ripple>
          </div>
          {/* <div className="event-tags d-none d-sm-flex justify-content-end mt-1">
            <div className="tag mr-1">
              <span className="bullet bullet-success bullet-sm mr-50"></span>
              <span>Business</span>
            </div>
            <div className="tag mr-1">
              <span className="bullet bullet-warning bullet-sm mr-50"></span>
              <span>Work</span>
            </div>
            <div className="tag mr-1">
              <span className="bullet bullet-danger bullet-sm mr-50"></span>
              <span>Personal</span>
            </div>
            <div className="tag">
              <span className="bullet bullet-primary bullet-sm mr-50"></span>
              <span>Others</span>
            </div>
          </div>*/}
        </div>
        <div className="text-center view-options mt-1 mt-sm-0 ml-lg-5 ml-0">
          <ButtonGroup>
            <button
              className={`btn ${
                this.props.view === "month"
                  ? "btn-primary"
                  : "btn-outline-primary text-warning"
              }`}
              onClick={() => {
                this.props.onView("month");
              }}
            >
              Mois
            </button>
            <button
              className={`btn ${
                this.props.view === "week"
                  ? "btn-primary"
                  : "btn-outline-primary text-warning"
              }`}
              onClick={() => {
                this.props.onView("week");
              }}
            >
              Semaine
            </button>
            <button
              className={`btn ${
                this.props.view === "day"
                  ? "btn-primary"
                  : "btn-outline-primary text-warning"
              }`}
              onClick={() => {
                this.props.onView("day");
              }}
            >
              Jour
            </button>
            <button
              className={`btn ${
                this.props.view === "work_week"
                  ? "btn-primary"
                  : "btn-outline-primary text-warning"
              }`}
              onClick={() => {
                this.props.onView("agenda");
              }}
            >
              List
            </button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

class CalendarApp extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.app.events.length !== state.events ||
      props.app.sigetDerivedStateFromPropsdebar !== state.sidebar ||
      props.app.selectedEvent !== state.eventInfo
    ) {
      let dateToObj = props.app.events.map((event) => {
        event.start = new Date(event.start);
        event.end = new Date(event.end);
        return event;
      });
      return {
        events: dateToObj,
        sidebar: props.app.sidebar,
        eventInfo: props.app.selectedEvent,
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      checkAll: true,
      checkCreneau: false,
      filterEvents: [],
      events: [],
      views: {
        month: true,
        week: true,
        day: true,
        agenda: true,
      },
      eventInfo: null,
    };
  }

  async componentDidMount() {
    await this.props.fetchEvents();
  }

  handleEventColors = (event) => {
    return { className: eventColors[event.label] };
  };

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state;
    const idx = events.indexOf(event);
    let allDay = event.allDay;
    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = false;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }
    if (start >= new Date()) {
      const updatedEvent = { ...event, start, end, allDay };
      const nextEvents = [...events];
      nextEvents.splice(idx, 1, updatedEvent);
      this.setState({
        events: nextEvents,
      });
      this.props.updateDrag(updatedEvent);
    } else {
      alert("Vous pouver pas ajouter ou modifier un créneau dans le passé!");
    }
  };

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state;
    if (start < new Date()) {
      alert("Vous pouver pas ajouter ou modifier un créneau dans le passé!");
    } else if (start.getDate() !== end.getDate()) {
      alert("Un créneau ne peut pas durée plus qu'une journée!");
    } else {
      const nextEvents = events.map((existingEvent) => {
        return existingEvent.id === event.id
          ? { ...existingEvent, start, end }
          : existingEvent;
      });

      this.setState({
        events: nextEvents,
      });

      this.props.updateResize({ ...event, start, end });
    }
  };

  handleSelectEvent = (event) => {
    let filteredState = this.state.events.filter((i) => i.id === event.id);
    this.props.handleSidebar(true);
    this.props.handleSelectedEvent(filteredState[0]);
    this.setState({
      eventInfo: filteredState[0],
    });
  };

  render() {
    let { events, views, sidebar } = this.state;
    return (
      <div className="app-calendar position-relative">
        <div
          className={`app-content-overlay ${sidebar ? "show" : "hidden"}`}
          onClick={() => {
            this.props.handleSidebar(false);
            this.props.handleSelectedEvent(null);
          }}
        ></div>
        <Card>
          <CardBody>
            <div
              style={{
                float: "left",
                width: "20%",
                borderRightColor: "grey",
                borderRightWidth: "1px",
              }}
            >
              <div style={{ marginBottom: "20px", marginRight: "15px" }}>
                <AddEventButton />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <span style={{ opacity: 0.5 }}>filtrer</span>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Checkbox
                  // checked={checkAll}
                  size="sm"
                  color="warning"
                  icon={<Check className="vx-icon" size={12} />}
                  label="tout voir"
                  // onChange={() => {
                  //   if (!checkAll) {
                  //     this.setState({
                  //       filterEvents: events,
                  //       checkAll: !checkAll,
                  //       checkCreneau: false,
                  //     });
                  //   }
                  // }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Checkbox
                  // checked={checkCreneau}
                  size="sm"
                  color="primary"
                  icon={<Check className="vx-icon" size={12} />}
                  label="créneaux livraison"
                  // onChange={() => {
                  //   if (!checkCreneau) {
                  //     let filterEvents = events.filter(
                  //       (item) => item.label === "créneau_de_livraison"
                  //     );
                  //     this.setState({
                  //       filterEvents,
                  //       checkCreneau: !checkCreneau,
                  //       checkAll: false,
                  //     });
                  //   }
                  // }}
                />
              </div>
            </div>
            <DragAndDropCalendar
              localizer={localizer}
              events={events}
              onEventDrop={this.moveEvent}
              onEventResize={this.resizeEvent}
              startAccessor="start"
              endAccessor="end"
              resourceAccessor="url"
              views={views}
              components={{ toolbar: Toolbar }}
              eventPropGetter={this.handleEventColors}
              popup={true}
              // just a random date it wont affect the day but the time
              min={new Date(2020, 5, 7, 7, 0, 0)}
              max={new Date(2020, 5, 7, 13, 0, 0)}
              onSelectEvent={(event) => {
                this.handleSelectEvent(event);
              }}
              onSelectSlot={({ start, end }) => {
                if (new Date(start) > new Date()) {
                  this.props.handleSidebar(true);
                  this.props.handleSelectedEvent({
                    start: new Date(start),
                    end: new Date(end),
                    title: "",
                    label: null,
                    allDay: false,
                    selectable: true,
                    facturation: 1,
                    renumeration: 1,
                    editorState: EditorState.createEmpty(),
                    checked: false,
                  });
                } else {
                  alert(
                    "Vous pouver pas ajouter ou modifier un créneau dans le passé!"
                  );
                }
              }}
              selectable={true}
            />
          </CardBody>
        </Card>
        <AddEventSidebar
          sidebar={sidebar}
          handleSidebar={this.props.handleSidebar}
          addEvent={this.props.addEvent}
          events={this.state.events}
          eventInfo={this.state.eventInfo}
          selectedEvent={this.props.handleSelectedEvent}
          updateEvent={this.props.updateEvent}
          resizable
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.calendar,
  };
};

export default connect(mapStateToProps, {
  fetchEvents,
  handleSidebar,
  addEvent,
  handleSelectedEvent,
  updateEvent,
  updateDrag,
  updateResize,
})(CalendarApp);
