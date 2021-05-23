import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import DataTableCustom from "../../DataTableCustom/DataTableCustom";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import Icon from "./Icon.svg";
import { history } from "../../../history";
import { Badge } from "reactstrap";
import {
  CursorFill,
  EyeFill,
  CreditCard2Back,
  Check2,
  Exclamation,
  FolderMinus
} from "react-bootstrap-icons";

import axios from "../../../axios";

import {
  Truck,
  ExclamationTriangleFill,
  HourglassSplit,
  Check2All,
} from "react-bootstrap-icons";



const commandes = {
  non_traité: 98,
  en_attente: 14,
  pro_en_attente: 2,
  en_cours_livraison: 82,
  livrée: 51,
};
const columns = [
  {
    name: "#",
    selector: "id",
    sortable: true,
    minWidth: "10px",
    cell: (row) => <p style={{cursor:"pointer"}} className="text-bold-500 mb-0" onClick={()=> {
      const url = `/ordonnance/${row.id}`;
      console.log(row)
      history.push(url, row);
    }}>{row.id}</p>,
  },
  {
    name: "STATUT",
    selector: "status",
    sortable: true,
    minWidth: "190px",
    cell: (row) =>
      row.status === "attente_approvisionnement" ? (
        <Badge
          pill
          style={{ backgroundColor: "#f8e7b6", color: "#ff7535" }}
          className="pl-50 pr-50 font-small-1 text-wrap text-bold-500"
        >
          <img src={Icon} alt="Icon" height="22" width="22" className="mr-50" />
          Traité ! Réglement en attente
        </Badge>
      ) : row.status === "non-traité" ? (
        <Badge color="light-danger pl-50 pr-50 " pill>
          <ExclamationTriangleFill className="danger mr-50" size={20} />
          Non-traitée
        </Badge>
      ) : row.status === "en_livraison" ? (
        <Badge
          style={{
            color: "#180852",
            backgroundColor: "#e9e8ee",
            fontWeight: "bold",
          }}
          color="pl-50 pr-50"
          pill
        >
          <Truck className="mr-50" size={20} />
          En livraison
        </Badge>
      ) : row.status === "livrée" ? (
        <Badge color="light-success pl-50 pr-50 " pill>
          <Check2All className="success mr-50" size={20} />
          Livrée
        </Badge>
      ) : row.status === "En attente" ? (
        <Badge color="light-primary pl-50 pr-50 " pill>
          <HourglassSplit className="primary mr-50" size={20} />
          {row.status}
        </Badge>
      ) : row.status === "annulée" ? (
        <Badge color="light-danger pl-50 pr-50 " pill>
          <HourglassSplit className="primary mr-50" size={20} />
          Annulée
        </Badge>
      ) : row.status === "validée" ? (
        <Badge color="light-success pl-50 pr-50 " pill>
          <Check2 className="primary mr-50" size={20} />
          Validée
        </Badge>
      ) : row.status === "incomplet" ? (
        <Badge color="light-primary pl-50 pr-50 " pill>
          <Exclamation className="primary mr-50" size={20} />
          Incomplet
        </Badge>
      ) : null,

    // {row.status === "en attente" ? (
    //   <img src={Icon} alt="Icon" height="22" width="22" />
    // ) : row.status === "En attente" ? (
    //   <HourglassSplit className="primary" size={20} />
    // ) : row.status === "En livraison" ? (
    //   <Truck className="dark" size={20} />
    // ) : row.status === "Livré" ? (
    //   <Check2All className="success" size={20} />
    // ) : row.status === "Non-traité" ? (
    //   <ExclamationTriangleFill className="danger" size={20} />
    // ) : null}

    // {row.status === "en attente"
    //   ? "Traité! Réglement en attente"
    //   : row.status}
  },
  {
    name: "Nom Client",
    selector: "nom_client",
    sortable: true,
    minWidth: "200px",
    cell: (row) => (
      <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
        <div className="user-img ml-xl-0 ml-2">
          <img
            className="img-fluid rounded-circle"
            height="36"
            width="36"
            src={row.image}
            alt={row.name}
          />
        </div>
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
    name: "Type",
    selector: "type",
    sortable: true,
    cell: (row) => (
      <Badge
        color={row.type === "Particulier" ? "light-primary" : "light-success"}
        pill
      >
        {row.type}
      </Badge>
    ),
  },
  {
    name: "Montant",
    selector: "montant",
    sortable: true,
    cell: (row) => <p className="text-bold-500 mb-0">{row.montant}</p>,
  },
  {
    name: "Date",
    selector: "date",
    sortable: true,
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
    ),
  },
  {
    name: "Code postal",
    selector: "code_postal",
    cell: (row) => (
      <p className="text-bold-500 text-truncate mb-0">{row.code}</p>
    ),
  },
  {
    name: "Paiment",
    selector: "paiment",
    minWidth: "150px",
    cell: (row) =>
      row.paiment === "en_attente" ? (
        <Badge
          pill
          //   style={{ color: "red" }}
          className="gradient-light-primary pl-50 pr-50 text-warning text-wrap font-weight-bold"
        >
          <CreditCard2Back className="light-warning mr-50" size={20} />
          En attente
        </Badge>
      ) : row.paiment === "reglé" ? (
        <Badge
          pill
          color="light-success pl-50 pr-50  text-success text-wrap font-weight-bold"
          size={20}
        >
          <CreditCard2Back className="light-success mr-50" size={20} />
          <strong>Reglé</strong>
        </Badge>
      ) : (
        <Badge
          pill
          style={{ backgroundColor: "#fde64b", color: "black" }}
          className="pl-50 pr-50 font-small-4 text-wrap text-bold-600"
        >
          <Truck className="dark mr-50" size={20} />
          <strong>j+15 </strong>
        </Badge>
      ),
    //   <Badge
    //     color={`
    //     light-success text-wrap text-bold-500 mb-0
    //     gradient-light-${
    //       row.paiment === "En attente"
    //         ? "primary"
    //         : row.paiment === "Reglé"
    //         ? "success"
    //         : "secondary"
    //     }
    //     `}
    //     style={{ width: "7rem", fontSize: "74%", lineHeight: "1.2" }}
    //     pill
    //   >
    //     {row.paiment === "En attente" ? (
    //       <img src={Icon} alt="Icon" />
    //     ) : row.status === "Reglé" ? (
    //       <HourglassSplit className="info" size={25} />
    //     ) : (
    //       <Truck className="warning" size={25} />
    //     )}

    //     {row.paiment}
    //   </Badge>
  },
  {
    name: "Actions",
    selector: "actions",
    minWidth: "180px",
    cell: (row) => (
      <div className="data-list-action">
        <CursorFill
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            alert("Send a message " + row.id);
          }}
        />
        <EyeFill
          className="cursor-pointer mr-1"
          size={20}
          onClick={() => {
            alert("view the Commande " + row.id);
          }}
        />
      </div>
    ),
  },
];

