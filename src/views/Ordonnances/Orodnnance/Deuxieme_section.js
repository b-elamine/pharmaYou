import React from "react";
import { Badge,  CardBody, Col, Row } from "reactstrap";
import { ExclamationTriangleFill } from "react-bootstrap-icons";

class FirstSection extends React.Component {
  render() {
    return (
      <Row>
        <Col xl="6">
          <CardBody>
            <div style={{ width: "50%",marginBottom:"20px" }}>
              <span>Information, livraison et facturation</span>
            </div>
            <div style={{ height: "50%" }}>
              <h3 style={{ fontWeight: "900" }}>Maya Foster</h3>
              <div className="font-small-1">
                <p style={{ marginBottom: "0" }}>5 place de la république</p>
                <p style={{ marginBottom: "0" }}>Small Heath, 75012 paris</p>
                <div className="d-flex">
                  <p style={{ marginBottom: "0" }}>06652589</p>
                  <Badge
                    pill
                    color="light-success ml-25"
                    style={{ width: "180px", height: "25%" }}
                  >
                    <ExclamationTriangleFill size={15} />
                    Le client veut étre appelé
                  </Badge>
                </div>
                <p style={{ marginBottom: "0" }}>email</p>
              </div>
            </div>
          </CardBody>
        </Col>

        <Col xl="4">
          <CardBody>
            {/* <div style={{ width: "auto" }}>
            </div> */}
            <CardBody>
              <div className="mb-3 mt-0">
              <span>Facturation</span>
              </div>
              <div>
              <p>Montant : <strong>En calcul</strong></p>
              <p>CMU : Oui</p>
              <p>Mutuelle: Oui</p>
              </div>

              </CardBody>
          </CardBody>
        </Col>
      </Row>
    );
  }
}

export default FirstSection;
