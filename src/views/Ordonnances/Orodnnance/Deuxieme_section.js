import React from "react";
import { Badge, CardBody, Col, Row } from "reactstrap";

import { PhoneCall, PhoneMissed } from "react-feather";

class FirstSection extends React.Component {
  state = {
    ordonnance: {
      patient :{
        nom: "", 
        prenom : "", 
        email : "", 
        num_tel : "", 
        address:"", 
      }
    },
  };
  componentDidMount() {
    this.setState({
      ordonnance: this.props.ordonnance,
    });
  }
  render() {
    return (
      <Row>
        <Col xl="6">
          <CardBody>
            <div style={{ width: "50%", marginBottom: "20px" }}>
              <span>Information, livraison et facturation</span>
            </div>
            <div style={{ height: "50%" }}>
              <h3 style={{ fontWeight: "900" }}>
                {this.state.ordonnance.patient.nom}{" "}
                {this.state.ordonnance.patient.prenom}
              </h3>
              <div className="font-small-1">
                <p style={{ marginBottom: "0" }}>
                  {" "}
                  {this.state.ordonnance.patient.address}{" "}
                </p>
                {/* <p style={{ marginBottom: "0" }}>Small Heath, 75012 paris</p> */}
                <div className="d-flex">
                  <p style={{ marginBottom: "0" }}>
                    {" "}
                    {this.state.ordonnance.patient.num_tel}{" "}
                  </p>

                  {this.state.ordonnance.patient.appeler ? (
                    <Badge
                      pill
                      color="light-success ml-25"
                      style={{ width: "180px", height: "25%" }}
                    >
                      <PhoneCall size={15} />
                      Le client veut étre appelé
                    </Badge>
                  ) : (
                    <Badge
                      pill
                      color="light-danger ml-25"
                      style={{ width: "190px", height: "25%" }}
                    >
                      <PhoneMissed size={15} />
                      Vous pouvez pas appelé le client
                    </Badge>
                  )}
                </div>
                <p style={{ marginBottom: "0" }}>
                  {this.state.ordonnance.patient.email}
                </p>
              </div>
            </div>
          </CardBody>
        </Col>

        <Col xl="4">
          <CardBody>
            <CardBody>
              <div className="mb-3 mt-0">
                <span>Facturation</span>
              </div>
              <div>
                <p>
                  Montant : <strong>En calcul</strong>
                </p>
                <p>CMU : {this.state.ordonnance.CMU ? "Oui" : "Non"} </p>
                <p>
                  Mutuelle: {this.state.ordonnance.muttuelle ? "Oui" : "Non"}{" "}
                </p>
              </div>
            </CardBody>
          </CardBody>
        </Col>
        
      </Row>
    );
  }
}

export default FirstSection;
