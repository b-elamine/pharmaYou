import React from "react";
import { Card, CardHeader, CardTitle, CardBody} from "reactstrap";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../../assets/scss/plugins/extensions/maps.scss";

const MyPopupMarker = ({ position, content }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <React.Fragment>{items}</React.Fragment>;
};

class LivreursMap extends React.Component {
  state = {
    markers: [
      { key: "marker1", position: [51.52, -0.1], content: "akram ouardas" },
      { key: "marker2", position: [51.51, -0.1], content: "El mogherbi faycal" },
      { key: "marker3", position: [51.49, -0.1], content: "je sais pas" },
    ],
  };
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Carte des livreurs actifs</CardTitle>
        </CardHeader>
        <CardBody>
          <Map center={[51.505, -0.09]} zoom={13}>
            <TileLayer
              attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMarkersList markers={this.state.markers} />
          </Map>
        </CardBody>
      </Card>
    );
  }
}
export default LivreursMap;