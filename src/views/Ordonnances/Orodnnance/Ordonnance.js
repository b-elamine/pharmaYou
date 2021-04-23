import React, { Component } from "react";

import { Card, Row, Col,  } from "reactstrap";

import FirstSection from "./Premiere_section"
import SecondSection from "./Deuxieme_section"
import ThirdSection from "./Troisieme_section"
import ForthSection from "./Quatrieme_section"
import PartieDroiteHaut from "./PartieDroite_1"
import PartieDroiteBas from "./PartieDroite_2"

class Ordonnance extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    return (
        <Row>
            <Col xl="9">
            <Card style={{ boxShadow: "none"}}>
              <Card className="mb-0">
                  <FirstSection />
              </Card>
              <hr  className="mb-0 mt-0"/>
              <Card>
                  <SecondSection />
              </Card>
              <hr />
              <Card>
                <ThirdSection /> 
              </Card>
              <hr />
              <ForthSection />
            </Card>
            </Col>
            <Col xl="3">
            <Card>
               <PartieDroiteHaut />
            </Card>
            <Card style={{boxShadow:"none"}}>
               <PartieDroiteBas />

            </Card>
            </Col>
        </Row>

      
    );
  }
}

export default Ordonnance;
