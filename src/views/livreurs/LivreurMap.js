import React from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../../assets/scss/plugins/extensions/maps.scss";
import axios from "../../axios";
import SweetAlert from "react-bootstrap-sweetalert";
import io from "socket.io-client";

const MyPopupMarker = ({ position, content }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
);

// const socket = io("https://ordo.pharmayou.fr:3003/livreursMap", {
//   transports: ["websocket", "polling"],
// });

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <React.Fragment>{items}</React.Fragment>;
};

class LivreursMap extends React.Component {
  state = {
    markers: [{ key: "", position: [51.52, -0.1], content: "" }],
    errorAlert: false,
    errorText: "Vérifier votre cnnexion",
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/livreurs?access_token=a");
      const data = response.data.map((item) => {
        if (item.tracking !== null) {
          return {
            key: item.livreur_id,
            content: item.nom_complet,
            position: [item.tracking.lat, item.tracking.lon],
          };
        }
      });
      const filtredData = data.filter((i) => i !== undefined);

      this.setState({
        markers: filtredData,
        center: filtredData[0].position,
      });
    } catch (err) {
      const error_message =
        err.message === "Network Error"
          ? "Une erreur s'est produite lors de la récupération des données."
          : "Vérifiez votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
    // socket.on("movelivreur", (currentresponse) => {
    //   update localisation
    // });
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Carte des livreurs actifs</CardTitle>
        </CardHeader>
        <CardBody>
          <Map center={this.state.center} zoom={13}>
            <TileLayer
              attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMarkersList markers={this.state.markers} />
          </Map>
          <SweetAlert
            error
            title="Erreur"
            show={this.state.errorAlert}
            onConfirm={() => this.handleAlert("errorAlert", false)}
          >
            <p className="sweet-alert-text">{this.state.errorText}</p>
          </SweetAlert>
        </CardBody>
      </Card>
    );
  }
}
export default LivreursMap;
