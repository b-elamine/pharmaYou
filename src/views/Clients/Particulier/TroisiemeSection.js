import React from "react";
import {
  Calendar2Week,
  Check2All,
  ExclamationTriangleFill,
  EyeFill,
  HourglassSplit,
  Truck,
  Exclamation,
  Check2,
  Hourglass,
} from "react-bootstrap-icons";
import { Badge, Card, CardTitle } from "reactstrap";
import DataTableCustom from "../../DataTableCustom/DataTableCustom";
import { history } from "../../../history";



const columns = [
  {
    name: "#",
    selector: "id",
    sortable: true,
    maxWidth: "100px",
    cell: (row) => (
      <p
        style={{ cursor: "pointer" }}
        className="text-bold-500 mb-0"
        onClick={() => {
          const url = `/ordonnance/${row.id}`;
          history.push(url, row);
        }}
      >
        {row.id}
      </p>
    ),
  },
  {
    name: "STATUT",
    selector: "status",
    minWidth: "100px",
    maxWidth: "150px",
    center: true,
    cell: (row) =>
      row.status === "en_attente" ? (
        <Badge
          pill
          color="light-primary"
          className="text-primary pl-50 pr-50 font-small-1 text-wrap text-bold-500"
        >
          <HourglassSplit className="primary mr-50" size={20} />
          En attente
        </Badge>
      ) : row.status === "non-traité" ? (
        <Badge color="light-danger pl-50 pr-50 " pill>
          <ExclamationTriangleFill className="danger mr-50" size={20} />
          Non-traité
        </Badge>
      ) : row.status === "en_livraison" ? (
        <Badge
          style={{
            color: "#180852",
            backgroundColor: "#e9e8ee",
            fontWeight: "bold",
          }}
          color="pl-50 pr-50"
          // className="text-warning"
          pill
        >
          <Truck className="mr-50" size={20} />
          En livraison
        </Badge>
      ) : row.status === "livrée" ? (
        <Badge color="light-success pl-50 pr-50 " pill>
          <Check2All className="success mr-50" size={20} />
          Livré
        </Badge>
      ) : row.status === "tournée_assigné" ? (
        <Badge
          style={{
            backgroundImage: "linear-gradient(#ffd5c0, #fee6bf)",
            color: "#fe5f29",
            fontWeight: "bold",
          }}
          className="pl-50 pr-50 "
          pill
        >
          <Calendar2Week className="primary mr-50" size={20} />
          Tournée assigné
        </Badge>
      ) : row.status === "annulée" ? (
        <Badge color="light-danger pl-50 pr-50 " pill>
          <Exclamation className="danger mr-0" size={20} />
          Annulée
        </Badge>
      ) : row.status === "validée" ? (
        <Badge color="light-success pl-50 pr-50 " pill>
          <Check2 className="success mr-50" size={20} />
          Validée
        </Badge>
      ) : row.status === "incomplet" ? (
        <Badge color="light-primary pl-50 pr-50 " pill>
          <Hourglass className="primary mr-50" size={20} />
          Incomplet
        </Badge>
      ) : null,
  },
  {
    name: "NOM CLIENT",
    selector: "nom_client",
    sortable: true,
    minWidth: "210px",
    cell: (row) => (
      <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
        <div className="user-info text-truncate ml-xl-50 ml-0">
          <span
            title={row.name}
            className="d-block text-bold-500 text-truncate mb-0"
          >
            {row.name}
          </span>
          <small title={row.email}>{row.email}</small>
        </div>
      </div>
    ),
  },
  {
    name: "TYPE",
    selector: "type",
    // center: true,
    sortable: true,
    maxWidth: "130px",
    cell: (row) =>
      row.type === "Particulier" ? (
        <Badge
          // color="light-primary"
          style={{
            backgroundColor: "#ff9f43",
            color: "white",
            fontWeight: "bold",
          }}
          pill
        >
          {row.type}
        </Badge>
      ) : (
        <Badge color="light-success" pill>
          {row.type}
        </Badge>
      ),
  },
  {
    name: "MONTANT",
    selector: "montant",
    center: true,
    sortable: true,
    maxWidth: "100px",
    cell: (row) =>
      row.montant !== null ? (
        <p className="text-bold-500 mb-0">{row.montant} €</p>
      ) : (
        <p className="text-bold-500 mb-0">En calcul</p>
      ),
  },
  {
    name: "DATE",
    selector: "date",
    sortable: true,
    minWidth: "200px",
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
    ),
  },
  {
    name: "CODE POSTAL",
    selector: "code_postal",
    maxWidth: "120px",
    sortable: true,
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.code}</p>
    ),
  },
  {
    name: "ORIGINE",
    selector: "origine",
    maxWidth: "190px",
    // center: true,
    sortable: true,
    cell: (row) =>
      row.origine === "infirmier" ? (
        <Badge
          color="light-success text-wrap text-bold-500 mb-0"
          style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
          pill
        >
          Infirmier
        </Badge>
      ) : row.origine === "medadom" ? (
        <Badge
          color="light-success text-wrap text-bold-500 mb-0"
          style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
          pill
        >
          MEDADOM
        </Badge>
      ) : row.origine === "web" ? (
        <Badge
          color="light-success text-wrap text-bold-500 mb-0"
          style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
          pill
        >
          WEB
        </Badge>
      ) : row.origine === "app" ? (
        <Badge
          color="light-success text-wrap text-bold-500 mb-0"
          style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
          pill
        >
          Appli
        </Badge>
      ) : (
        <Badge
          color="light-success text-wrap text-bold-500 mb-0"
          style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
          pill
        >
          Pro
        </Badge>
      ),
  },
  {
    name: "ACTIONS",
    selector: "actions",
    center: true,
    maxWidth: "120px",
    cell: (row) => (
      <div className="data-list-action">
        <EyeFill
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            history.push(`/ordonnance/${row.id}`);
          }}
        />
      </div>
    ),
  },
];
class ThirdSection extends React.Component {
  state = {
    data: [],
  };
  // componentDidMount() {
  //   // fetching the data from the database and passing it to the state
  //   this.setState({
  //     data: data,
  //   });
  // }
  render() {
    let  commandes = []
    if (this.props.commandes){
      commandes = this.props.commandes.map((item) => {
        return {
          ...item,
          id: item.commande_id,
          status:
            item.status_commande === -2
              ? "annulée"
              : item.status_commande === -1
              ? "incomplet"
              : item.status_commande === 0
              ? "non-traité"
              : item.status_commande === 1
              ? "attente_approvisionnement"
              : item.status_commande === 2
              ? "validée"
              : item.status_commande === 3
              ? "livrée"
              : null,
          // status :"incomplet",
          name: item.nom_patient + " " + item.prenom_patient,
          // name: 'Akram Ouardas',
          type: item.type === "ordo" ? "Particulier" : "Professionnel",
          montant: item.montant_total,
          date: new Date(item.updated_at * 1000).toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
          code: item.code_postal_livraison,
          origine: item.origine,
          email: item.email,
          ville: item.ville_livraison,
          paiment: item.status_paiement,
          patient: {
            nom: item.nom_patient,
            prenom: item.prenom_patient,
            address: `${item.adresse_livraison} , ${item.code_postal_livraison} , ${item.ville_livraison}`,
            num_tel: item.telephone,
            appeler: true,
            email: item.email,
            note: item.note_admin
              ? item.note_admin
              : "Pas de note pour l'instant.",
          },
          CMU: true,
          mutuelle: item.mutuelle_ok,
        };
      });
    }
    return (
      <Card className="ml-1">
        <CardTitle className=" font-large-1 mt-50">
          Commande du patient
        </CardTitle>
        <DataTableCustom
          // add_new
          // add_new_value="Ajouter une ordonnance"
          columns={columns}
          data={commandes}
        />
      </Card>
    );
  }
}

export default ThirdSection;
