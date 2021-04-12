import React from "react"
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import {
  Eye,
  Code,
  Facebook,
  Instagram,
  GitHub,
  Twitter,
  Sun
} from "react-feather"
import { badgePillIcons } from "./BadgePillSourceCode"

class BadgePillIcons extends React.Component {
  state = {
    activeTab: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Icons</CardTitle>
            <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTab("2")
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Badge pill color="primary" className="mr-1 mb-1">
                  <Facebook size={12} />
                </Badge>
                <Badge pill color="success" className="mr-1 mb-1">
                  <Instagram size={12} />
                </Badge>
                <Badge pill color="info" className="mr-1 mb-1">
                  <Twitter size={12} />
                </Badge>
                <Badge pill color="danger" className="mr-1 mb-1">
                  <GitHub size={12} />
                </Badge>
                <Badge pill color="warning" className="mr-1 mb-1">
                  <Sun size={12} />
                </Badge>
              </TabPane>
               <TabPane className="component-code" tabId="2">{badgePillIcons}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BadgePillIcons
