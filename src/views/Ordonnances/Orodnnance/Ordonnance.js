import React, { Component } from "react";

import { Card, Row, Col } from "reactstrap";

import FirstSection from "./Premiere_section";
import SecondSection from "./Deuxieme_section";
import ThirdSection from "./Troisieme_section";
import ForthSection from "./Quatrieme_section";
import PartieDroiteHaut from "./PartieDroite_1";
import PartieDroiteBas from "./PartieDroite_2";


const commentaires_notes = [
  {
    id:1,
    type : "Commentaire interne", 
    commentaire : "Bon client", 
    image : require("../../../assets/img/portrait/small/avatar-s-2.jpg"), 
    nom : "Zongo meryouli"
  },
  {
    id:2,
    type : "Commentaire interne", 
    commentaire : "Un client deyer ki tfou", 
    image : require("../../../assets/img/portrait/small/avatar-s-1.jpg"), 
    nom : "Benssnan zakzouk"
  },
  {
    id:3,
    type : "Note envoyé au client", 
    commentaire : "4 dose de brygabaline", 
    image : require("../../../assets/img/portrait/small/avatar-s-3.jpg"), 
    nom : "Nadjet Boudouara"
  },
  {
    id:4,
    type : "Note envoyé au client", 
    commentaire : "4 dose de brygabaline", 
    image : require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    nom : "Nadjet Boudouara"
  },
  {
    id:5,
    type : "Commentaire interne", 
    commentaire : "Client ki soukour", 
    image : require("../../../assets/img/portrait/small/avatar-s-5.jpg"), 
    nom : "Djaluidji Boufon"
  },
]

class Ordonnance extends Component {
  state = {
    ordonnance: {},
  };
  componentDidMount() {
    this.setState({ ordonnance: this.props.location.state });
  }
  render() {
    return (
      <Row>
        <Col xl="9">
          <Card style={{ boxShadow: "none" }}>
            <Card className="mb-0">
              <FirstSection {...this.props} />
            </Card>
            <hr className="mb-0 mt-0" />
            <Card>
              <SecondSection 
              ordonnance ={this.props.location.state}
               />
            </Card>
            <hr />
            <Card>
              <ThirdSection ordonnance ={this.props.location.state} />
            </Card>
            <hr />
            <ForthSection 
            ordonnance={this.props.location.state}
            commentaires_notes = {commentaires_notes}
             />
          </Card>
        </Col>
        <Col xl="3">
          <Card>
            <PartieDroiteHaut />
          </Card>
          <Card style={{ boxShadow: "none" }}>
            <PartieDroiteBas />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Ordonnance;
