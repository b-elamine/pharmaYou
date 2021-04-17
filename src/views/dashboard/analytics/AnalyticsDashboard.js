import React from "react"
import { Row, Col } from "reactstrap"
<<<<<<< HEAD
=======
import ReactApexChart from "react-apexcharts"
>>>>>>> dfd374cb6cb446f0e48eebba19832d394befe012
// import ApexColumnCharts from "./ApexColumnCharts"
// import SalesCard from "./SalesCard"
// import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
// import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
// import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
// import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
// import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
// import SalesStat from "../../ui-elements/cards/analytics/Sales"
// import ActivityTimeline from "./ActivityTimeline"
// import DispatchedOrders from "./DispatchedOrders"
import DataTableCustom from "./DataTableCustom"
import "../../../assets/scss/pages/dashboard-analytics.scss"
// let $primary = "#7367F0",
//   $danger = "#EA5455",
//   $warning = "#FF9F43",
//   $info = "#00cfe8",
//   $primary_light = "#9c8cfc",
//   $warning_light = "#FFC085",
//   $danger_light = "#f29292",
//   $info_light = "#1edec5",
//   $stroke_color = "#e8e8e8",
//   $label_color = "#e7eef7",
//   $white = "#fff"

class AnalyticsDashboard extends React.Component {
  state = {  
    series: [{
      data: [21, 22, 10, 28]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: ["#FFFFFF"],
      plotOptions: {
        bar: {
          columnWidth: '10%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['John'],
          ['Joe'],
          ['Jake'],
          ['Peter'],
          
        ],
        labels: {
          style: {
            // colors: colors,
            font: 'none'
          }
        }
      }
    },
  
  
  };

  render() {
    return (
      <React.Fragment>
        {/* <Row className="match-height">
        <Col xl="3" lg="4" sm="">
            <h5>Particuliers</h5>
            <Particulier
              hideChart
              statTitle="Ordonnances En attente"
            />
          </Col>
        </Row>
        <Row className="match-height">
        <Col xl="3" lg="4" sm="">
            <h5>Profesionnels</h5>
            <Profesionnels
              hideChart
              statTitle="Ordonnances En attente"
            />
          </Col>
        </Row> */}
        <Row>
        <Col sm="12">
          <h5>Particuliers</h5>
            <div 
            style={{
            backgroundImage:"linear-gradient(#F1AE73 , #EEE4DC)",
            borderRadius:"15px",
            width:"100%",
            marginRight:"1rem",
            height:"12rem",
            textAlign:"center",
            padding:"1rem",
            marginBottom:"35px",
            }}>
              <div style={{width:"40%"}}>
              <Row noGutters="false">
              <Col>
              <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={"100%"}
              width={"90%"}
              />
              </Col>
              <Col>
              <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={"100%"}
              width={"90%"}
              />
              </Col>
              </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
          <h5>Profesionnels</h5>
            <div 
            style={{
            backgroundImage:"linear-gradient(#0C68FA , #00CFE8)",
            borderRadius:"15px",
            width:"100%",
            marginRight:"1rem",
            height:"12rem",
            textAlign:"center",
            padding:"1rem",
            marginBottom:"35px",
            }}>
              <div style={{width:"40%"}}>
              <Row noGutters="false">
              <Col>
              <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={"100%"}
              width={"90%"}
              />
              </Col>
              <Col>
              <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={"100%"}
              width={"90%"}
              />
              </Col>
              </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
          <h1>Dernières commandes reçus</h1>
            <DataTableCustom />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
