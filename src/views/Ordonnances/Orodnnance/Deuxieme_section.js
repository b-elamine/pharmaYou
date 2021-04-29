import React from "react";
import { Badge, CardBody, Col, Row } from "reactstrap";

import { PhoneCall, PhoneMissed } from "react-feather";

class SecondSection extends React.Component {
  state = {
    ordonnance: {
      patient: {
        nom: "",
        prenom: "",
        email: "",
        num_tel: "",
        address: "",
      },
    },
  };
  componentDidMount() {
    this.setState({
      ordonnance: this.props.ordonnance,
    });
  }
  render() {
    console.log(this.props.ordonnance.patient);
    return (
      <Row>
        <Col xl="6">
          <CardBody>
            <div style={{ width: "50%", marginBottom: "20px", fontSize:"17px",fontWeight:"bold" }}>
              <span>Information, livraison et facturation</span>
            </div>
            <div style={{ height: "50%" }}>
              <h3 style={{ fontWeight: "900" }}>
                {this.props.ordonnance.patient.nom}{" "}
                {this.props.ordonnance.patient.prenom}
              </h3>
              <div className="font-medium-1">
                <p style={{ marginBottom: "0"}}>
                  {" "}
                  {this.props.ordonnance.patient.address}{" "}
                </p>
                <p style={{ marginBottom: "0"}}>
                  {" "}
                  {this.props.ordonnance.ville}{" "}
                </p>
                <div className="d-flex mt-50">
                  <p style={{ marginBottom: "0",fontSize:"15px"}}>
                    {" "}
                    {this.props.ordonnance.patient.num_tel}{" "}
                  </p>

                  {this.props.ordonnance.patient.appeler ? (
                    <Badge
                      pill
                      color="light-success ml-25 "
                      style={{
                        width: "250px",
                        height: "25%",
                        fontSize: "13px",
                      }}
                    >
                      <PhoneCall className="mr-25" size={15} />
                      Le client veut étre appelé
                    </Badge>
                  ) : (
                    <Badge
                      pill
                      color="ml-25 text-wrap"
                      style={{
                        width: "250px",
                        height: "25%",
                        fontSize:"12px",
                        color:"black"
                      }}
                    >
                      <PhoneMissed className="mr-25" size={15} />
                      Vous pouvez pas appelé le client
                    </Badge>
                  )}
                </div>
                <p style={{ marginBottom: "0" , marginTop:"10px" }}>
                  {this.props.ordonnance.patient.email}
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
                <p>CMU : {this.props.ordonnance.CMU ? "Oui" : "Non"} </p>
                <p>
                  Mutuelle: {this.props.ordonnance.muttuelle ? "Oui" : "Non"}{" "}
                </p>
              </div>
            </CardBody>
          </CardBody>
        </Col>
      </Row>
    );
  }
}

export default SecondSection;
