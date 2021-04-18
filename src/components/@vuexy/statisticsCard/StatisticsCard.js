import React from "react";
import { Card, CardBody } from "reactstrap";
import Chart from "react-apexcharts";

class StatisticsCards extends React.Component {
  render() {
    return (
      <Card
        style={{
          borderRadius: "28px",
          width : "auto",
          height : "auto",
          justifyContent:"space-between"
        }}
      >
        <CardBody

          style={{ borderRadius: "28px" }}
          className={` ${
            this.props.className ? this.props.className : "stats-card-body"
          } d-flex ${
            !this.props.iconRight && !this.props.hideChart
              ? "flex-column align-items-start"
              : this.props.iconRight
              ? "justify-content-between flex-row-reverse align-items-center"
              : this.props.iconLeft
              ? "justify-content-end flex-row align-items-center"
              : this.props.hideChart && !this.props.iconRight
              ? "justify-content-center flex-column text-center"
              : null
          } ${!this.props.hideChart ? "pb-0" : "pb-50"}  pt-1 ${
            this.props.bg_color ? "gradient-light-" + this.props.bg_color : "bg-rgba-primary"
          }`}
        >
          <div className="icon-section h-75">
            <div
              className={`avatar avatar-stats  ${
                this.props.iconBg
                  ? `bg-rgba-${this.props.iconBg}`
                  : "bg-rgba-primary"
              }`}
            >
              <div className="avatar-content">{this.props.icon}</div>
            </div>
          </div>
          <div className="title-section">
            <h4 className="text-bold-600 mt-1 mb-25 ">{this.props.stat}</h4>

            <p className="mb-0 p-0 text-dark font-medium-25">{this.props.statTitle}</p>
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
export default StatisticsCards;


