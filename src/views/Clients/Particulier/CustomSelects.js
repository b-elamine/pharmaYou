import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import Select from "react-select";

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

class CustomSelect extends React.Component {
  state = {
    options: {
      roles: [],
      origines: [],
      status: [],
    },
  };

  extract_distinct_values(data) {
    const origines = [];
    const roles = [];
    const status = [];
    data.forEach((row) => {
      if (row.origine) {
        if (!origines.includes(row.origine)) {
          origines.push(row.origine);
        }
      }
      if (row.role) {
        if (!roles.includes(row.role)) {
          roles.push(row.role);
        }
      }
      if (row.status) {
        if (!status.includes(row.status)) {
          status.push(row.status);
        }
      }
    });
    const origine_options = origines.map((item) => {
      return {
        value: item,
        label:
          typeof item === "string"
            ? item.charAt(0).toUpperCase() + item.slice(1)
            : null,
      };
    });
    const roles_options = roles.map((item) => {
      
      return {
        value: item,
        label:
          typeof item === "string"
            ? item.charAt(0).toUpperCase() + item.slice(1)
            : null,
      };
    });
    const status_options = status.map((item) => {

      return {
        value: item,
        label:
          typeof item === "string"
            ? item.charAt(0).toUpperCase() + item.slice(1)
            : null,
      };
    });
    this.setState({
      options : {
        roles : roles_options, 
        origines : origine_options, 
        status : status_options
      }
    })
  }

  componentDidMount() {
    console.log(this.props.data);
  }
  componentDidUpdate() {
    if (
      this.state.options.roles.length === 0 &&
      this.state.options.origines.length === 0 &&
      this.state.options.status.length === 0 &&
      this.props.data.length !== 0
    ) {
      this.extract_distinct_values(this.props.data);
    }
  }
  render() {
    return (
      <Card>
        <CardBody
          style={{
            boxShadow: "inherit",
          }}
        >
          <Row>
            <h5 className="my-1 text-bold-600 font-medium-3 pl-1">
              Clients particuliers
            </h5>
          </Row>
          <Row>
            <Col md="4" sm="8">
              <Select
                className="React"
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
                name="Role"
                placeholder="Role"
                options={this.state.options.roles}
              />
            </Col>
            <Col md="4" sm="8">
              <Select
                classNamePrefix="select"
                placeholder="Origine"
                name="Origine"
                options={this.state.options.origines}
                onChange={this.props.handle_filter_origine}
              />
            </Col>
            <Col md="4" sm="8">
              <Select
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
                name="Status"
                placeholder="Status"
                options={this.state.options.status}
                onChange={this.props.handle_filter_status}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
export default CustomSelect;
