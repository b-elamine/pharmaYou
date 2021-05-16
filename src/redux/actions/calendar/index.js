import axios from "../../../axios";
import { EditorState } from "draft-js";

export const fetchEvents = () => {
  return async (dispatch) => {
    await axios
      .get("/tournees?access_token=a")
      .then((response) => {
        const fetchedEvents = response.data.map((item) => {
          const date = item.date.split("-");
          return {
            id: item.tournee_id,
            title: "créneau de livraison",
            start: new Date(
              date[0],
              date[1] - 1,
              date[2],
              item.plage_debut,
              0,
              0
            ),
            end: new Date(date[0], date[1] - 1, date[2], item.plage_fin, 0, 0),
            label: "créneau_de_livraison",
            allDay: false,
            selectable:
              new Date(date[0], date[1] - 1, date[2], item.plage_debut, 0, 0) >
              new Date(),
            facturation: 10,
            renumeration: 15,
            checked: false,
            editorState: EditorState.createEmpty(),
          };
        });
        dispatch({ type: "FETCH_EVENTS", events: fetchedEvents });
      })
      .catch((err) => alert(err));
  };
};

export const handleSidebar = (bool) => {
  return (dispatch) => dispatch({ type: "HANDLE_SIDEBAR", status: bool });
};

export const addEvent = (event) => {
  return async (dispatch) => {
    await axios.post("/tournees?access_token=a", {
      date: `${event.start.toISOString().split("T")[0]}`,
      plage_debut: event.start.getHours(),
      plage_fin: event.end.getHours(),
      remuneration_base: event.renumeration,
      remuneration_par_point: event.facturation
    });
    dispatch({ type: "ADD_EVENT", event });
  };
};

export const updateEvent = (event) => {
  return (dispatch) => {
    // axios.put("/tournees?access_token=a", {
    //   date: `${event.start.toISOString().split("T")[0]}`,
    //   plage_debut: event.start.getHours(),
    //   plage_fin: event.end.getHours(),
    //   remuneration_base: event.renumeration,
    //   remuneration_par_point: event.facturation
    // });
    dispatch({ type: "UPDATE_EVENT", event });
  };
};

export const updateDrag = (event) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_DRAG", event });
  };
};

export const updateResize = (event) => {
  return (dispatch) => {
    dispatch({ type: "EVENT_RESIZE", event });
  };
};

export const handleSelectedEvent = (event) => {
  return (dispatch) => dispatch({ type: "HANDLE_SELECTED_EVENT", event });
};
