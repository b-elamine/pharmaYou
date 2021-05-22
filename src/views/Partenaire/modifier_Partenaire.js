import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Media,
  Button,
  Input,
}
from "reactstrap";
import { history } from "../../history";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import Flatpickr from "react-flatpickr";


const img = require("../../assets/img/portrait/small/avatar-s-2.jpg") //fake profile pic 

class modifier_Partenaire extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleDateChange = (date) => {
    let dateN = new Date(date);
    this.setState({
      startDate: new Date(
        dateN.getFullYear(),
        dateN.getMonth(),
        dateN.getDate(),
        this.state.startDate.getHours(),
        this.state.startDate.getMinutes(),
        this.state.startDate.getSeconds()
      )
    });
  };
    render(){
    return (
        <div>
          <a
          style={{
            top: "50px",
            left: "30px",
            position: "absolute",
            zIndex: "100",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowLeftCircleFill size="40" className="primary" />
        </a>
        <Card>
          <CardHeader><h1>Modifier Partenaire</h1></CardHeader>
                <Button
                    style={{
                        margin :"1.6rem",
                        paddingTop:"0.6rem",
                        paddingBottom:"0.6rem",
                        paddingRight:"1rem",
                        paddingLeft:"1rem",
                        fontSize:"14px",
                        width:"6.5rem",
                        marginBottom:"0.2rem"
                    }}
                    color="primary"
                    >
                        Profile 
                    </Button>
                <CardBody>
                    <div className="d-flex flex-sm-row ">
                        <div>
                            <h7 style={{color:"#3A3B3C"}} ><b>Le Nom et Prenom</b></h7>
                            <div>
                            <Button
                            style={{
                                marginTop:"1rem",
                                marginRight:"1rem",
                                paddingTop:"0.6rem",
                                paddingBottom:"0.6rem",
                                paddingRight:"0.8rem",
                                paddingLeft:"0.8rem"
                            }}
                            // size="8px"
                            color ="primary"

                            >
                                Changer
                            </Button>
                            <Button
                             style={{
                                marginTop:"1rem",
                                paddingTop:"0.6rem",
                                paddingBottom:"0.6rem",
                                paddingRight:"0.8rem",
                                paddingLeft:"0.8rem",
                                fontSize:"12px"
                            }}
                            outline
                            // size="8px"
                            >
                                Supprimer
                            </Button>
                            </div>
                        </div>
                    </div>
                    {/* test */}
                        <div
                        style={{
                            width:"100%",
                            marginTop:"4rem",
                            overflowX:"hidden"
                        }}>
                              <div className="d-flex flex-sm-row">
                                <div style={{marginRight:"20%", marginBottom:"1rem"}} >
                                <small>Num securité social</small>                               
                                <Input
                                style={{
                                    width:"21rem"
                                }}
                                placeholder="NSS"
                                />
                                </div>
                                <div>
                                <small>Date d'expiration</small> 
                                <Flatpickr
                                     id="Date"
                                     className="form-control"
                                     value={this.state.startDate}
                                     onChange={(date) => this.handleDateChange(date)}
                                     options={{ minDate: "today" }}
                                /> 
                                </div>                             
                            </div>
                            <Button
                            style={{
                                 marginTop:"1.5rem",
                                paddingTop:"0.6rem",
                                paddingBottom:"0.6rem",
                                paddingRight:"0.8rem",
                                paddingLeft:"0.8rem",
                                fontSize:"14px"
                            }}
                            color="primary"
                            >
                            Enregistrer
                            </Button>
                        </div>
                      

                </CardBody>
            </Card>
        </div>
    )}
}

export default modifier_Partenaire