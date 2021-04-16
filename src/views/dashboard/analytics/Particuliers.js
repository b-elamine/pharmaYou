import React from "react";
import { Card, CardBody } from "reactstrap";
import Chart from "react-apexcharts";

class Particulier extends React.Component {
  render() {
    return (
      <Card
        style={{
          borderRadius: "28px",
          width: "98rem",
          height:"12rem",
          backgroundColor:"#F1AE73"
        }}
      >
        <CardBody          
          className={`${
            this.props.className ? this.props.className : "stats-card-body"
          } d-flex ${
            !this.props.iconRight && !this.props.hideChart
              ? "flex-column align-items-start"
              : this.props.iconRight
              ? "justify-content-between flex-row-reverse align-items-center"
              : this.props.hideChart && !this.props.iconRight
              ? "justify-content-center flex-column text-center"
              : null
          } ${!this.props.hideChart ? "pb-0" : "pb-2"}  pt-1 ${
            this.props.bg_color ? "gradient-light-" + this.props.bg_color : ''
          }`}
        >
          <div className="title-section">
            <h2 className="text-bold-600 mt-1 mb-25">{this.props.stat}</h2>
            <p className="mb-0 p-0">{this.props.statTitle}</p>
          </div>
        </CardBody>
        {!this.props.hideChart && (
          <Chart
            options={this.props.options}
            series={this.props.series}
            type={this.props.type}
            height={this.props.height ? this.props.height : 100}
          />
        )}
      </Card>
    );
  }
}
export default Particulier;
