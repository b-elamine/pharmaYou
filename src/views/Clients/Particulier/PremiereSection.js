import React from "react";
import {
  SignpostSplit,
  GeoFill,
  Building,
  Telephone,
  RecordCircleFill,
  ListUl,
} from "react-bootstrap-icons";
import { DollarSign, User } from "react-feather";
import { Badge, Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import * as Icon from "react-feather";

const CommentaireBlock = (props) => {
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
          title={props.block_type}
          className="ml-2 font-weight-bold font-medium-2"
        >
          {props.block_type}
        </span>
      </div>
      <small className="ml-3 font-small-2"> {props.block_note} </small>

      <div className="d-flex mt-1 flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 ml-3">
        <div className="user-img ml-xl-0 ml-3">
          <img
            className="img-fluid rounded-circle"
            height="32"
            width="32"
            src={props.image_path}
            alt="icon"
          />
        </div>
        <div className="user-info text-truncate ml-xl-50 ml-0">
          <span className=" font-weight-bold d-block text-bold-500 text-truncate mb-0 font-medium-2">
            {props.name}
          </span>
        </div>
      </div>
    </CardBody>
  );
};

class PremiereSection extends React.Component {
  state = {
    commentaires_notes: [],
  };
  componentDidMount() {
    this.setState({
      commentaires_notes: this.props.commentaires_notes,
    });
  }
  render() {
    return (
      <Card className="ml-1">
        <CardTitle className="font-large-1 mt-50">
          Informations client
        </CardTitle>
        <Row>
          <Col xl="5">
            <div className="ml-0">
              <h3 style={{ fontWeight: "900", marginBottom: "0px" }}>
                Mayra Foster
              </h3>
              <small className="mt-25 ml-0">Email@address.com</small>
            </div>

            <Button
              color="primary"
              className="mt-2 text-white float-left font-weight-bold mr-2 p-50  mb-2"
            >
              Modifier
            </Button>
            <Button
              color=""
              style={{
                //     borderColor: "red",
                //     float: "right",
                color: "red",
                width: "80px",
                height: "40px",
                //     fontSize: "8px",
                //     border: "1px solid red",
                //     marginRight:"20px",
                //     marginBottom:"0px"
              }}
              className=" mt-2 text-danger font-small-3 float-right  p-50  mb-2 border border-danger"

              //   className="mt-2 text-white float-right font-weight-bold mr-2 p-50  mb-2"
            >
              Supprimé
            </Button>
          </Col>
          <Col xl="3">
            <div className="d-flex">
              <GeoFill className="mr-1" size={14} />
              <p className="font-weight-bold ">Adresse</p>
            </div>
            <div className="d-flex">
              <SignpostSplit className="mr-1" size={14} />
              <p className="font-weight-bold ">Code postal</p>
            </div>
            <div className="d-flex">
              <Building className="mr-1" size={14} />
              <p className="font-weight-bold ">Ville</p>
            </div>
            <div className="d-flex">
              <Telephone className="mr-1" size={14} />
              <p className="font-weight-bold ">Contact</p>
            </div>
          </Col>
          <Col xl="4">
            <p className=" font-small-3">19 </p>
            <p className="">75000</p>
            <p className="">Paris</p>
            <p className="">0625148852</p>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col xl="4">
            <div className=" d-flex text-wrap">
              <Badge className="w-25 h-50  mr-1" color="light-warning">
                <Icon.TrendingUp className="mr-4 fonticon-wrap" size={32} />
              </Badge>
              <div>
                <p className="font-medium-2 mb-0 font-weight-bold">12</p>
                <small className="mt-0">Ordonnane du client</small>
              </div>
            </div>
          </Col>
          <Col xl="4">
            <div className=" d-flex text-wrap">
              <Badge className="w-25 h-50  mr-1" color="light-success">
                <DollarSign className="mr-4 fonticon-wrap" size={32} />
              </Badge>
              <div>
                <p className="font-medium-2 mb-0 font-weight-bold">630€</p>
                <small className="mt-0">Chiffre d'affaire</small>
              </div>
            </div>
          </Col>
          <Col xl="4">
            <div className=" d-flex text-wrap">
              <Badge color="light-primary" className="w-25 h-50 mr-1">
                <User className="mr-4 fonticon-wrap" size={32} />
              </Badge>
              <div>
                <p className="font-medium-2 mb-0 font-weight-bold">209</p>
                <small className="mt-0">Patient</small>
              </div>
            </div>
          </Col>

          <Card className="p-2 mt-5 text-dark text-left">
            <CardTitle className="font-medium-4 light-secondary text-left ml-2 mt-1 font-weight-bold">
              <ListUl className="mr-1" size={17} />
              Historique commentaire et note du patient
            </CardTitle>
            <div style={{height:"350px",overflowY:"scroll"}}>
              {this.state.commentaires_notes.length === 0 ? (
                <strong>Pas de commentaire pour l'instant</strong>
              ) : (
                this.state.commentaires_notes.map((comment) => {
                  const icon_color =
                    comment.type === "Commentaire interne"
                      ? "#fa680c"
                      : "#28c76f";
                  return (
                    <CommentaireBlock
                      key={comment.id}
                      icon_color={icon_color}
                      block_type={comment.type}
                      block_note={comment.commentaire}
                      image_path={comment.image}
                      name={comment.nom}
                    />
                  );
                })
              )}
            </div>
          </Card>
        </Row>
      </Card>
    );
  }
}

export default PremiereSection;
