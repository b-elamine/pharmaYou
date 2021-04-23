import React from "react";
import { Col, Row, CardBody, Badge, FormGroup, Label, Input } from "reactstrap";
import Logo from "../../../assets/img/logo/logo_pharmaYou.PNG"
import { ExclamationTriangleFill } from 'react-bootstrap-icons'

class FirstSection extends React.Component {
  render() {
    return (
      <Row>
        <Col xl="8">
          <CardBody className="d-flex pb-0">

            <img src={Logo} alt="PharmaYouLogo"  height="25px" width="150px"/>
            
            <Badge 
            pill 
            style={{width:"150px",height:"25px",fontSize:"8px"}}
            color="light-danger pl-50 pr-50 text-wrap ml-50">
              <ExclamationTriangleFill  size={17} />
              Non-traité
            </Badge>
            
            <Badge 
            pill 
            style={{width:"150px",height:"25px",fontWeight:"900",fontSize:"14px"}}
            className="bg-gradient-primary pl-50 pr-50  text-wrap ml-50">
              Particulier
            </Badge>
            <Badge 
            pill 
            style={{width:"150px",height:"30px"}}
            color="light-success pl-50 pr-50 text-wrap ml-50">
              Partenaire Infirmier
            </Badge>
          </CardBody>


          <CardBody style={{ width: "250px" }}>
            <strong>Officine de traitement :</strong>
            <br></br>
            Pharma You, 8 rue de vaucouleurs 75011,Paris
          </CardBody>
        </Col>

        <Col className="pl-0 pt-0 ">
          <CardBody 
          style={{marginLeft:"0"}}
          >
            <FormGroup
            style={{
              marginBottom: "10px",
              width:"150px",
            }}
            >
                <Label for="readonlyInput"><strong>Référence</strong></Label>
                <Input
                  type="text"
                  id="readonlyInput"
                  readOnly
                  value="#1852"
                  bsSize="sm"
                />
              </FormGroup>
            <FormGroup
            style={{
              marginBottom: "10px",
              width:"150px",
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
            <FormGroup 
            style={{width:"150px",marginBottom:"10px"}}
            >
                <Label for="readonlyInput">Source de la commande</Label>
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
