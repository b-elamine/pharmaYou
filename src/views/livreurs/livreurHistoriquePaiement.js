import React from "react";
import { Card, CardBody, Badge, CardHeader, CardTitle } from "reactstrap";

import DataTable from "react-data-table-component";
import { CheckSquare, Square } from "react-bootstrap-icons";
// import { Plus, CheckSquare } from "react-feather";

// const CustomHeader = (props) => {
//   return (
//     <div className="d-flex flex-wrap justify-content-end">
//       {/* <div className="position-relative has-icon-left mb-1">
//           <Input
//             placeholder="Chercher"
//             value={props.value}
//             onChange={(e) => props.handleFilter(e)}
//           />
//           <div className="form-control-position">
//             <Search size="15" />
//           </div>
//         </div> */}
//       <div style={{ marginLeft: "20px" }} className="add-new">
//         <Button.Ripple color="primary">
//           <Plus size="15" /> Rajouter une facture
//         </Button.Ripple>
//       </div>
//     </div>
//   );
// };

class HistoriquePeiment extends React.Component {
  state = {
    columns: [
      {
        name: "REF FACTURE",
        selector: "REF FACTURE",
        sortable: true,
        cell: (row) => <p className="text-bold-500  mb-0">#</p>,
      },
      {
        name: "DATE DEBUT",
        selector: "DATE DEBUT",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500  mb-0">DU {row.date_debut}</p>
        ),
      },
      {
        name: "DATE FIN",
        selector: "DATE FIN",
        sortable: false,
        cell: (row) => <p className="text-bold-500  mb-0">AU {row.date_fin}</p>,
      },
      {
        name: "SOMME DU",
        selector: "SOMME DU",
        sortable: true,
        cell: (row) => <p className="text-bold-500  mb-0">{row.montant} €</p>,
      },
      {
        name: "STATUT",
        selector: "STATUT",
        sortable: true,
        cell: (row) => (
          <Badge
            className="text-truncate"
            color={row.status_paye === 1  ? "light-success" : "light-primary"}
            pill
          >
            {row.status_paye === 1 ? "REGLÉ" : "EN ATTENTE"}
          </Badge>
        ),
      },
      {
        name: "ACTIONS",
        selector: "ACTIONS",
        sortable: true,
        maxWidth: "60px",
        cell: (row) =>
          row.status_paye === 1 ? (
            <CheckSquare size="15" color="#28C76F" />
          ) : (
            <Square size="15" color="#FC8F04" />
          ),
      },
    ],
  };
  componentDidMount (){
    this.setState({
      data : this.props.data
    })
  }

  render() {
    let { columns} = this.state;
    // let element = [];
    // for (let index = 0; index < this.props.data.length; index++) {
    //   if (index % 5 === 0 && index > 9) {
    //     element.push(index);
    //   }
    // }
    // element.push(this.props.data.length);
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Historique des paiements</CardTitle>
          </CardHeader>
          <CardBody className="rdt_Wrapper">
            <DataTable
              className="dataTable-custom"
              data={this.props.data}
              columns={columns}
              noHeader
              pagination
              subHeader
              highlightOnHover
              // paginationRowsPerPageOptions={element}
              // subHeaderComponent={<CustomHeader value={value} />}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HistoriquePeiment;
