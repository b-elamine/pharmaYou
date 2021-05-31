import axios from "../../../axios";
import { EditorState } from "draft-js";

export const fetchEvents = () => {
  return async (dispatch) => {
    await axios
      .get("/tournees?access_token=a")
      .then((response) => {
        let fetchedEvents = [];
        if (response.data.tournees !== undefined) {
          fetchedEvents = response.data.tournees.map((item) => {
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
              end: new Date(
                date[0],
                date[1] - 1,
                date[2],
                item.plage_fin,
                0,
                0
              ),
              label: "créneau_de_livraison",
              allDay: false,
              selectable:
                new Date(
                  date[0],
                  date[1] - 1,
                  date[2],
                  item.plage_debut,
                  0,
                  0
                ) > new Date(),
              facturation: 10,
              renumeration: 15,
              checked: false,
              editorState: EditorState.createEmpty(),
            };
          });
        } else {
          fetchedEvents = response.data.map((item) => {
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
              end: new Date(
                date[0],
                date[1] - 1,
                date[2],
                item.plage_fin,
                0,
                0
              ),
              label: "créneau_de_livraison",
              allDay: false,
              selectable:
                new Date(
                  date[0],
                  date[1] - 1,
                  date[2],
                  item.plage_debut,
                  0,
                  0
                ) > new Date(),
              facturation: 10,
              renumeration: 15,
              checked: false,
              editorState: EditorState.createEmpty(),
            };
          });
        }

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
    try {
      // await axios({
      //   method: "post",
      //   url: "/tournees?access_token=a",
      //   headers: { "Content-Type": "application/json" },
      //   data: JSON.stringify({
      //     date: `${event.start.toISOString().split("T")[0]}`,
      //     plage_debut: event.start.getHours(),
      //     plage_fin: event.end.getHours(),
      //     remuneration_base: event.renumeration,
      //     remuneration_par_point: event.facturation,
      //   }),
      // });
      console.log({
        date: `${new Date(event.start).toISOString().split("T")[0]}`,
        plage_debut: new Date(event.start).getHours(),
        plage_fin: new Date(event.end).getHours(),
        remuneration_base: event.renumeration,
        remuneration_par_point: event.facturation,
        toute_la_semaine :event.toute_la_semaine ,
      })
      await axios.post(
        `/tournees?access_token=a&toute_la_semaine=${event.toute_la_semaine}`,
        {
          date: `${new Date(event.start).toISOString().split("T")[0]}`,
          plage_debut: new Date(event.start).getHours(),
          plage_fin: new Date(event.end).getHours(),
          remuneration_base: event.renumeration,
          remuneration_par_point: event.facturation,
          toute_la_semaine :event.toute_la_semaine ,
        }
      );
    } catch (err) {
      alert(err.message);
    }
    dispatch({ type: "ADD_EVENT", event });
  };
};

export const updateEvent = (event) => {
  console.log("update event");
  return async (dispatch) => {
    try {
      if (!event.id){
        await axios.post(
          `/tournees/?access_token=a`,
          {
            date: `${event.start.toISOString().split("T")[0]}`,
            plage_debut: event.start.getHours(),
            plage_fin: event.end.getHours(),
            remuneration_base: event.renumeration,
            remuneration_par_point: event.facturation,    
            toute_la_semaine : event.toute_la_semaine
          },
          { "Content-Type": "application/json" }
        );

      }
      else {
        await axios.patch(
          `/tournees/${event.id}?access_token=a`,
          {
            date: `${event.start.toISOString().split("T")[0]}`,
            plage_debut: event.start.getHours(),
            plage_fin: event.end.getHours(),
            remuneration_base: event.renumeration,
            remuneration_par_point: event.facturation,    
            toute_la_semaine : event.toute_la_semaine
          },
          { "Content-Type": "application/json" }
        );

      }
    } catch (err) {
      console.log(err);
    }
    dispatch({ type: "UPDATE_EVENT", event });
  };
};

export const updateDrag = (event) => {
  console.log("update drag event");

  return async (dispatch) => {
    try {
      await axios.patch(
        `/tournees/${event.id}?access_token=a`,
        {
          date: `${event.start.toISOString().split("T")[0]}`,
          plage_debut: event.start.getHours(),
          plage_fin: event.end.getHours(),
          remuneration_base: event.renumeration,
          remuneration_par_point: event.facturation,
        },
        { "Content-Type": "application/json" }
      );
    } catch (err) {
      console.log(err);
    }
    dispatch({ type: "UPDATE_DRAG", event });
  };
};

export const updateResize = (event) => {
  console.log("update resize event");
  return async (dispatch) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      await axios.patch(
        `/tournees/${event.id}?access_token=a`,
        {
          date: `${event.start.toISOString().split("T")[0]}`,
          plage_debut: event.start.getHours(),
          plage_fin: event.end.getHours(),
          remuneration_base: event.renumeration,
          remuneration_par_point: event.facturation,
        },
        { headers }
      );
    } catch (err) {
      console.log(err);
    }
    dispatch({ type: "EVENT_RESIZE", event });
  };
};

export const handleSelectedEvent = (event) => {
  return (dispatch) => dispatch({ type: "HANDLE_SELECTED_EVENT", event });
};
