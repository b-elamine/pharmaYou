import React from "react";
import { Card, CardBody } from "reactstrap";
import Chart from "react-apexcharts";

class StatisticsCards extends React.Component {
  render() {
    return (
      <Card
        style={{
          borderRadius: "28px",
          // width : "auto",
          // height : "auto",
          justifyContent: "space-between",
        }}
      >
        <CardBody
          style={{
            borderRadius: "28px",
            height: "170px",
            backgroundImage: `linear-gradient(${this.props.first_color}, ${this.props.second_color})`,
          }}
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
          } ${!this.props.hideChart ? "pb-0" : "pb-50"}  pt-1 
          
          `}
        >
          <div className="icon-section mt-0">
            <div
              className={`avatar avatar-stats ${
                this.props.iconBg
                  ? `bg-rgba-${this.props.iconBg}`
                  : "bg-rgba-primary"
              }`}
              style={{
                alignItems: "center",
                marginLeft: "20px",
                height: "45px",
                width: "50px",

              }}
            >
              <div className="avatar-content ml-50">{this.props.icon}</div>
            </div>
          </div>
          <div className="title-section ml-0 pl-0">
            <h4 className="text-bold-600 mt-1 mb-25 ml-75">
              {this.props.stat}
            </h4>
            <p className="mb-0 p-0 text-dark font-small-3 ml-0">
              {this.props.statTitle}
            </p>
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
