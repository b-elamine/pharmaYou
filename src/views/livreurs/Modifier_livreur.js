import React from "react";
import { Card, CardHeader, CardBody, Button, Input } from "reactstrap";
import axios from "../../axios";
import { history } from "../../history";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import SweetAlert from "react-bootstrap-sweetalert";

class Modifier_livreur extends React.Component {
  state = {
    email: "",
    password: "",
    nom: "",
    prenom: "",
    telephone: 0,
    adresse: "",
    iban: 0,
    siret: 0,
    vehicule: "",
    errorAlert: false,
    errorText: "Vérifier votre cnnexion",
  };

  async componentDidMount() {
    const id_livreur = this.props.match.params.id_livreur;

    try {
      const response = await axios.get(
        `/livreurs/${id_livreur}?access_token=a`
      );
      this.setState({
        email: response.data.email,
        nom: response.data.nom,
        prenom: response.data.prenom,
        telephone: response.data.telephone,
        adresse: response.data.adresse,
        iban: response.data.iban,
        siret: response.data.siret,
        vehicule: response.data.vehicule,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  handelSubmit = async () => {
    let data = {};
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(this.state.email.toLowerCase())) {
      if (this.state.password === "") {
        data = {
          email: this.state.email,
          nom: this.state.nom,
          prenom: this.state.prenom,
          telephone: this.state.telephone,
          adresse: this.state.adresse,
          iban: this.state.iban,
          siret: this.state.siret,
          vehicule: this.state.vehicule,
        };
      } else {
        data = {
          email: this.state.email,
          password: this.state.password,
          nom: this.state.nom,
          prenom: this.state.prenom,
          telephone: this.state.telephone,
          adresse: this.state.adresse,
          iban: this.state.iban,
          siret: this.state.siret,
          vehicule: this.state.vehicule,
        };
      }
      try {
        const response = await axios.patch(
          `/livreurs/${this.props.match.params.id_livreur}?access_token=a`,
          data
        );
      } catch (err) {
        const error_message =
          err.message === "Network Error"
            ? "Une erreur s'est produite."
            : "Vérifiez votre connexion !";
        this.handleAlert("errorAlert", true, error_message);
      }
    } else {
      alert(`email "${this.state.email}" est invalide`);
    }
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };

  render() {
    return (
      <div>
        <a
          style={{
            top: "50px",
            left: "30px",
            position: "absolute",
            zIndex: "100",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowLeftCircleFill size="40" className="primary" />
        </a>
        <Card>
          <CardHeader>
            <h1>Modifier Livreur</h1>
          </CardHeader>
          {/* <Button
            style={{
              margin: "1.6rem",
              paddingTop: "0.6rem",
              paddingBottom: "0.6rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              fontSize: "14px",
              width: "6.5rem",
              marginBottom: "0.2rem",
            }}
            color="primary"
          >
            Profile
          </Button> */}
          <CardBody>
            <div className="d-flex flex-sm-row ">
              {/* <div>
                        <Media>
                            <Media className="mr-1" left href="#">
                            <Media
                                style={{ borderRadius: "10px" }}
                                object
                                src={img}
                                alt="User"
                                height="90"
                                width="90"
                            />
                            </Media>
                            </Media>
                        </div> */}
              <div>
                <h7 style={{ color: "#3A3B3C" }}>
                  <b>{this.state.nom + " " + this.state.prenom}</b>
                </h7>
                <div>
                  <Button
                    style={{
                      marginTop: "1rem",
                      marginRight: "1rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                      paddingRight: "0.8rem",
                      paddingLeft: "0.8rem",
                    }}
                    // size="8px"
                    color="primary"
                  >
                    Changer
                  </Button>
                  <Button
                    style={{
                      marginTop: "1rem",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                      paddingRight: "0.8rem",
                      paddingLeft: "0.8rem",
                      fontSize: "12px",
                    }}
                    outline
                    // size="8px"
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            </div>
            {/* test */}
            <div
              style={{
                width: "100%",
                marginTop: "4rem",
                overflowX: "hidden",
              }}
            >
              <div className="d-flex flex-sm-row">
                <div style={{ marginRight: "20%", marginBottom: "1rem" }}>
                  <small>Nom</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.nom}
                    onChange={(e) => {
                      this.setState({
                        nom: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <small>prénom</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.prenom}
                    onChange={(e) => {
                      this.setState({ prenom: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="d-flex flex-sm-row">
                <div style={{ marginRight: "20%", marginBottom: "1rem" }}>
                  <small>Email</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <small>Mot de pass</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    placeholder="Mot de passe"
                  />
                </div>
              </div>
              <div className="d-flex flex-sm-row">
                <div style={{ marginRight: "20%", marginBottom: "1rem" }}>
                  <small>Address</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.adresse}
                    onChange={(e) => {
                      this.setState({ adresse: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <small>Telephone</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.telephone}
                    onChange={(e) => {
                      this.setState({ telephone: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="d-flex flex-sm-row">
                <div style={{ marginRight: "20%", marginBottom: "1rem" }}>
                  <small>Iban</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.iban}
                    onChange={(e) => {
                      this.setState({ iban: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <small>Siret</small>
                  <Input
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.siret}
                    onChange={(e) => {
                      this.setState({ siret: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="d-flex flex-sm-row">
                <div style={{ marginRight: "20%" }}>
                  <small>Vehicule</small>
                  <Input
                    type="select"
                    style={{
                      width: "21rem",
                    }}
                    value={this.state.vehicule}
                    onChange={(e) => {
                      this.setState({ vehicule: e.target.value });
                    }}
                  >
                    <option id="1">voiture</option>
                    <option id="2">moto</option>
                  </Input>
                </div>
              </div>
              <Button
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "0.6rem",
                  paddingBottom: "0.6rem",
                  paddingRight: "0.8rem",
                  paddingLeft: "0.8rem",
                  fontSize: "14px",
                }}
                color="primary"
                onClick={this.handelSubmit}
              >
                Enregistrer
              </Button>
            </div>
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
      </div>
    );
  }
}

export default Modifier_livreur;
