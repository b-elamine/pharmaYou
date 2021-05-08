import mock from "../mock";
import { EditorState } from "draft-js";

let data = {
  events: [


    {
      id: 4,
      title:"event4",
      start: new Date(2021,4,13,11,23,0),
      end: new Date(2021,4,13,15,40,0),
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
      start: new Date(2021,4,23,14,23,0),
      end: new Date(2021,4,23,15,30,0),
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
      start: new Date(2022,4,10,14,23,0),
      end: new Date(2022,4,10,15,40,0),
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
