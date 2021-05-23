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
  Modal,
  ModalBody
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { PlusCircle, Send } from "react-feather";
import Flatpickr from "react-flatpickr";
import NumericInput from "react-numeric-input";
import { mobileStyle2 } from "../../forms/form-elements/number-input/InputStyles";
import Switch from "react-switch";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr2.scss";
import axios from "../../../axios";
// import pdf_test from "./10.1.1.695.7550.pdf";

import {pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

const ModaL = (props) => {
  return (
    <Modal
      isOpen={props.modal_state}
      toggle={props.toggle_modal}
      keyboard={true}
      centered={true}
      size="lg"
    >
      <ModalBody>
        {props.children}
      </ModalBody>
    </Modal>
  );
};

class Troisieme_section extends React.Component {
  state = {
    checked: false,
    nbrFois: 1,
    tousLes: 1,
    Date_exp: new Date(),
    modal: false,
    modal_file_path: "",
    modal_title: "",
    modal_file_type: null,
    file_ordonnance_loader: false,
    file_mutuelle_loader: false,
    file_carte_loader: false,
    pageNumber: 1,
  };
  myFormat = (num) => {
    return `${num} jours`;
  };
  handleChange = (checked) => {
    this.setState((prev_state, props) => {
      return {
        ordonnance: {
          ...prev_state.ordonnance,
          renouvelable: checked,
        },
      };
    });
  };

  get_ordonnance_file = async (file_type, path) => {
    try {
      this.setState({
        // file_ordonnance_loader pour le spinner qui se trouve en bas du button
        file_ordonnance_loader: file_type === "ordonnances" ? true : false,
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
        file_ordonnance_loader: false,
        file_carte_loader: false,
        file_mutuelle_loader: false,
      });
      if (err.message.includes("404")) {
        alert("fichier introuvable.");
      } else {
        console.log(err.message);
      }
    }
  };

  onDocumentLoadSuccess = ({ pageNumber }) => {
    this.setState({
      pageNumber: pageNumber,
    });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  componentDidUpdate() {
    if (!this.state.ordonnance) {
      this.setState({
        ordonnance: this.props.ordonnance,
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <Card className="m-0">
        <CardTitle className="ml-2">Documents du client</CardTitle>
        <Row>
          <Col className="ml-2">
            <CardDashed
              file_loader={this.state.file_ordonnance_loader}
              get_file={() => {
                this.setState({
                  modal_title: "Ordonnace",
                });
                this.get_ordonnance_file(
                  "ordonnances",
                  this.props.ordonnance.ordonnance
                    ? this.props.ordonnance.ordonnance.path
                    : null
                );
              }}
              bg_color="#3397da"
              label="Ordonnance"
              spinner_color="info"
              ordonnance={this.props.ordonnance}
              toggle_modal={this.toggleModal}
            ></CardDashed>
            <ModaL
              title={this.state.modal_title}
              toggle_modal={this.toggleModal}
              modal_state={this.state.modal}
            >
              <PerfectScrollbar
                options={{
                  wheelPropagation: false,
                }}
              >
                {this.state.modal_file_type === "image" ? (
                  <img
                    style={{ width: "100%" }}
                    src={this.state.modal_file_path}
                    alt="test"
                  />
                ) : (
                  <iframe
                    title="test"
                    src={this.state.modal_file_path}
                    width="100%"
                    height="700px"
                  ></iframe>
                )}
              </PerfectScrollbar>
            </ModaL>
            <div
              style={{ width: "90%" }}
              className="d-flex flex-sm-row flex-column align-items-center justify-content-between px-0 mb-75"
            >
              <span className="mr-50 text-wrap">Ordonnance renouvelable ?</span>
              <Switch
                onChange={(e)=> {
                  this.props.change_renouv(e)
                }}
                checked={this.props.renouvelable}
                offColor="#82868B"
                onColor="#3397da"
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
                value={true}
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
                value={this.props.nbr_renouv}
                mobile
                style={mobileStyle2}
                onChange={(e)=> {
                  this.props.change_nbr_renouv(e)
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
                value={this.props.renouvellement_intervalle}
                mobile
                style={mobileStyle2}
                onChange={(e)=> {
                  this.props.change_intervall(e)
                }}
                format={this.myFormat}
              />
            </div>
          </Col>
          <Col>
            <CardDashed
              file_loader={this.state.file_carte_loader}
              bg_color="#1aac1a"
              label="Carte Vital"
              spinner_color="warning"
              get_file={() => {
                this.setState({
                  modal_title: "vitales",
                });
                this.get_ordonnance_file(
                  "vitales",
                  this.props.ordonnance.vitale
                    ? this.props.ordonnance.vitale.path
                    : null
                );
              }}
              ordonnance={this.props.ordonnance}
            ></CardDashed>
            <div style={{ width: "90%" }}>
              <InputGroup>
                <Input
                  size="sm"
                  className="block-example border border-right-0 border-success"
                  placeholder="Numéro de sécurité sociale"
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
              file_loader={this.state.file_mutuelle_loader}
              bg_color="#d01b47"
              label="Mutuelle"
              get_file={() => {
                this.setState({
                  modal_title: "mutuelles",
                });
                this.get_ordonnance_file(
                  "mutuelles",
                  this.props.ordonnance.mutuelle
                    ? this.props.ordonnance.mutuelle.path
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
                value={this.props.Date_exp}
                onChange={(e)=> {
                  this.props.change_date_exp(e)
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
