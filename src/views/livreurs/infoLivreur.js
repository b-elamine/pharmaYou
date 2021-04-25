import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Button,
  Col,
  Row,
  Badge,
  //   Input,
} from "reactstrap";
import { Truck, Calendar, DollarSign } from "react-feather";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import HistoriquePeiment from "./livreurHistoriquePaiement";
import CommandesLivres from "./LivreurCommandesLivré";
import {
  Building,
  Check2,
  ListUl,
  RecordCircleFill,
  Telephone,
} from "react-bootstrap-icons";
import { FaRoad, FaUniversity, FaCar, FaMotorcycle } from "react-icons/fa";

const CommentaireBlock = (props) => {
  return (
    <CardBody>
      <div className="user-info text-truncate ml-xl-50 ml-0 mb-50">
        <RecordCircleFill
          size={16}
          style={{
            color: props.icon_color,
            marginLeft: "0px",
          }}
        />
        <span
          title={props.block_type}
          className="ml-2 font-weight-bold font-medium-2"
        >
          {props.block_type}
        </span>
      </div>
      <small className="ml-3 font-small-2"> {props.block_note} </small>

      <div className="d-flex mt-1 flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 ml-3">
        <div className="user-img ml-xl-0 ml-3">
          <img
            className="img-fluid rounded-circle"
            height="32"
            width="32"
            src={props.image_path}
            alt="icon"
          />
        </div>
        <div className="user-info text-truncate ml-xl-50 ml-0">
          <span className=" font-weight-bold d-block text-bold-500 text-truncate mb-0 font-medium-2">
            {props.name}
          </span>
        </div>
      </div>
    </CardBody>
  );
};

const commentaires_notes = [
  {
    id: 1,
    type: "Commentaire interne",
    commentaire: "Bon client",
    image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
    nom: "Zongo meryouli",
  },
  {
    id: 2,
    type: "Commentaire interne",
    commentaire: "Un client deyer ki tfou",
    image: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
    nom: "Benssnan zakzouk",
  },
  {
    id: 3,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    image: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    nom: "Nadjet Boudouara",
  },
  {
    id: 4,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    image: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
    nom: "Nadjet Boudouara",
  },
  {
    id: 5,
    type: "Commentaire interne",
    commentaire: "Client ki soukour",
    image: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
    nom: "Djaluidji Boufon",
  },
];

class LivreursMap extends React.Component {
  state = {
    row: this.props.location.state,
    commentaires_notes: [],
  };
  componentDidMount() {
    this.setState({
      commentaires_notes: commentaires_notes,
    });
  }

  render() {
    console.log(this.state.row);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Informations livreurs</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="5">
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
                <Col lg="4" sm="2">
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
                <Col lg="4" sm="2">
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
                <Col lg="4" sm="2">
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
            </Col>

            <Col xl="2">
              <div className="d-flex">
                <Check2 className="mr-1" size={14} />
                <p className="font-weight-bold ">Status</p>
              </div>
              <div className="d-flex">
                <FaRoad className="mr-1" size={14} />
                <p className="font-weight-bold ">Vehicule</p>
              </div>
              <div className="d-flex">
                <Building className="mr-1" size={14} />
                <p className="font-weight-bold ">Siret</p>
              </div>
              <div className="d-flex">
                <Telephone className="mr-1" size={14} />
                <p className="font-weight-bold ">Contact</p>
              </div>
              <div className="d-flex">
                <FaUniversity className="mr-1" size={14} />
                <p className="font-weight-bold ">Iban</p>
              </div>
            </Col>
            <Col xl="2">
              {/* <Badge
                className="text-truncate mb-1"
                color={
                  this.state.row.status === "Desactivé"
                    ? "light-danger"
                    : this.state.row.status === "Actif"
                    ? "light-success"
                    : "light-primary"
                }
                pill
              > */}
                <p>{this.state.row.status}</p>
              {/* </Badge> */}

              <Badge className='mb-1' style={{ padding: "8" }} color="warning" pill>
                {this.state.row.vihecule === "voiture" ? (
                  <FaCar size="14" style={{ marginRight: "5px" }} />
                ) : (
                  <FaMotorcycle size="14" style={{ marginRight: "5px" }} />
                )}
                {this.state.row.vihecule}
              </Badge>
              <p className="">5666766768</p>
              <p className="">(+33)456-3456</p>
              <p className="">FR 465372 83636 9983</p>
            </Col>
            <Col lg="3">
              <CardTitle className="font-small-4 light-secondary text-left ml-2 mt-1 font-weight-bold">
                <ListUl className="mr-1" size={17} />
                Historique commentaire et note du patient
              </CardTitle>
              <div style={{ overflowY: "scroll", height: "400px" }}>
                {this.state.commentaires_notes.length === 0 ? (
                  <strong>Pas de commentaire pour l'instant</strong>
                ) : (
                  this.state.commentaires_notes.map((comment) => {
                    const icon_color =
                      comment.type === "Commentaire interne"
                        ? "#fa680c"
                        : "#28c76f";
                    return (
                      <CommentaireBlock
                        key={comment.id}
                        icon_color={icon_color}
                        block_type={comment.type}
                        block_note={comment.commentaire}
                        image_path={comment.image}
                        name={comment.nom}
                      />
                    );
                  })
                )}
              </div>
            </Col>
          </Row>

          <HistoriquePeiment />
          <CommandesLivres />
        </CardBody>
      </Card>
    );
  }
}
export default LivreursMap;
