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
import axios from "../../../axios";

class Partenaire_Info extends React.Component {
  state = {
    row: {},
  };
  fetcher_data = async (id_partenaire) => {
    try {
      const res = await axios.get(
        `users/${id_partenaire}?access_token=a&type=infirmier`
      );
      console.log(res.data);
      const partenaire = {
        name: `${res.data.nom} ${res.data.prenom}`,
        email: res.data.email,
        montant: res.data.chiffre_affaire,
        telephone: res.data.telephone,
        ville: res.data.ville_livraison ? res.data.ville_livraison : "Paris",
        status: res.data.is_active ? "active" : "inactive",
        type: res.data.type,
        nbr_ordo: res.data.n_commandes,
        commandes: res.data.commandes,
        n_patients: res.data.n_patients,
      };
      this.setState({
        row: partenaire,
      });
    } catch (err) {
      alert(err.message);
    }
  };
  componentDidMount() {
    const id_partenaire = this.props.match.params.id_partenaire;
    this.fetcher_data(id_partenaire);
  }
  render() {
    console.log(this.state.row.commandes);
    return (
      <Card>
        <a
          style={{
            top: "-50px",
            left: "10px",
            position: "absolute",
            zIndex: "100",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowLeftCircleFill size="40" className="primary" />
        </a>
        <CardHeader>
          <CardTitle>Informations partenaire</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex flex-sm-row flex-column ">
            <div>
              <Media>
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
                          marginRight: "auto",
                          marginLeft: "auto",
                          padding: "10px",
                          backgroundColor: "#EAE8FD",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        <TrendingUp className="warning" size={30} />
                      </div>
                    }
                    stat={this.state.row.nbr_ordo}
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
                          marginRight: "auto",
                          marginLeft: "auto",
                          padding: "10px",
                          backgroundColor: "#DFF7EA",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        <DollarSign className="success" size={30} />
                      </div>
                    }
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
                          marginRight: "auto",
                          marginLeft: "auto",
                          padding: "10px",
                          backgroundColor: "#FFF1E3",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        <User className="primary" size={30} />
                      </div>
                    }
                    stat={
                      this.state.row.n_patients ? this.state.row.n_patients : ""
                    }
                    statTitle="Patients"
                  />
                  {console.log(this.state.row.n_patients)}
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
                <p className=" font-small-3">{this.state.row.status}</p>
                <p className="">{this.state.row.type}</p>
                <p className="">{this.state.row.ville}</p>
                <p className="">{this.state.row.telephone}</p>
              </div>
            </div>
          </div>
          <CommandesPartenaire commandes={this.state.row.commandes} />
        </CardBody>
      </Card>
    );
  }
}
export default Partenaire_Info;
