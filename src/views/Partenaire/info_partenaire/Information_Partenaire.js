import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Button,
  Col,
} from "reactstrap";
import { TrendingUp, DollarSign, User } from "react-feather";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import CommandesPartenaire from "./commandes_partenaire_table";
import { history } from "../../../history";
import {
  Check2,
  CircleFill,
  StarFill,
  TelephoneFill,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";

class Partenaire_Info extends React.Component {
  state = {
    row: this.props.location.state,
  };
  render() {
    // console.log(this.state.row);
    return (
      <Card>
        <a style={{top:"-50px",left:"10px",position:"absolute",zIndex:"100"}} onClick={()=>{history.goBack()}}>
        <ArrowLeftCircleFill size="40" className="primary"/>
        </a>
        <CardHeader>
          <CardTitle>Informations partenaire</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex flex-sm-row flex-column ">
            <div>
              <Media>
                <Media className="mr-1" left href="#">
                  <Media
                    style={{ borderRadius: "10px" }}
                    object
                    src={this.state.row.image}
                    alt="User"
                    height="100"
                    width="100"
                  />
                </Media>
                <Media body>
                  <h4>{this.state.row.name}</h4>
                  <p style={{ marginTop: "-10px" }}>
                    <small>{this.state.row.email}</small>
                  </p>
                  <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                    <Button.Ripple
                      tag="label"
                      className="mr-50 cursor-pointer"
                      color="primary"
                      onClick={() => {
                        history.push(
                          "/partenaires/modifier_Partenaire",
                          this.state.row
                        );
                      }}
                    >
                      Modifier
                      {/* <Input type="file" name="file" id="uploadImg" hidden /> */}
                    </Button.Ripple>
                    <Button.Ripple outline color="danger">
                      Supprimer
                    </Button.Ripple>
                  </div>
                </Media>
              </Media>
              <div className="d-flex flex-sm-row flex-column justify-content-start px-0 ">
                <Col lg="3" sm="3">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="warning"
                    
                    icon={
                      <div
                      style={{
                        marginRight:"auto",
                        marginLeft:"auto",
                        padding:"10px",
                        backgroundColor:"#EAE8FD",
                        borderRadius:"50%",
                        height:"50px",
                        width:"50px",
                      }}
                      >
                      <TrendingUp 
                      className="warning"
                      size={30} />
                      </div> }
                    stat="54"
                    statTitle="Ordonnances envoyées"
                  />
                </Col>
                <Col lg="3" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="success"
                    icon={
                      <div
                      style={{
                        marginRight:"auto",
                        marginLeft:"auto",
                        padding:"10px",
                        backgroundColor:"#DFF7EA",
                        borderRadius:"50%",
                        height:"50px",
                        width:"50px",
                      }}
                      >
                      <DollarSign 
                      className="success"
                      size={30} />
                      </div> }
                    stat={this.state.row.montant} //{`${this.state.row.revenue}`}
                    statTitle="Chiffre d'affaire"
                  />
                </Col>
                <Col lg="3" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="primary"
                    icon={
                      <div
                      style={{
                        marginRight:"auto",
                        marginLeft:"auto",
                        padding:"10px",
                        backgroundColor:"#FFF1E3",
                        borderRadius:"50%",
                        height:"50px",
                        width:"50px",
                      }}
                      >
                      <User 
                      className="primary"
                      size={30} />
                      </div> }
                    stat="90"
                    statTitle="Patients"
                  />
                </Col>
              </div>
            </div>
            <div className="d-flex flex-sm-row flex-column justify-content-start px-0 h-50 ">
              <div className="mr-2">
                <div className="d-flex">
                  <Check2 className="mr-1" size={14} />
                  <p className="font-weight-bold ">Status</p>
                </div>
                <div className="d-flex">
                  <StarFill className="mr-1" size={14} />
                  <p className="font-weight-bold ">Profession</p>
                </div>
                <div className="d-flex">
                  <CircleFill className="mr-1" size={14} />
                  <p className="font-weight-bold ">Ville</p>
                </div>
                <div className="d-flex">
                  <TelephoneFill className="mr-1" size={14} />
                  <p className="font-weight-bold ">Contact</p>
                </div>
              </div>
              <div>
                <p className=" font-small-3">Actif</p>
                <p className="">Khadem</p>
                <p className="">Saida</p>
                <p className="">0559863111</p>
              </div>
            </div>
          </div>
          <CommandesPartenaire />
        </CardBody>
      </Card>
    );
  }
}
export default Partenaire_Info;
