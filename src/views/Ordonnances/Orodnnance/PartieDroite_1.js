import React from "react";
import { Card, Button } from "reactstrap";
import { Truck, ExclamationSquare, X } from "react-bootstrap-icons";
import { RotateCw } from "react-feather";
import SideBar from "./SideBar1";

import {
  fetchEvents,
  handleSidebar,
  addEvent,
  handleSelectedEvent,
  updateEvent,
  updateDrag,
  updateResize,
} from "../../../redux/actions/calendar/index";

class PartieDroite_1 extends React.Component {
  render() {
    return (
      <Card>
        <Button
          size="sm"
          color="primary"
          style={{
            fontSize: "13px",
          }}
          className="ml-2 mr-2 mt-1 text-left font-weight-bold"
        >
          <Truck className="mr-75 text-left" size={17} />
          Rajouter dans une tournée
        </Button>

        <Button
          size="sm"
          color="light-info"
          style={{
            fontSize: "13px",
            backgroundColor: "#e8fbfd",
          }}
          className="  text-info ml-2 mr-2 mt-1 h-2  text-left font-weight-bold"
        >
          <RotateCw className="mr-75" size={17} />
          Attente approvisionnement
        </Button>

        <Button
          size="sm"
          color="light-info"
          style={{
            fontSize: "13px",
            backgroundColor: "#ea5455",
          }}
          className=" text-white ml-2 mr-2 mt-1 h-2 text-left font-weight-bold"
        >
          <ExclamationSquare className="mr-75" size={17} />
          Document manquant
        </Button>

        <Button
          size="sm"
          color="white"
          style={{
            fontSize: "13px",
            backgroundColor: "white",
            borderColor: "black",
          }}
          className=" border border-dark ml-2 mr-2 mt-1 h-2 text-left font-weight-bold"
        >
          <X className="mr-75" size={25} />
          annuler la commande
        </Button>
      </Card>
    );
  }
}

export default PartieDroite_1;
