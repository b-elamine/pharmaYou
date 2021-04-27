import mock from "../mock";
import { EditorState } from "draft-js";

let data = {
  events: [
    {
      id: 1,
      title:"event1",
      start: new Date(2021,11,29,14,23,0),
      end: new Date(2021,11,29,15,40,0),
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
      start: new Date(2021,3,28,14,23,0),
      end: new Date(2021,3,28,15,40,0),
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
    {
      id: 4,
      title:"event4",
      start: new Date(2021,5,23,11,23,0),
      end: new Date(2021,35,23,15,40,0),
      label: "créneau_de_livraison",
      allDay: false,
      selectable: true,
      facturation: 13,
      renumeration: 17,
      checked: true,
      editorState: EditorState.createEmpty(),
    },
    {
      id: 5,
      title:"event5",
      start: new Date(2021,11,23,14,23,0),
      end: new Date(2021,11,23,15,30,0),
      label: "créneau_de_livraison",
      allDay: false,
      selectable: true,
      facturation: 13,
      renumeration: 17,
      checked: true,
      editorState: EditorState.createEmpty(),
    },
    {
      id: 6,
      title:"event6",
      start: new Date(2022,3,23,14,23,0),
      end: new Date(2022,3,23,15,40,0),
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
