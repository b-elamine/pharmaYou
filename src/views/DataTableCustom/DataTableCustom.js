import React from "react";
import { Card, CardBody, Input, Button } from "reactstrap";
import DataTable from "react-data-table-component";
import { history } from "../../history";
import { withRouter } from "react-router-dom";

import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";

const CustomHeader = (props) => {
  return (
    <div className="d-flex flex-row-reverse">
      <div className="add-new">
        {props.add_new ? (
          <Button.Ripple color="primary ml-75 text-bold-500">
            {props.add_new_value}
          </Button.Ripple>
        ) : null}
      </div>
      <div className="position-relative has-icon-left mb-1">
        <Input value={props.value} onChange={(e) => props.handleFilter(e)} />
        <div className="form-control-position">
          <Search size="15" />
        </div>
      </div>
    </div>
  );
};

class DataTableCustom extends React.Component {
  state = {
    columns: [],
    data: [],
    filteredData: [],
    value: "",
    data_fetched: false,
  };

  // componentDidUpdate() {
  //   if (this.state.data.length === 0) {
  //     this.setState({
  //       data: this.props.data,
  //     });
  //   }
  // }

  componentDidMount() {
    console.log(this.props.data)
    this.setState({
      data: this.props.data,
    });
  }

  handleFilterOrdo = (e) => {
    let value = e.target.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });
    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition =
          `${item.patient.nom} ${item.patient.prenom}`
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.type.toLowerCase().startsWith(value.toLowerCase()) ||
          // l'email est a null
          // item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.montant === value ||
          item.origine.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().startsWith(value.toLowerCase());
        let includesCondition =
          `${item.patient.nom} ${item.patient.prenom}`
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          // item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.origine.toLowerCase().includes(value.toLowerCase()) ||
          item.type.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase());

        if (startsWithCondition) {
          return startsWithCondition;
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };
  handleFilterClient = (e) => {
    let value = e.target.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });
    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition =
          item.name
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.type.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.origine.toLowerCase().startsWith(value.toLowerCase()) ||
          item.ville.toLowerCase().startsWith(value.toLowerCase());
        let includesCondition =
        item.name
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.origine.toLowerCase().includes(value.toLowerCase()) ||
          item.type.toLowerCase().startsWith(value.toLowerCase()) ||
          item.ville.toLowerCase().includes(value.toLowerCase());

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
    let { value, filteredData } = this.state;
    const ordonnance = (row) => {
      const url = `/ordonnance/${row.id}`;
      console.log(row);
      history.push(url, row);
    };
    return (
      <Card className="mt-5">
        <CardBody className="rdt_Wrapper pt-75">
          <DataTable
            className="dataTable-custom"
            data={value.length ? filteredData : this.props.data}
            columns={this.props.columns}
            noHeader
            clearSelectedRows
            pagination
            paginationIconFirstPage={<ChevronsLeft size={20} />}
            paginationIconLastPage={<ChevronsRight size={20} />}
            paginationIconPrevious={<ChevronLeft size={15} />}
            paginationIconNext={<ChevronRight size={15} />}
            subHeader
            highlightOnHover
            // onRowClicked={
            //   this.props.match.url === "/ordonnance/recues"
            //     ? ordonnance
            //     : () => {}
            // }
            subHeaderComponent={
              <CustomHeader
                add_new={this.props.add_new}
                add_new_value={this.props.add_new_value}
                value={value}
                handleFilter={
                  this.props.match.url === "/ordonnance/recues"
                    ? this.handleFilterOrdo
                    : this.handleFilterClient
                }
              />
            }
          />
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(DataTableCustom);
