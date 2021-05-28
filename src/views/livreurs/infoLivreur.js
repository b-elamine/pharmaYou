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
  Badge,
  //   Input,
} from "reactstrap";
import { Truck, Calendar, DollarSign } from "react-feather";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import HistoriquePeiment from "./livreurHistoriquePaiement";
import CommandesLivres from "./LivreurCommandesLivré";
import {
  Building,
  Check2,
  Telephone,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import { FaRoad, FaUniversity, FaCar, FaMotorcycle } from "react-icons/fa";
import { history } from "../../history";
import axios from "../../axios";
// import PerfectScrollbar from "react-perfect-scrollbar";
import SweetAlert from "react-bootstrap-sweetalert";

class LivreurInfo extends React.Component {
  state = {
    row: [],
    errorAlert: false,
    errorText: "Vérifier votre connexion",
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  async componentDidMount() {
    const id_livreur = this.props.match.params.id_livreur;
    try {
      const response = await axios.get(
        `/livreurs/${id_livreur}?access_token=a`
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

  block = async (blocked) => {
    try {
      const response = await axios.patch(
        `/livreurs/${this.props.match.params.id_livreur}?access_token=a`,
        {
          is_blocked: blocked,
        }
      );
    } catch (err) {
      const error_message =
        err.message === "Network Error"
          ? "Une erreur s'est produite."
          : "Vérifiez votre connexion !";
      this.handleAlert("errorAlert", true, error_message);
    }
  };

  render() {
    console.log(this.state.row);
    return (
      <Card>
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
          <CardTitle>Informations livreurs</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="6">
              <Media>
                <Media className="mr-1" left href="#">
                  {/* <Media
                    style={{ borderRadius: "10px" }}
                    object
                    src={this.state.row.image}
                    alt="User"
                    height="100"
                    width="100"
                  /> */}
                </Media>
                <Media body>
                  <h4>{this.state.row.nom_complet}</h4>
                  <p style={{ marginTop: "-10px" }}>
                    <small>{this.state.row.email}</small>
                  </p>
                  <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                    <Button.Ripple
                      tag="label"
                      className="mr-50 cursor-pointer"
                      color="primary"
                      onClick={() => {
                        history.push(
                          `/livreur/modifier_livreur/${this.props.match.params.id_livreur}`
                        );
                      }}
                    >
                      Modifier
                    </Button.Ripple>
                    {!this.state.row.is_blocked ? (
                      <Button.Ripple
                        outline
                        color="danger"
                        onClick={() => {
                          this.block(1);
                        }}
                      >
                        Desactiver
                      </Button.Ripple>
                    ) : (
                      <Button.Ripple
                        outline
                        color="success"
                        onClick={() => {
                          this.block(0);
                        }}
                      >
                        Activer
                      </Button.Ripple>
                    )}
                  </div>
                </Media>
              </Media>
              <div
                // style={{ marginTop: "10px", marginLeft: "40px" }}
                className="d-flex flex-sm-row flex-column justify-content-start px-0"
              >
                <Col lg="4" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="warning"
                    icon={
                      <div
                        style={{
                          marginRight: "auto",
                          marginLeft: "auto",
                          padding: "10px",
                          backgroundColor: "#EAE8FD",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        <Truck className="warning" size={30} />
                      </div>
                    }
                    stat={this.state.row.n_commandes}
                    statTitle="Commandes livres"
                  />
                </Col>
                <Col lg="4" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="success"
                    icon={
                      <div
                        style={{
                          marginRight: "auto",
                          marginLeft: "auto",
                          padding: "10px",
                          backgroundColor: "#DFF7EA",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        <DollarSign className="success" size={30} />
                      </div>
                    }
                    stat={this.state.row.chiffre_affaire}
                    statTitle="Chiffre d'affaire"
                  />
                </Col>
                <Col lg="4" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="primary"
                    icon={
                      <div
                        style={{
                          marginRight: "auto",
                          marginLeft: "auto",
                          padding: "10px",
                          backgroundColor: "#FFF1E3",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        <Calendar className="primary" size={30} />
                      </div>
                    }
                    stat={
                      this.state.row.tournees
                        ? this.state.row.tournees.length
                        : 0
                    }
                    statTitle="Tournées effectués"
                  />
                </Col>
              </div>
              <div>
                <h3>Adresse</h3>
                <p>{this.state.row.adresse}</p>
              </div>
            </Col>

            <Col lg="6">
              <div className="d-flex flex-sm-row flex-column justify-content-end px-0">
              <Col xl="4" style={{ marginTop: "30px" }}>
                <div className="d-flex">
                  <Check2 className="mr-1" size={14} />
                  <p className="font-weight-bold ">Status</p>
                </div>
                <div className="d-flex">
                  <FaRoad className="mr-1" size={14} />
                  <p className="font-weight-bold ">Vehicule</p>
                </div>
                <div className="d-flex">
                  <Building className="mr-1" size={14} />
                  <p className="font-weight-bold ">Siret</p>
                </div>
                <div className="d-flex">
                  <Telephone className="mr-1" size={14} />
                  <p className="font-weight-bold ">Contact</p>
                </div>
                <div className="d-flex">
                  <FaUniversity className="mr-1" size={14} />
                  <p className="font-weight-bold ">Iban</p>
                </div>
              </Col>
              <Col xl="5" style={{ marginTop: "30px" }}>
                {/* <Badge
                className="text-truncate mb-1"
                color={
                  this.state.row.status === "Desactivé"
                    ? "light-danger"
                    : this.state.row.status === "Actif"
                    ? "light-success"
                    : "light-primary"
                }
                pill
              > */}
                {this.state.row.is_blocked ? <p>Désactivé</p> : <p>Actif</p>}
                {/* </Badge> */}

                <Badge
                  className="mb-1"
                  style={{ padding: "8" }}
                  color="warning"
                  pill
                >
                  {this.state.row.vehicule === "voiture" ? (
                    <FaCar size="14" style={{ marginRight: "5px" }} />
                  ) : (
                    <FaMotorcycle size="14" style={{ marginRight: "5px" }} />
                  )}
                  {this.state.row.vehicule}
                </Badge>
                <p className="">
                  {this.state.row.siret ? this.state.row.siret : "Indéfinie"}
                </p>
                <p className="">
                  {this.state.row.telephone
                    ? this.state.row.telephone
                    : "Indéfinie"}
                </p>
                <p className="">
                  {this.state.row.iban ? this.state.row.iban : "Indéfinie"}
                </p>
              </Col>
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
          <HistoriquePeiment data={this.state.row.payes} />
          <CommandesLivres data={this.state.row.commandes} />
        </CardBody>
      </Card>
    );
  }
}
export default LivreurInfo;
