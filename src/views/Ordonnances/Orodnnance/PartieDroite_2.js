import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { ListUl, RecordCircleFill } from "react-bootstrap-icons";
import Image from "../../../assets/img/portrait/small/avatar-s-2.jpg";



const CommandeBlock = (props) => {
    return (
      <CardBody>
        <div className="user-info text-wrap ml-0 mb-50">
          <RecordCircleFill
            size={16}
            style={{
              color: props.icon_color,
              marginLeft: "0px",
            }}
          />
          <span
            title={props.commande_type}
            className="ml-1 font-weight-bold font-small-2 text-wrap"
          >
            {props.commande_type}
          </span>
        </div>
        <small className="ml-3 font-small-1"> {props.block_note} </small>
  
        <div className="d-flex mt-1 flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 ml-3">
          <div className="user-img ml-xl-0 ml-3">
            <img
              className="img-fluid rounded-circle"
              height="32"
              width="32"
              src={props.image_path}
              alt="hey"
            />
          </div>
          <div className="user-info text-truncate ml-xl-50 ml-0">
            <span className=" font-weight-bold d-block text-bold-500 text-truncate mb-0 font-small-2">
              {props.name}
            </span>
          </div>
        </div>
      </CardBody>
    );
  };

class PartieDroite_2 extends React.Component {
  render() {
    return (
      <Card>
        <CardTitle className="font-small-2 light-secondary text-left ml-2 mt-1 font-weight-bold">
          <ListUl className="mr-25" size={17} />
          Historique de la commande 
        </CardTitle>
        <CommandeBlock 
            icon_color ="#08d7ed"
            commande_type="Mise en attente approvisionnement"
            block_note="12h45, notif push ou email"
            image_path={Image}
            name="Zongo meryouli"
            />
        <CommandeBlock 
            icon_color ="#ceeece"
            commande_type="Note envoyer au client"
            block_note="12h45, notif push ou email"
            image_path={Image}
            name="Zongo meryouli"
            />
        <CommandeBlock 
            icon_color ="#fa680c"
            commande_type="Commentaire interne et tarif"
            block_note="12h45, notif push ou email"
            image_path={Image}
            name="Zongo meryouli"
            />
        <CommandeBlock 
            icon_color ="#ea5455"
            commande_type="Commande recue et non traité"
            block_note="12h45"
            image_path={Image}
            name="Zongo meryouli"
            />
      </Card>
    );
  }
}
export default PartieDroite_2;
