import React from "react";
import { Row, Col, Card, CardTitle, Button, Badge } from "reactstrap";
import { PlusCircle } from "react-bootstrap-icons";

const CardDashed = (props) => {
  return (
    <Card>
      <Row>
        <Col
          xl="4"
          style={{
            backgroundColor: props.bg_color,
            height: "250px",
            width: "150px",
            borderRadius: "30px 0px 0px 30px",
            borderStyle: "dashed",
            borderColor: props.bg_color,
            color: "white",
            alignItems: "center",
            display: "flex",
            // textAlign:"left"
          }}
        >
          <p className="font-small-1 ml-0 mr-1">{props.label} </p>
        </Col>
        <Col
          xl="5"
          style={{
            height: "250px",
            width: "150px",
            borderRadius: "0px 30px 30px 0px",
            borderStyle: "dashed",
            borderLeftStyle: "none",
            borderColor: props.bg_color,
          }}
        >
          <Button
            outline
            className="mr-1"
            style={{
              width: "90px",
              backgroundColor: props.bg_color,
              color: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "0px",
              marginTop: "200px",
              fontSize: "6px",
            }}
          >
            <PlusCircle className="align-middle ml-0 mr-25" size={14} />
            Voir le fichier
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

class Troisieme_section extends React.Component {
  render() {
    return (
      <Card>
        <CardTitle className="ml-2">Documents Client</CardTitle>
        <Row>
          <Col className="ml-2">
            <CardDashed bg_color="#3397da" label="Ordonnance"></CardDashed>
            khass swaleh li ya3tihoumli faycal
          </Col>
          <Col>
            <CardDashed bg_color="#1aac1a" label="Carte Vital"></CardDashed>
            khass swaleh li ya3tihoumli faycal
          </Col>
          <Col>
            <CardDashed bg_color="#d01b47" label="Mutuelle"></CardDashed>
            khass swaleh li ya3tihoumli faycal
          </Col>
        </Row>
        <Badge color="light-success text-left">
          <h5 className="success ml-0 font-weight-bold">Note du client </h5>
          <p className="text-wrap text-lowercase">
            {this.props.ordonnance.patient.note
              ? this.props.ordonnance.patient.note
              : "Pas de note"}
          </p>
        </Badge>
      </Card>
    );
  }
}

export default Troisieme_section;
