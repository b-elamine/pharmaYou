import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  // Button,
  Col,
}
from "reactstrap";
import {DollarSign, Truck, User, } from "react-feather";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";


class Nv_Partenaire extends React.Component {
  state = {
    row: this.props.location.state,
  };
  render() {
    // console.log(this.state.row);
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
                    // src={}
                    alt="User"
                    height="100"
                    width="100"
                  />
                </Media>
                <Media body>
                  <h4>Abdou Berrezoug</h4>
                  <p style={{ marginTop: "-10px" }}>
                    <small>a.Berrezoug@esi-sba.dz</small>
                  </p>
                  <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                    {/* <Button.Ripple
                      tag="label"
                      className="mr-50 cursor-pointer"
                      color="primary"
                    >
                      Modifier
                      <Input type="file" name="file" id="uploadImg" hidden />
                    </Button.Ripple>
                    {this.state.row.status === "Actif" ? (
                      <Button.Ripple outline color="danger">
                        Desactiver
                      </Button.Ripple>
                       ) : (
                      <Button.Ripple outline color="success">
                        Activer
                      </Button.Ripple>
                    )} */}
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
                    stat="54.654$"
                    statTitle="Ordonnances envoyées"
                  />
                </Col>
                <Col lg="2" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="success"
                    icon={<DollarSign className="success" size={24} />}
                    stat="89.000$"             //{`${this.state.row.revenue}`}
                    statTitle="Chiffre d'affaire"
                  />
                </Col>
                <Col lg="2" sm="2">
                  <StatisticsCard
                    hideChart
                    iconLeft
                    bg_color="white"
                    iconBg="primary"
                    icon={<User className="primary" size={24} />}
                    stat="90"
                    statTitle="Patients"
                  />
                </Col>
              </div>
            </div>

          
          </div>
          {/* <HistoriquePeiment /> */}
          {/* <CommandesLivres /> */}
        </CardBody>
      </Card>
    );
  }
}
export default Nv_Partenaire;
