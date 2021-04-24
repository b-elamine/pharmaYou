import React from "react";
import { Col, Row, CardBody, Badge, FormGroup, Label, Input } from "reactstrap";
import Logo from "../../../assets/img/logo/logo_pharmaYou.PNG";
import {
  Calendar2Check,
  ExclamationTriangleFill,
  HourglassSplit,
  Truck,
} from "react-bootstrap-icons";

class FirstSection extends React.Component {
  state = {
    ordonnance: {},
  };
  componentDidMount() {
    this.setState({
      ordonnance: this.props.location.state,
    });
  }
  render() {
    return (
      <Row>
        <Col xl="8">
          <CardBody className="d-flex pb-0">
            <img src={Logo} alt="PharmaYouLogo" height="25px" width="150px" />

            {this.state.ordonnance.status === "non_traité" ? (
              <Badge
                pill
                style={{ width: "150px", height: "25px", fontSize: "10px" }}
                color="light-danger pl-50 pr-50 text-wrap ml-50 text-left"
              >
                <ExclamationTriangleFill className="mr-50" size={14} />
                Non-traité
              </Badge>
            ) : this.state.ordonnance.status === "en_livraison" ? (
              <Badge
                pill
                style={{
                  width: "150px",
                  height: "25px",
                  fontSize: "10px",
                  color: "#180852",
                  backgroundColor: "#e9e8ee",
                  fontWeight: "bold",
                }}
                color="pl-50 pr-50 text-wrap ml-50 text-left"
              >
                <Truck className="mr-50" size={14} />
                En livraison
              </Badge>
            ) : this.state.ordonnance.status === "livré" ? (
              <Badge
                pill
                style={{
                  width: "100px",
                  height: "25px",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
                color="light-success pl-50 pr-50 text-wrap ml-50 text-left"
              >
                <Truck className="success mr-50" size={14} />
                Livré
              </Badge>
            ) : this.state.ordonnance.status === "en_attente" ? (
              <Badge
                pill
                style={{
                  width: "160px",
                  height: "25px",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
                color="light-primary pl-50 pr-50 text-wrap ml-50 text-left"
                className="text-primary "
              >
                <HourglassSplit className="mr-50" size={14} />
                En attente
              </Badge>
            ) : this.state.ordonnance.status === "tournée_assigné" ? (
              <Badge
                pill
                style={{
                  width: "180px",
                  height: "25px",
                  fontSize: "9px",
                  fontWeight: "bold",
                  backgroundImage: "linear-gradient(#ffd5c0, #fee6bf)",
                  color: "#fe5f29",
                }}
                color="pl-50 pr-50 text-wrap ml-50 text-left"
              >
                <Calendar2Check className="mr-50" size={14} />
                Tournée assigné
              </Badge>
            ) : null}

            {this.state.ordonnance.type === "particulier" ? (
              <Badge
                pill
                style={{
                  width: "150px",
                  height: "25px",
                  fontWeight: "900",
                  fontSize: "14px",
                }}
                className="bg-gradient-primary pl-50 pr-50  text-wrap ml-50"
              >
                Particulier
              </Badge>
            ) : this.state.ordonnance.type === "professionnel" ? (
              <Badge
                pill
                style={{
                  width: "140px",
                  height: "25px",
                  fontWeight: "900",
                  fontSize: "12px",
                }}
                color="light-success pl-50 pr-50  text-wrap ml-50"
              >
                Professionnel
              </Badge>
            ) : null}

            <Badge
              pill
              style={{ width: "150px", height: "30px" }}
              color="light-success pl-50 pr-50 text-wrap ml-50"
            >
              {this.state.ordonnance.origine}
            </Badge>
          </CardBody>

          <CardBody style={{ width: "250px" }}>
            <strong>Officine de traitement :</strong>
            <br></br>
            Pharma You, 8 rue de vaucouleurs 75011,Paris
          </CardBody>
        </Col>

        <Col className="pl-0 pt-0 ">
          <CardBody style={{ marginLeft: "0" }}>
            <FormGroup
              style={{
                marginBottom: "10px",
                width: "150px",
              }}
            >
              <Label for="readonlyInput">
                <strong>Référence</strong>
              </Label>
              <Input
                type="text"
                id="readonlyInput"
                readOnly
                value={`#${this.state.ordonnance.id}`}
                bsSize="sm"
              />
            </FormGroup>
            <FormGroup
              style={{
                marginBottom: "10px",
                width: "150px",
              }}
            >
              <Label for="readonlyInput">Date Commande</Label>
              <Input
                type="date"
                id="readonlyInput"
                readOnly
                value="2021-01-21"
                bsSize="sm"
              />
            </FormGroup>
            <Label for="readonlyInput">Source de la commande</Label>
            <FormGroup style={{ width: "150px", marginBottom: "10px" }}>
              <Input
                type="text"
                id="readonlyInput"
                readOnly
                value="App mobile"
                bsSize="sm"
              />
            </FormGroup>
          </CardBody> 
        </Col>
      </Row>
    );
  }
}

export default FirstSection;
