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
  Spinner,
  ModalBody,
  Modal,
} from "reactstrap";
import { PlusCircle, Send } from "react-feather";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr2.scss";

import axios from "../../../axios";


import PerfectScrollbar from "react-perfect-scrollbar";




const ModaL = (props) => {
  return (
    <Modal
      isOpen={props.modal_state}
      toggle={props.toggle_modal}
      keyboard={true}
      centered={true}
    >
      <ModalBody>{props.children}</ModalBody>
    </Modal>
  );
};

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
            <Spinner className="ml-2" color={props.spinner_color} size="lg" />
          ) : null}
        </Col>
      </Row>
    </Card>
  );
};

class SecondSection extends React.Component {
  state = {
    Date: new Date(),
    file_carte_loader: false,
    file_mutuelle_loader: false,
    modal_file_type: null,
    modal_file_path:"",
    modal: false,
  };
  get_file = async (file_type, path) => {
    try {
      this.setState({
        // file_ordonnance_loader pour le spinner qui se trouve en bas du button
        file_carte_loader: file_type === "vitales" ? true : false,
        file_mutuelle_loader: file_type === "mutuelles" ? true : false,
      });
      if (path === null) {
        this.setState({
          file_ordonnance_loader: false,
          file_mutuelle_loader: false,
          file_carte_loader: false,
        });
        return alert("Pas de document.");
      }
      const response = await axios.get(
        `/${file_type}/${path}/original?access_token=a`
      );
      let modal_file_type;
      if (response.headers["content-type"].includes("image")) {
        modal_file_type = "image";
      } else {
        modal_file_type = "pdf";
      }
      this.setState((prevState) => ({
        modal: !prevState.modal,
        modal_file_path: `https://ordo.pharmayou.fr:3003/${file_type}/${path}/original?access_token=a`,
        file_ordonnance_loader: false,
        file_carte_loader: false,
        file_mutuelle_loader: false,
        modal_file_type: modal_file_type,
      }));
    } catch (err) {
      this.setState({
        file_carte_loader: false,
        file_mutuelle_loader: false,
      });
      if (err.message.includes("404")) {
        alert("fichier introuvable.");
      } else {
        alert(err.message);
      }
    }
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <Card>
        <CardTitle className="font-large-1 mt-50">
          Document du patient
        </CardTitle>
        <Row>
          <Col>
            <CardDashed
              bg_color="#1aac1a"
              label="Carte Vital"
              file_loader={this.state.file_carte_loader}
              get_file={() => {
                this.get_file(
                  "vitales",
                  this.props.client.client
                    ? this.props.client.client.path
                    : null
                );
              }}
              toggle_modal={this.toggleModal}
              spinner_color="warning"
            ></CardDashed>

            <ModaL
              title={this.state.modal_title}
              toggle_modal={this.toggleModal}
              modal_state={this.state.modal}
            >
               {this.state.modal_file_type === "image" ? (
                <img
                  style={{ width: "90%" }}
                  src={this.state.modal_file_path}
                  alt="test"
                />
              ) : (
                <PerfectScrollbar
                  options={{
                    wheelPropagation: false,
                  }}
                >
                  <iframe
                    title="test"
                    src={this.state.modal_file_path}
                    width="90%"
                    height="100%"
                  ></iframe>
                </PerfectScrollbar>
              )}
            </ModaL>
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
              get_file={() => {
                this.get_file(
                  "mutuelles",
                  this.props.client.client
                    ? this.props.client.client.path
                    : null
                );
              }}
              spinner_color="danger"
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
      </Card>
    );
  }
}

export default SecondSection;
