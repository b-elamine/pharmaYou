import React from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import FirstSection from "./PremiereSection";
import SecondSection from "./DeuxiemeSection";
import ThirdSection from "./TroisiemeSection";
import axios from "../../../axios";

const commentaires_notes = [
  {
    id: 1,
    type: "Commentaire interne",
    commentaire: "Bon client",
    image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    nom: "Zongo meryouli",
  },
  {
    id: 2,
    type: "Commentaire interne",
    commentaire: "Un client deyer ki tfou",
    image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
    nom: "Benssnan zakzouk",
  },
  {
    id: 3,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    image: require("../../../assets/img/portrait/small/avatar-s-3.jpg"),
    nom: "Nadjet Boudouara",
  },
  {
    id: 4,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
    nom: "Nadjet Boudouara",
  },
  {
    id: 5,
    type: "Commentaire interne",
    commentaire: "Client ki soukour",
    image: require("../../../assets/img/portrait/small/avatar-s-5.jpg"),
    nom: "Djaluidji Boufon",
  },
];

class Client_particulier extends React.Component {
  state = {
    client: null,
  };

  componentDidMount() {
    this.fetcher_client(this.props.match.params.id_client);
  }
  fetcher_client = async (id_client) => {
    try {
      const response = await axios.get(`/users/${id_client}?access_token=a`);
      const client = response.data;

      const custom_client = {
        id: client.user_id,
        image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: `${client.nom} ${client.prenom}`,
        email: client.email,
        ville: client.ville_livraison,
        code: client.code_postal_livraison,
        origine: client.origine,
        date: "29 Janvier 2019",
        ordonnances: client.n_commandes,
        carte_vital: client.vitale_ok,
        mutuelle: client.mutuelle_ok,
        adresse_livraison: client.adresse_livraison,
        chiffre_affaire: client.chiffre_affaire,
        geocoords_livraison: client.geocoords_livraison,
        telephone: client.telephone,
        type: client.type,
      };
      this.setState({
        client: custom_client,
      });
    } catch (err) {
      alert(err.message);
    }
  };
  render() {
    return (
      <Card>
        {this.state.client ? (
          <React.Fragment>
            <Row>
              <Col>
                <FirstSection
                  client={this.props.location.state}
                  commentaires_notes={commentaires_notes}
                />
              </Col>
              <Col>
                <SecondSection client={this.props.location.state} />
              </Col>
            </Row>

            <ThirdSection client={this.props.location.state} />
          </React.Fragment>
        ) : (
          <div className="text-center">
            <Spinner
              color="warning"
              style={{ width: "5rem", height: "5rem" }}
            />
          </div>
        )}
      </Card>
    );
  }
}

export default Client_particulier;
