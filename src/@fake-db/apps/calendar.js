import mock from "../mock";
import { EditorState } from "draft-js";

let data = {
  events: [
    {
      id: 1,
      title:"event1",
      start: new Date(2021,3,24,14,23,0),
      end: new Date(2021,3,24,15,40,0),
      label: "créneau_de_livraison",
      allDay: false,
      selectable: true,
      facturation: 13,
      renumeration: 17,
      checked: true,
      editorState: EditorState.createEmpty(),
    },
    {
      id: 2,
      title:"event2",
      start: new Date(2021,3,22,14,23,0),
      end: new Date(2021,3,22,15,40,0),
      label: "créneau_de_livraison",
      allDay: false,
      selectable: true,
      facturation: 13,
      renumeration: 17,
      checked: true,
      editorState: EditorState.createEmpty(),
    },
    {
      id: 3,
      title:"event3",
      start: new Date(2021,3,23,14,23,0),
      end: new Date(2021,3,23,15,40,0),
      label: "créneau_de_livraison",
      allDay: false,
      selectable: true,
      facturation: 13,
      renumeration: 17,
      checked: true,
      editorState: EditorState.createEmpty(),
    },
  ],
};

// GET : Calendar Events
mock.onGet("/api/apps/calendar/events").reply(() => {
  return [200, data.events];
});
