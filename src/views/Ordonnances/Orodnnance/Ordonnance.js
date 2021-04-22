import React, { Component } from "react";

import { Card, Row, Col, CardTitle, } from "reactstrap";

import FirstSection from "./Premiere_section"
import SecondSection from "./Deuxieme_section"

import Troisieme_section from "./Troisieme_section"

class Ordonnance extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    return (
        <Row>
            <Col xl="10">
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
                {/* <CardTitle>Document Client</CardTitle> */}
                <Troisieme_section /> 
              </Card>
              <hr />
              <Card>Section 4</Card>
            </Card>
            </Col>
            <Col xl="2">
            <Card>
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
