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


const img = require("../../assets/img/portrait/small/avatar-s-2.jpg") //fake profile pic 

class Nouveau_Partenaire extends React.Component {
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
                        <Media>
                            <Media className="mr-1" left href="#">
                            <Media
                                style={{ borderRadius: "10px" }}
                                object
                                src={img}
                                alt="User"
                                height="90"
                                width="90"
                            />
                            </Media>
                            </Media>
                        </div>
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
                                <small>Nom et prénom</small>                               
                                <Input
                                style={{
                                    width:"21rem"
                                }}
                                placeholder="Le nom et prénom"
                                />
                                </div>
                                <div>
                                <small>Numéro</small> 
                                <Input
                                style={{
                                    width:"21rem"
                                }}
                                placeholder="Num"
                                />  
                                </div>                             
                            </div>
                            <div className="d-flex flex-sm-row">
                                <div style={{marginRight:"20%"}} >
                                <small>Profession</small>                               
                                <Input
                                type="select"
                                style={{
                                    width:"21rem"
                                }}
                                
                                >
                                <option>infermier</option>
                                <option>docteur</option>
                                <option>app externe</option>
                                </Input>
                                </div>
                                <div>
                                <small>E-mail</small> 
                                <Input
                                style={{
                                    width:"21rem"
                                }}
                                placeholder="E-mail"
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
                        <div
                        style={{
                            marginTop:"5rem"
                        }}
                        >
                            <Input
                            style={{
                                height:"18rem",
                            }}
                            type="textarea"
                            />
                        </div>

                </CardBody>
            </Card>
        </div>
    )}
}

export default Nouveau_Partenaire