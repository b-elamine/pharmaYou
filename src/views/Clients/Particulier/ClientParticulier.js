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
    nom: "Benssnan zakzouk",
  },
  {
    id: 3,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    nom: "Nadjet Boudouara",
  },
  {
    id: 4,
    type: "Note envoyé au client",
    commentaire: "4 dose de brygabaline",
    nom: "Nadjet Boudouara",
  },
  {
    id: 5,
    type: "Commentaire interne",
    commentaire: "Client ki soukour",
    nom: "Djaluidji Boufon",
  },
];

class Client_particulier extends React.Component {
  state = {
    client: {
      historique: [],
    },
  };

  componentDidMount() {
    this.fetcher_client(this.props.match.params.id_client);
  }
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  fetcher_client = async (id_client) => {
    try {
      if (!id_client) {
        return alert("l'identifiant du client n'est pas valide");
      }

      const response = await axios.get(`/users/${id_client}?access_token=a`);
      const client = response.data;
      const custom_client = {
        id: client.user_id,
        name: `${client.nom} ${client.prenom}`,
        email: client.email,
        ville: client.ville_livraison,
        code: client.code_postal_livraison,
        origine: client.origine,
        date: new Date(client.created_at * 1000).toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        ordonnances: client.n_commandes,
        carte_vital: client.vitale_ok,
        mutuelle: client.mutuelle_ok,
        adresse_livraison: client.adresse_livraison,
        chiffre_affaire: client.chiffre_affaire,
        geocoords_livraison: client.geocoords_livraison,
        telephone: client.telephone,
        type: client.type,
        historique: client.historique,
        commandes: client.commandes,
      };

      this.setState({
        client: custom_client,
      });
    } catch (err) {
      if (err.message.includes("40")) {
        alert("Client pas trouver");
      } else {
        alert(err.message);
      }
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
                  client={this.state.client}
                  commentaires_notes={this.state.client.historique}
                />
              </Col>
              <Col>
                <SecondSection client={this.state.client} />
              </Col>
            </Row>

            {this.state.client.commandes ? (
              <ThirdSection commandes={this.state.client.commandes} />
            ) : (
              <div className="text-center">
                <Spinner
                  color="warning"
                  style={{ width: "5rem", height: "5rem" }}
                />
              </div>
            )}
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
