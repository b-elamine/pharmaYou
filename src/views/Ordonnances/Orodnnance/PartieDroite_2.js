import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { ListUl, RecordCircleFill } from "react-bootstrap-icons";

const CommandeBlock = (props) => {
  return (
    <CardBody>
      <div className="user-info text-truncate ml-xl-50 ml-0 mb-50">
        <RecordCircleFill
          size={16}
          style={{
            color: props.icon_color,
            marginLeft: "0px",
          }}
        />
        <span
          title={props.block_note}
          className="ml-2 font-weight-bold font-medium-2"
        >
          {props.block_title}
        </span>
      </div>
      <small className="ml-3 font-small-2"> {props.block_note} </small>

      {/* <div className="d-flex mt-1 flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 ml-3">
        <div className="user-info text-truncate ml-xl-50 ml-0">
          <span className=" font-weight-bold d-block text-truncate mb-0 font-medium-1">
            {props.name}
          </span>
        </div>
      </div> */}
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
        {this.props.historique_commande.length === 0 ? (
          <strong className="ml-2">Pas de commentaire pour l'instant</strong>
        ) : (
          this.props.historique_commande.map((comment) => {
            return (
              <CommandeBlock
                key={comment.id}
                icon_color={comment.color}
                block_title={comment.title}
                block_note={comment.text}
                name="admin name"
              />
            );
          })
        )}
      </Card>
    );
  }
}
export default PartieDroite_2;
