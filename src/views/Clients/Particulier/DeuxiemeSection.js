import React from "react";
import {
  Button,
  Card,
  Col,
  InputGroup,
  Row,
  Input,
  InputGroupAddon,
  Label,
  CardTitle,
} from "reactstrap";
import { PlusCircle, Send } from "react-feather";
import Flatpickr from "react-flatpickr";




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

class SecondSection extends React.Component {
  state = {
    Date: new Date(),
  };
  render() {
    return (
      <Card>
        <CardTitle className="font-large-1 mt-50">
          Document du patient
        </CardTitle>
        <Row>
          <Col>
            <CardDashed bg_color="#1aac1a" label="Carte Vital"></CardDashed>
            <div style={{ width: "90%" }}>
              <InputGroup>
                <Input
                  size="sm"
                  className="block-example border border-right-0 border-success"
                  placeholder="Numero de sécurité social"
                />
                <InputGroupAddon addonType="append">
                  <Button.Ripple outline color="success" size="sm">
                    <Send size={20} />
                  </Button.Ripple>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </Col>
          <Col>
            <CardDashed bg_color="#d01b47" label="Mutuelle"></CardDashed>

            <div style={{ width: "90%", marginTop: "-20px" }}>
              <Label>Date d'expiration</Label>
              <Flatpickr
                id="Date"
                className="form-control"
                value={this.state.Date}
                onChange={(date) => {
                  this.setState({ Date: date });
                }}
                options={{ minDate: "today" }}
              />
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default SecondSection;
