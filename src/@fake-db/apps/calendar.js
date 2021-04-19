import mock from "../mock"
let data = {
  events: [
    {
      id: 1,
      title: "My Event",
      start: new Date(),
      end: new Date(),
      label: "créneau_de_livraison",
      allDay: true,
      selectable: true
    }
  ]
}

// GET : Calendar Events
mock.onGet("/api/apps/calendar/events").reply(() => {
  return [200, data.events]
})
