import React from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  Button,
  Badge,
  InputGroup,
  Input,
  InputGroupAddon,
  Label,
  Spinner,
} from "reactstrap";
import { PlusCircle, Send } from "react-feather";
import Flatpickr from "react-flatpickr";
import NumericInput from "react-numeric-input";
import { mobileStyle2 } from "../../forms/form-elements/number-input/InputStyles";
import Switch from "react-switch";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr2.scss";
import axios from "../../../axios";

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
            onClick={props.get_file}
          >
            <PlusCircle className="align-middle ml-0 mr-25" size={14} />
            Voir le fichier
          </Button>
          {props.file_loader ? (
            <Spinner className="ml-2" color="info" size="lg" />
          ) : null}
        </Col>
      </Row>
    </Card>
  );
};

class Troisieme_section extends React.Component {
  state = {
    checked: false,
    nbrFois: 1,
    tousLes: 1,
    Date: new Date(),
    file_ordonnance_loader: false,
  };
  myFormat = (num) => {
    return `${num} jours`;
  };
  handleChange = (checked) => {
    this.setState({ checked });
  };

  get_ordonnance_file = async (path) => {
    try {
      this.setState({
        file_ordonnance_loader: true,
      });
      const response = await axios.get(
        `/ordonnances/${path}/original?access_token=a`
      );
      const file = new Blob([response.data], {
        type: this.props.ordonnance.ordonnance.mime_type,
      });
      const fileURL = URL.createObjectURL(file);
      this.setState({
        file_ordonnance_loader: false,
      });
      window.open(fileURL);
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    console.log(this.props.ordonnance);
    return (
      <Card>
        <CardTitle className="ml-2">Documents Client</CardTitle>
        <Row>
          <Col className="ml-2">
            <CardDashed
              file_loader={this.state.file_ordonnance_loader}
              get_file={() => {
                this.get_ordonnance_file(this.props.ordonnance.ordonnance.path);
              }}
              bg_color="#3397da"
              label="Ordonnance"
              ordonnance={this.props.ordonnance}
            ></CardDashed>
            <div
              style={{ width: "90%" }}
              className="d-flex flex-sm-row flex-column align-items-center justify-content-between px-0 mb-75"
            >
              <span className="mr-50 text-wrap">Ordonance renouvlable?</span>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                offColor="#82868B"
                onColor="#3397da"
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
              />
            </div>
            <div
              style={{ width: "90%" }}
              className="d-flex flex-sm-row flex-column align-items-center justify-content-between px-0 mb-75"
            >
              <span className="font-small-2 text-wrap mr-50">
                Combien de fois ?
              </span>
              <NumericInput
                min={1}
                value={this.state.nbrFois}
                mobile
                style={mobileStyle2}
                onChange={(e) => {
                  this.setState({ nbrFois: e });
                }}
              />
            </div>
            <div
              style={{ width: "90%" }}
              className="d-flex flex-sm-row flex-column align-items-center justify-content-between px-0 mb-75"
            >
              <span className="font-small-2 text-wrap mr-50">Tous les</span>
              <NumericInput
                min={1}
                value={this.state.tousLes}
                mobile
                style={mobileStyle2}
                onChange={(e) => {
                  this.setState({ tousLes: e });
                }}
                format={this.myFormat}
              />
            </div>
          </Col>
          <Col>
            <CardDashed
              bg_color="#1aac1a"
              label="Carte Vital"
              ordonnance={this.props.ordonnance}
            ></CardDashed>
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
            <CardDashed
              bg_color="#d01b47"
              label="Mutuelle"
              ordonnance={this.props.ordonnance}
            ></CardDashed>
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
        <Badge color="light-success text-left mt-3">
          <h5 className="success ml-0 font-weight-bold">Note du client </h5>
          <p className="text-wrap text-lowercase">
            {this.props.ordonnance.patient.note
              ? this.props.ordonnance.patient.note
              : "Pas de note."}
          </p>
        </Badge>
      </Card>
    );
  }
}

export default Troisieme_section;
