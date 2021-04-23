import React, { Component } from "react";

import { Card, Row, Col,  } from "reactstrap";

import FirstSection from "./Premiere_section"
import SecondSection from "./Deuxieme_section"
import ThirdSection from "./Troisieme_section"
import ForthSection from "./Quatrieme_section"
import PartieDroiteHaut from "./PartieDroite_1"

class Ordonnance extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    return (
        <Row>
            <Col xl="8">
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
            <Col xl="4">
            <Card>
               <PartieDroiteHaut />
            </Card>
            <Card style={{boxShadow:"none"}}>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>

            </Card>
            </Col>
        </Row>

      //   <Container style={{ width: "60%",backgroundColor:"white" }}>
      //     <Row xs='4'>
      //       <Col xl="2" style={{ padding: "20px", marginLeft: "20px" }}>
      //         <p>Badge</p>
      //       </Col>
      //       <Col xl="2" style={{ padding: "20px" }}>
      //         <p>Badge</p>
      //       </Col>
      //       <Col xl="2" style={{ padding: "20px" }}>
      //         <p>Badge</p>
      //       </Col>
      //       <Col xl="2" style={{ padding: "20px" }}>
      //         <p>Badge</p>
      //       </Col>
      //     </Row>
      /* <Row xs="3">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col xs="6">Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="1" sm="2" md="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row> */
      //   </Container>
    );
  }
}

export default Ordonnance;
