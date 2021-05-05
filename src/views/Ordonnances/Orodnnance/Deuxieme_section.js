import React from "react";
import { Badge, CardBody, Col, Row } from "reactstrap";

import { PhoneCall } from "react-feather";

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
                  <p  style={{ marginBottom: "0",fontSize:"15px",cursor:"pointer"}}>
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
                  ) : null}
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
                  Montant : {this.props.ordonnance.montant ? this.props.ordonnance.montant + "€" : "En calcul"}
                </p>
                <p>CMU : {this.props.ordonnance.CMU ? "Oui" : "Non"} </p>
                <p>
                  Mutuelle: {this.props.ordonnance.mutuelle ? "Oui" : "Non"}{" "}
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
