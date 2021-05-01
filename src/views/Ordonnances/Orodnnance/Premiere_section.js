import React from "react";
import {
  Col,
  Row,
  CardBody,
  CardHeader,
  Badge,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Logo from "../../../assets/img/logo/logo_pharmaYou.PNG";
import {
  Calendar2Check,
  Check2,
  Exclamation,
  ExclamationTriangleFill,
  HourglassSplit,
  Truck,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import {history} from "../../../history";

class FirstSection extends React.Component {
  state = {
    ordonnance: {},
  };
  componentDidMount() {
    // this.setState({
    //   ordonnance: this.props.location.state,
    // });
  }
  render() {
    return (
      <Row>
        <Col xl="8">
        <a style={{top:"-50px",left:"10px",position:"absolute",zIndex:"100"}} onClick={()=>{history.goBack()}}>
        <ArrowLeftCircleFill size="40" className="primary"/>
        </a>
          <CardBody className="d-flex pb-0">
            <img src={Logo} alt="PharmaYouLogo" height="25px" width="150px" />

            {this.props.ordonnance.status === "non-traité" ? (
              <Badge
                pill
                style={{
                  width: "140px",
                  height: "25px",
                  fontSize: "12px",
                }}
                color="light-danger pl-50 pr-50 text-wrap ml-50 text-left"
              >
                <ExclamationTriangleFill className="mr-50" size={14} />
                Non-traité
              </Badge>
            ) : this.props.ordonnance.status === "en_livraison" ? (
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
            ) : this.props.ordonnance.status === "livrée" ? (
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
                Livrée
              </Badge>
            ) : this.props.ordonnance.status === "en_attente" ? (
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
            ) : this.props.ordonnance.status === "tournée_assigné" ? (
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
            ) : this.props.ordonnance.status === "attente_approvisionnement" ? (
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
                En attente approvisionnement
              </Badge>
            ) : this.props.ordonnance.status === "validée" ? (
              <Badge
                pill
                style={{
                  width: "140px",
                  height: "25px",
                  fontSize: "12px",
                  // fontWeight: "bold",
                }}
                color="light-success pl-50 pr-50 text-wrap ml-50 text-left"
              >
                <Check2 className="success mr-50" size={16} />
                Validée
              </Badge>
            ) : this.props.ordonnance.status === "annulée" ? (
              <Badge
                pill
                style={{ width: "120px", height: "25px", fontSize: "12px" }}
                color="light-danger pl-50 pr-50 text-wrap ml-50 text-left"
              >
                <Exclamation className="mr-0" size={17} />
                Annulée
              </Badge>
            ) : this.props.ordonnance.status === "incomplet" ? (
              <Badge
                pill
                style={{
                  width: "130px",
                  height: "25px",
                  fontSize: "12px",
                }}
                color="light-primary pl-50 pr-50 text-wrap ml-50 text-left"
                className="text-primary "
              >
                <HourglassSplit className="mr-50" size={14} />
                Incomplet
              </Badge>
            ) : null}

            {this.props.ordonnance.type === "Particulier" ? (
              <Badge
                pill
                style={{
                  width: "150px",
                  height: "25px",
                  fontWeight: "900",
                  fontSize: "14px",
                }}
                className="bg-gradient-primary pl-50 mr-50  text-wrap ml-50"
              >
                Particulier
              </Badge>
            ) : this.props.ordonnance.type === "Professionnel" ? (
              <Badge
                pill
                style={{
                  width: "140px",
                  height: "25px",
                  fontWeight: "900",
                  fontSize: "12px",
                }}
                color="light-success pl-50 m  r-50  text-wrap ml-50"
              >
                Professionnel
              </Badge>
            ) : null}

            {this.props.ordonnance.origine === "infirmier" ? (
              <Badge
                color="light-success text-wrap text-bold-500 mb-0"
                style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
                pill
              >
                Infirmier
              </Badge>
            ) : this.props.ordonnance.origine === "medadom" ? (
              <Badge
                color="light-success text-wrap text-bold-500 mb-0"
                style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
                pill
              >
                Infirmier MEDADOM
              </Badge>
            ) : this.props.ordonnance.origine === "web" ? (
              <Badge
                color="light-success text-wrap text-bold-500 mb-0"
                style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
                pill
              >
                Infirmier WEB
              </Badge>
            ) : this.props.ordonnance.origine === "appli" ? (
              <Badge
                color="light-success text-wrap text-bold-500 mb-0"
                style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
                pill
              >
                Infirmier Appli
              </Badge>
            ) : null}
          </CardBody>

          <CardBody style={{ width: "250px" }} className="font-medium-1">
            <strong className="font-medium-2">Officine de traitement :</strong>
            <br></br>
            {this.props.ordonnance.adresse_livraison}
            {this.props.ordonnance.code},{" "}
            {this.props.ordonnance.ville_livraison}
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
                className="font-weight-bold font-medium-1"
                type="text"
                id="readonlyInput"
                readOnly
                value={`#${this.props.ordonnance.id}`}
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
                className="font-medium-1"
                type="text"
                id="readonlyInput"
                readOnly
                value={new Date(1618964469).toISOString().split("T")[0]}
                bsSize="sm"
              />
            </FormGroup>
            <Label for="readonlyInput">Source de la commande</Label>
            <FormGroup style={{ width: "150px", marginBottom: "10px" }}>
              <Input
                className="font-medium-1"
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
