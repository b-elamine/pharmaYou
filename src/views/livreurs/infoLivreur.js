import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Button,
  Col,
  //   Input,
} from "reactstrap";
import { Truck, Calendar, DollarSign,Check,Phone } from "react-feather";
import { FaRoad,FaRegBuilding,FaUniversity } from "react-icons/fa";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import HistoriquePeiment from "./livreurHistoriquePaiement";
import CommandesLivres from "./LivreurCommandesLivré";

class LivreursMap extends React.Component {
  state = {
    row: this.props.location.state,
  };
  render() {
    console.log(this.state.row);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Informations livreurs</CardTitle>
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
                    >
                      Modifier
                      {/* <Input type="file" name="file" id="uploadImg" hidden /> */}
                    </Button.Ripple>
                    {this.state.row.status === "Actif" ? (
                      <Button.Ripple outline color="danger">
                        Desactiver
                      </Button.Ripple>
                    ) : (
                      <Button.Ripple outline color="success">
                        Activer
                      </Button.Ripple>
                    )}
                  </div>
                </Media>
              </Media>
              <div
                style={{ marginTop: "20px", marginLeft: "40px" }}
                className="d-flex flex-sm-row flex-column justify-content-start px-0"
              >
                <Col lg="2" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="warning"
                    icon={<Truck className="warning" size={24} />}
                    stat={this.state.row.commandes_livrés}
                    statTitle="Commandes livres"
                  />
                </Col>
                <Col lg="2" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="success"
                    icon={<DollarSign className="success" size={24} />}
                    stat={`${this.state.row.revenue}`}
                    statTitle="Chiffre d'affaire"
                  />
                </Col>
                <Col lg="2" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="primary"
                    icon={<Calendar className="primary" size={24} />}
                    stat="90"
                    statTitle="Tournées effectués"
                  />
                </Col>
              </div>
            </div>

            {/* <div className="d-flex  flex-column justify-content-start px-0">
                      <Check/>
                      <FaRoad/>
                      <FaRegBuilding/>
                      <Phone/>
                      <FaUniversity/>
            </div> */}
          </div>
          <HistoriquePeiment />
          <CommandesLivres />
        </CardBody>
      </Card>
    );
  }
}
export default LivreursMap;
