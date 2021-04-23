import React from "react"
import { Button } from "reactstrap"
import { connect } from "react-redux"
import {
  handleSidebar,
  handleSelectedEvent
} from "../../../redux/actions/calendar/index"
const AddEventButton = props => {
  return (
    <Button.Ripple
      color="primary"
      onClick={() => {
        props.handleSidebar(true)
        props.handleSelectedEvent(null)
      }}
      // className="d-sm-block d-none"
    >
      Ajouter un créneau
    </Button.Ripple>
  )
}

export default connect(null, { handleSidebar, handleSelectedEvent })(
  AddEventButton
)
