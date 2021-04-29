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
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <Card>
        <CardTitle className="font-small-2 light-secondary text-left ml-2 mt-1 font-weight-bold">
          <ListUl className="mr-25" size={17} />
          Historique de la commande
        </CardTitle>
        {this.props.historique_commande.length === 0 ? (
          <strong>Pas de commentaire pour l'instant</strong>
        ) : (
          this.props.historique_commande.map((comment) => {
            const icon_color =
              comment.type === "Commentaire interne" ? "#fa680c" : "#28c76f";
            return (
              <CommandeBlock
                key={comment.id}
                icon_color={icon_color}
                commande_type={comment.type}
                block_note={comment.commentaire}
                image_path={comment.image}
                name={comment.nom}
              />
            );
          })
        )}
      </Card>
    );
  }
}
export default PartieDroite_2;
