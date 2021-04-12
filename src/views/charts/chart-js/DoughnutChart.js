import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Doughnut } from "react-chartjs-2"

const $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $label_color = "#1E1E1E"
const themeColors = [$primary, $success, $danger, $warning, $label_color]

const data = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "My First dataset",
      data: [2478, 5267, 734, 784, 433],
      backgroundColor: themeColors
    }
  ]
}

const options = {
  maintainAspectRatio: false,
  responsive: true,
  responsiveAnimationDuration: 500,
  title: {
    display: true,
    text: "Predicted world population (millions) in 2050"
  }
}

class DoughnutCharts extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Doughnut Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Doughnut data={data} options={options} height={300} />
        </CardBody>
      </Card>
    )
  }
}
export default DoughnutCharts
