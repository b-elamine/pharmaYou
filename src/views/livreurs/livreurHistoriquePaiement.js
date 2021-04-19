import React from "react";
import {
  Card,
  CardBody,
  Badge,
  //   Input,
  Button,
  CardHeader,
  CardTitle,
  //   Row,
  //   Col,
  //   FormGroup,
  //   Form,
  //   Label,
} from "reactstrap";

import DataTable from "react-data-table-component";
import { CheckSquare, Plus, Square } from "react-bootstrap-icons";
// import { Plus, CheckSquare } from "react-feather";

const CustomHeader = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-end">
      {/* <div className="position-relative has-icon-left mb-1">
          <Input
            placeholder="Chercher"
            value={props.value}
            onChange={(e) => props.handleFilter(e)}
          />
          <div className="form-control-position">
            <Search size="15" />
          </div>
        </div> */}
      <div style={{ marginLeft: "20px" }} className="add-new">
        <Button.Ripple color="primary">
          <Plus size="15" /> Rajouter une facture
        </Button.Ripple>
      </div>
    </div>
  );
};

class HistoriquePeiment extends React.Component {
  state = {
    columns: [
      {
        name: "REF FACTURE",
        selector: "REF FACTURE",
        sortable: true,
        cell: (row) => <p className="text-bold-500  mb-0">{row.RefFActure}</p>,
      },
      {
        name: "DATE DEBUT",
        selector: "DATE DEBUT",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500  mb-0">DU {row.DateDebut}</p>
        ),
      },
      {
        name: "DATE FIN",
        selector: "DATE FIN",
        sortable: false,
        cell: (row) => <p className="text-bold-500  mb-0">AU {row.DateFin}</p>,
      },
      {
        name: "SOMME DU",
        selector: "SOMME DU",
        sortable: true,
        cell: (row) => <p className="text-bold-500  mb-0">{row.Somme} £</p>,
      },
      {
        name: "STATUT",
        selector: "STATUT",
        sortable: true,
        cell: (row) => (
          <Badge
            className="text-truncate"
            color={row.status === "Reglé" ? "light-success" : "light-primary"}
            pill
          >
            {row.status}
          </Badge>
        ),
      },
      {
        name: "ACTIONS",
        selector: "ACTIONS",
        sortable: true,
        maxWidth : "60px",
        cell: (row) =>
          row.status === "Reglé" ? (
            <CheckSquare size="15" color="#28C76F" />
          ) : (
            <Square size="15" color="#FC8F04" />
          ),
      },
    ],
    data: [
      {
        RefFActure: "#pay-2374",
        DateDebut: "09 fev 2021",
        DateFin: "09 mar 2021",
        Somme: "220",
        status: "En attente",
      },
      {
        RefFActure: "#pay-2374",
        DateDebut: "09 fev 2021",
        DateFin: "09 mar 2021",
        Somme: "220",
        status: "Reglé",
      },
      {
        RefFActure: "#pay-2374",
        DateDebut: "09 fev 2021",
        DateFin: "09 mar 2021",
        Somme: "220",
        status: "Reglé",
      },
      {
        RefFActure: "#pay-2374",
        DateDebut: "09 fev 2021",
        DateFin: "09 mar 2021",
        Somme: "220",
        status: "Reglé",
      },
      {
        RefFActure: "#pay-2374",
        DateDebut: "09 fev 2021",
        DateFin: "09 mar 2021",
        Somme: "220",
        status: "Reglé",
      },
      {
        RefFActure: "#pay-2374",
        DateDebut: "09 fev 2021",
        DateFin: "09 mar 2021",
        Somme: "220",
        status: "En attente",
      },
    ],
   
  };

 

  render() {
    let { data, columns, value } = this.state;
    let element = [];
    for (let index = 0; index < data.length; index++) {
      if (index % 5 === 0 && index > 9) {
        element.push(index);
      }
    }
    element.push(data.length);
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Historique des paiements</CardTitle>
          </CardHeader>
          <CardBody className="rdt_Wrapper">
            <DataTable
              className="dataTable-custom"
              data={data}
              columns={columns}
              noHeader
              pagination
              subHeader
              highlightOnHover
              paginationRowsPerPageOptions={element}
              subHeaderComponent={<CustomHeader value={value} />}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HistoriquePeiment;
