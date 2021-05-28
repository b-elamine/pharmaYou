import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Button,
  Col,
  Row,
} from "reactstrap";
import {
  Building,
  Telephone,
  ArrowLeftCircleFill,
  GeoAlt,
  Calendar3Event,
} from "react-bootstrap-icons";
import { FaUniversity } from "react-icons/fa";
import { history } from "../../history";
import axios from "../../axios";
import SweetAlert from "react-bootstrap-sweetalert";

class SignUpProcedureDetails extends React.Component {
  state = {
    row: [],
    errorAlert: false,
    errorText: "Vérifier votre cnnexion",
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  async componentDidMount() {
    const id_livreur = this.props.match.params.id_livreur;
    try {
      const response = await axios.get(
        `/signup_procedures_livreurs/${id_livreur}?access_token=a`
      );
      this.setState({
        row: response.data,
      });
    } catch (err) {
      const error_message =
        err.message === "Network Error"
          ? "Une erreur s'est produite lors de la récupération des données."
          : "Vérifiez votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
  }

  handleAccept = async () => {
    try {
      // const response = await axios({
      //   method: "post",
      //   url: `/signup_procedures_livreurs/${this.state.row.signup_procedure_livreurs_id}/accept`,
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   },
      // });
      const response = await axios.post(
        `/signup_procedures_livreurs/${this.state.row.signup_procedure_livreurs_id}/accept`,
      );
      console.log(response);
    } catch (err) {
      const error_message =
        err.message === "Network Error"
          ? "Une erreur s'est produite lors de l'ajout du livreur."
          : "Vérifiez votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
  };

  render() {
    return (
      <Card style={{ paddingBottom: "60px" }}>
        <a
          style={{
            top: "-50px",
            position: "absolute",
            zIndex: "100",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowLeftCircleFill size="40" className="primary" />
        </a>
        <CardHeader>
          <CardTitle style={{ marginBottom: "60px" }}>
            <h3>
              Demande du livreur #{this.state.row.signup_procedure_livreurs_id}
            </h3>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="6">
              <Media>
                <Media className="mr-1" left href="#"></Media>
                <Media body>
                  <h4>{this.state.row.nom_complet}</h4>
                  <p>
                    <small>{this.state.row.email}</small>
                  </p>
                  <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                    <Button.Ripple
                      outline
                      color="success"
                      onClick={this.handleAccept}
                    >
                      Accepter
                    </Button.Ripple>
                  </div>
                </Media>
              </Media>
            </Col>

            <Col lg="4">
              <div className="d-flex flex-sm-row flex-column justify-content-between px-0">
                <div className="d-flex">
                  <Building className="mr-1" size={14} />
                  <p className="font-weight-bold ">Siret</p>
                </div>
                <p className="">
                  {this.state.row.siret ? this.state.row.siret : "Indéfinie"}
                </p>
              </div>
              <div className="d-flex flex-sm-row flex-column justify-content-between px-0">
                <div className="d-flex">
                  <Telephone className="mr-1" size={14} />
                  <p className="font-weight-bold ">Contact</p>
                </div>
                <p className="">
                  {this.state.row.telephone
                    ? this.state.row.telephone
                    : "Indéfinie"}
                </p>
              </div>
              <div className="d-flex flex-sm-row flex-column justify-content-between px-0">
                <div className="d-flex">
                  <FaUniversity className="mr-1" size={14} />
                  <p className="font-weight-bold ">Iban</p>
                </div>
                <p className="">
                  {this.state.row.iban ? this.state.row.iban : "Indéfinie"}
                </p>
              </div>
              <div className="d-flex flex-sm-row flex-column justify-content-between px-0">
                <div className="d-flex">
                  <GeoAlt className="mr-1" size={14} />
                  <p className="font-weight-bold ">Adresse</p>
                </div>
                <p className="">
                  {this.state.row.adresse
                    ? this.state.row.adresse
                    : "Indéfinie"}
                </p>
              </div>
              <div className="d-flex flex-sm-row flex-column justify-content-between px-0">
                <div className="d-flex">
                  <Calendar3Event className="mr-1" size={14} />
                  <p className="font-weight-bold ">Date de creation</p>
                </div>
                <p className="">
                  {this.state.row.created_at
                    ? this.state.row.created_at
                    : "Indéfinie"}
                </p>
              </div>
            </Col>
          </Row>
          <SweetAlert
            error
            title="Erreur"
            show={this.state.errorAlert}
            onConfirm={() => this.handleAlert("errorAlert", false)}
          >
            <p className="sweet-alert-text">{this.state.errorText}</p>
          </SweetAlert>
        </CardBody>
      </Card>
    );
  }
}
export default SignUpProcedureDetails;
