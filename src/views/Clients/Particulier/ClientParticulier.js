import React from "react";
import { Card, Col, Row } from "reactstrap";
import FirstSection from "./PremiereSection";
import SecondSection from "./DeuxiemeSection";
import ThirdSection from "./TroisiemeSection";

const commentaires_notes = [
  {
    id: 1,
    type: "Commentaire interne",
    commentaire: "Bon client",
    image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    nom: "Zongo meryouli",
  },
  {
    id: 2,
    type: "Commentaire interne",
    commentaire: "Un client deyer ki tfou",
    image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
    nom: "Benssnan zakzouk",
  },
  {
    id: 3,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
    nom: "Nadjet Boudouara",
  },
  {
    id: 4,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    nom: "Nadjet Boudouara",
  },
  {
    id: 5,
    type: "Commentaire interne",
    commentaire: "Client ki soukour",
    image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
    nom: "Djaluidji Boufon",
  },
];

class Client_particulier extends React.Component {
  render() {
    console.log(this.props.location.state)
    return (
      <Card>
        <Row>
          <Col>
            <FirstSection client={this.props.location.state} commentaires_notes={commentaires_notes} />
          </Col>
          <Col>
            <SecondSection client={this.props.location.state} />
          </Col>
        </Row>
        <ThirdSection client={this.props.location.state} />
      </Card>
    );
  }
}

export default Client_particulier;
