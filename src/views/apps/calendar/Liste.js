import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";

class List extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>GridOptions</CardTitle>
        </CardHeader>
        <CardBody>
          <Table borderless responsive striped>
            <thead>
              <tr>
                <th />
                <th className="text-center">
                  <div>Extra Small</div>
                  <small>&lt;576</small>
                </th>
                <th className="text-center">
                  <div> Small</div>
                  <small>≥576px</small>
                </th>
                <th className="text-center">
                  <div> Medium</div>
                  <small>≥768px</small>
                </th>
                <th className="text-center">
                  <div> Large</div>
                  <small>≥992px</small>
                </th>
                <th className="text-center">
                  <div> Extra Large</div>
                  <small>≥1200px</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-nowrap" scope="row">
                  Max container width
                </th>
                <td>None (auto)</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Class prefix
                </th>
                <td>
                  <code>.col-</code>
                </td>
                <td>
                  <code>.col-sm-</code>
                </td>
                <td>
                  <code>.col-md-</code>
                </td>
                <td>
                  <code>.col-lg-</code>
                </td>
                <td>
                  <code>.col-xl-</code>
                </td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  # of columns
                </th>
                <td colSpan="5">12</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Gutter width
                </th>
                <td colSpan="5">30px (15px on each side of a column)</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Nestable
                </th>
                <td colSpan="5">Yes</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Column ordering
                </th>
                <td colSpan="5">Yes</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}
export default List;
