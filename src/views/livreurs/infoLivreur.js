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
import { Truck, Calendar, DollarSign } from "react-feather";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";

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
        </CardBody>
      </Card>
    );
  }
}
export default LivreursMap;
