import React from "react";
import * as Icon from "react-feather";
import { FaTable, FaHandshake,FaFileInvoice,FaMotorcycle } from "react-icons/fa";
import { IoStatsChart,IoPeopleCircleOutline } from "react-icons/io5";
const navigationConfig = [
  {
    id: "vue_ensemble",
    title: "Vue d'ensemble",
    type: "item",
    // vu_ens: true,
    icon: <FaTable size={20} />,
    navLink: "/",
  },
  {
    id: "stats",
    title: "Statistiques détaillés",
    type: "item",
    icon: <IoStatsChart size={20} color="#FDA300" />,
    navLink: "/stats",
  },
  {
    type: "groupHeader",
    groupTitle: "COMMANDE PARTICULIERS",
  },
  {
    id: "ordnnance_recue",
    title: "Ordonnance reçues",
    type: "item",
    icon: <Icon.FileText size={20} color="#FDA300" />,
    navLink: "/ordonnance/recues",
  },
  {
    id: "client_p",
    title: "Client particuliers",
    type: "item",
    icon: <Icon.Users size={20} color="#FDA300" />,
    navLink: "/client/particuliers",
  },
  {
    id: "Partenaire",
    title: "Partenaires",
    type: "item",
    icon: <FaHandshake size={20} color="#FDA300" />,
    navLink: "/partenaires",
  },
  {
    type: "groupHeader",
    groupTitle: "COMMANDE PROFESSIONNELLES",
  },
  {
    id: "cmnd_recue",
    title: "Commandes reçues",
    type: "item",
    icon: <Icon.File size={20} color="#FDA300" />,
    navLink: "/commande/recues",
  },
  {
    id: "client_prof",
    title: "Clients professionnelles",
    type: "item",
    icon: <IoPeopleCircleOutline size={20} color="#FDA300" />,
    navLink: "/client/professionnelles",
  },
  {
    id: "factures",
    title: "Factures",
    type: "item",
    icon: <FaFileInvoice size={20} color="#FDA300" />,
    navLink: "/factures",
  },
  {
    id: "support_pro",
    title: "Support pro",
    type: "item",
    icon: <Icon.Headphones size={20} color="#FDA300" />,
    navLink: "/support_pro",
  },
  {
    type: "groupHeader",
    groupTitle: "LIVRAISON & TOURNÉES",
  },
  {
    id: "calendrier",
    title: "Calendrier des Tournées",
    type: "item",
    icon: <Icon.Calendar size={20} color="#FDA300" />,
    navLink: "/calendrier_tournées",
  },
  {
    id: "livreurs",
    title: "Livreurs",
    type: "item",
    icon: <FaMotorcycle size={20} color="#FDA300" />,
    navLink: "/livreurs",
  },
  {
    id: "carte",
    title: "Carte livreurs",
    type: "item",
    icon: <Icon.Map size={20} color="#FDA300" />,
    navLink: "/livreurs/carte",
  },
  {
    id: "SalaireLivrueur",
    title: "Salaire livreur",
    type: "item",
    icon: <Icon.DollarSign size={20} color="#FDA300" />,
    navLink: "/livreurs/salaire",
  },

  {
    type: "groupHeader",
    groupTitle: "PARAMÉTRES",
  },
  {
    id: "user",
    title: "Administrateur",
    type: "item",
    icon: <Icon.User size={20} color="#FDA300" />,
    navLink: "/users",
  },
  
];

export default navigationConfig;
