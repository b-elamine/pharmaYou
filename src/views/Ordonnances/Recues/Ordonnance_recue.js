import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DataTableCustom from "./DataTableCustom"
import StatisticsCard from '../../../components/@vuexy/statisticsCard/StatisticsCard'
import {Eye, Loader, AlertTriangle} from "react-feather"
class DataTables extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Ordonnance Reçues."
          breadCrumbParent="Ordonnance reçues"
        />
        <Row>
        <Col xl="2" lg="4" sm="4">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<AlertTriangle className="danger" size={30} />}
              stat="26"
              statTitle="Ordonnances non traité"
              bg_color ="danger"
            />
          </Col>
        <Col xl="2" lg="4" sm="4">
            <StatisticsCard
              hideChart
              bg_color="primary"
              iconBg="primary"
              icon={<Loader className="primary" size={22} />}
              stat="26"
              statTitle="Ordonnances En attente"
            />
          </Col>
        <Col xl="2" lg="4" sm="4">
            <StatisticsCard
              hideChart
              bg_color = 'warning'
              iconBg="primary"
              icon={<Eye className="primary" size={22} />}
              stat="26"
              statTitle="Ordonnances en cours de livraison"
            />
          </Col>
        <Col xl="2" lg="4" sm="4">
            <StatisticsCard
              hideChart
              bg_color="success"
              iconBg="primary"
              icon={<Eye className="primary" size={22} />}
              stat="26"
              statTitle="Ordonnances livré Aujourd'hui"
            />
          </Col>
          <Col sm="12">
            <DataTableCustom />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default DataTables
