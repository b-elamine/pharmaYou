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
  StarFill,TelephoneFill
} from "react-bootstrap-icons";

class Partenaire_Info extends React.Component {
  state = {
    row: this.props.location.state,
  };
  render() {
    // console.log(this.state.row);
    return (
      <Card>
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
                    icon={<TrendingUp className="warning" size={28} />}
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
                    icon={<DollarSign className="success" size={28} />}
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
                    icon={<User className="primary" size={28} />}
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
