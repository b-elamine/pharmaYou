import React from "react";
import {
  Card,
  CardBody,
  Input,
  Col,
  //   FormGroup,
  //   Form,
  //   Label,
} from "reactstrap";
import { history } from "../../history";

import axios from "../../axios";
import { Search, Eye } from "react-feather";
import DataTable from "react-data-table-component";
const Statut = [
  { value: "Tous", label: "Tous" },
  { value: "Livré", label: "Livré" },
  { value: "En attente", label: "En attente" },
];
const CustomHeader = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-end">
      <Col md="4" sm="12">
        <div className="position-relative has-icon-left mb-1">
          <Input
            placeholder="Chercher"
            value={props.value}
            onChange={props.handleFilterSelect}
          />
          <div className="form-control-position">
            <Search size="15" />
          </div>
        </div>
      </Col>
    </div>
  );
};

class LivreurProcedureSignup extends React.Component {
  state = {
    columns: [
      {
        name: "#",
        selector: "#",
        sortable: true,
        cell: (row) => <p className="text-bold-500  mb-0"># {row.id}</p>,
      },
      {
        name: "NOM CLIENT",
        selector: "NOM CLIENT",
        sortable: true,
        minWidth: "250px",
        cell: (row) => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.name}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.name}
              </span>
            </div>
          </div>
        ),
      },
      {
        name: "EMAIL",
        selector: "EMAIL",
        sortable: true,
        minWidth: "250px",
        cell: (row) => <p className="text-bold-500 mb-0">{row.email}</p>,
      },

      {
        name: "DATE DE CREATION",
        selector: "DATE DE CREATION",
        sortable: true,
        minWidth: "250px",
        cell: (row) => <p className="text-bold-500  mb-0">{row.date}</p>,
      },
      {
        name: "ACCEPTER",
        selector: "ACCEPTER",
        sortable: true,
        cell: (row) => {
          return (
            <div className="d-flex flex-row align-items-end">
              <Eye
                className="cursor-pointer"
                size="20"
                onClick={() => {
                  history.push(`/livreurs/accepter/${row.id}`);
                }}
              />
            </div>
          );
        },
      },
    ],
    data: [],
    filteredData: [],
    value: "",
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "/signup_procedures_livreurs?access_token=a"
      );
      const data = response.data.map((item) => {
        return {
          id: item.signup_procedure_livreurs_id,
          name: item.nom_complet,
          email: item.email,
          date: item.created_at,
        };
      });
      this.setState({
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleFilterSelect = (e) => {
    let value = e.target.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });
    if (value === "Tous") {
      this.setState({ value: "" });
    }

    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.date.toLowerCase().startsWith(value.toLowerCase());

        let includesCondition =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.date.toLowerCase().includes(value.toLowerCase());
        if (startsWithCondition) {
          return startsWithCondition;
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };
  render() {
    let { data, columns, value, filteredData } = this.state;
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
          <CardBody className="rdt_Wrapper">
            <DataTable
              className="dataTable-custom"
              data={value.length ? filteredData : data}
              columns={columns}
              noHeader
              pagination
              subHeader
              highlightOnHover
              paginationRowsPerPageOptions={element}
              subHeaderComponent={
                <CustomHeader
                  value={value}
                  handleFilterSelect={this.handleFilterSelect}
                />
              }
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LivreurProcedureSignup;