class Commande_recue extends React.Component {
  state = {
    columns: [],
    data: [],
    commandes: {
      non_traité: 0,
      en_attente: 0,
      en_cours_livraison: 0,
      livrée: 0,
      pro_en_attente: 0,
    },
  };

  fetching_data = async () => {
    console.log("fetching ....");
    const commandes = await axios.get("/commandes?access_token=a");
    const commandes_pro = commandes.data.filter((item) => item.type === "pro");
    const custom_commandes = commandes_pro.map((item) => {
      return {
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
        name: item.nom_patient + " " + item.prenom_patient,
        // name: 'Akram Ouardas',
        image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
        email: item.email,
        // email: "a.ouardas@esi-sba.dz",
        type: item.type === "ordo" ? "Particulier" : "Professionnel",
        montant: item.montant_total,
        date: new Date(item.created_at).toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        code: item.code_postal_livraison,
        // paiment: item.paiment,
        paiment: "reglé",
      };
    });

    console.log(custom_commandes);
    this.setState({
      data: custom_commandes,
    });
  };

  componentDidMount() {
    this.fetching_data();

    this.setState({
      columns: columns,
      // data: data,
      commandes: {
        non_traité: commandes.non_traité,
        en_attente: commandes.en_attente,
        pro_en_attente: commandes.pro_en_attente,
        en_cours_livraison: commandes.en_cours_livraison,
        livrée: commandes.livrée,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Commandes Reçues."
          breadCrumbParent="Commandes"
        />
        <Row>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color = '#fadcdc'
              second_color = '#f5f3f3'
              bg_color="danger"
              iconBg="danger"
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"8px",
                  backgroundColor:"#F7CFCF",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <ExclamationTriangleFill 
                style={{
                  color:"#EA5455"
                }}
                size={30} />
                </div> }
              stat={this.state.commandes.non_traité}
              statTitle="Commandes pro Non traité"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color = '#d3f4f9'
              second_color = '#f5fcfd'
              bg_color="info"
              iconBg="info"
              
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"10px",
                  backgroundColor:"#BCF0F8",  
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <FolderMinus 
                style={{
                  color:"#EA5455"
                }}
                size={30} />
                </div> }
              stat={this.state.commandes.en_attente}
              statTitle="Commandes en attente de paiment"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color = '#feddcf'
              second_color = '#feedcf'
              bg_color="primary"
              iconBg="primary"
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"10px",
                  backgroundColor:"#FFD8BB",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <HourglassSplit 
                style={{
                  color:"#00CFE8"
                }}
                size={30} />
                </div> }
              stat={this.state.commandes.pro_en_attente}
              statTitle="Commandes pro en attente"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              first_color = '#d0cdd9'
              second_color = '#f3f2f6'
              bg_color="warning"
              iconBg="warning"
              icon={
                <div
                style={{
                  marginRight:"auto",
                  marginLeft:"auto",
                  padding:"8px",
                  backgroundColor:"#CAC5E3",
                  borderRadius:"50%",
                  height:"50px",
                  width:"50px",
                }}
                >
                <Truck 
                className="warning"
                size={35} />
                </div> }
              stat={this.state.commandes.en_cours_livraison}
              statTitle="Commandes pro en Cours de livraison"
            />
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <DataTableCustom
              columns={this.state.columns}
              data={this.state.data}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Commande_recue;
