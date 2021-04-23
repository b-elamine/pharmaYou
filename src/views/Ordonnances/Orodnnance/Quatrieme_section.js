import React from "react";
import {
  Badge,
  Card,
  CardTitle,
  Input,
  Button,
  Col,
  Row,
  Label,
  FormGroup,
  CardBody,
} from "reactstrap";
import {
  Justify,
  Calculator,
  Plus,
  FileText,
  ListUl,
  RecordCircleFill,
} from "react-bootstrap-icons";
import Select from "react-select";

import Image from "../../../assets/img/portrait/small/avatar-s-2.jpg";

const CommentaireBlock = (props) => {
  return (
    <CardBody>
      <div className="user-info text-truncate ml-xl-50 ml-0 mb-50">
        <RecordCircleFill
          size={16}
          style={{
            color: props.icon_color,
            marginLeft: "0px",
          }}
        />
        <span
          title={props.block_type}
          className="ml-2 font-weight-bold font-medium-2"
        >
          {props.block_type}
        </span>
      </div>
      <small className="ml-3 font-small-2"> {props.block_note} </small>

      <div className="d-flex mt-1 flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 ml-3">
        <div className="user-img ml-xl-0 ml-3">
          <img
            className="img-fluid rounded-circle"
            height="32"
            width="32"
            src={props.image_path}
            alt="hey"
          />
        </div>
        <div className="user-info text-truncate ml-xl-50 ml-0">
          <span className=" font-weight-bold d-block text-bold-500 text-truncate mb-0 font-medium-2">
            {props.name}
          </span>
        </div>
      </div>
    </CardBody>
  );
};

class QuatriemeSection extends React.Component {
  render() {
    const options = [
      { value: "option_1", label: "Option 1" },
      { value: "option_2", label: "Option 2" },
      { value: "option_3", label: "Option 3" },
    ];
    return (
      <Card>
        <Badge
          color="light-success text-left text-secondary"
          style={{ borderRadius: "20px" }}
        >
          <CardTitle className="font-medium-2 light-secondary text-left ml-2 mt-1">
            <Justify size={17} />
            Notes au patient
          </CardTitle>
          <Input
            type="textarea"
            name="note_patient"
            id="note_patient"
            placeholder="Notes"
            className="ml-2"
            style={{ width: "95%" }}
          />
          <Row>
            <Col>
              <p className="text-dark ml-2 mt-2">
                Pharmacien : Nom du pharmacien
              </p>
            </Col>
            <Col>
              <Button className="mt-2 bg-success text-white float-right mr-2 p-75  mb-2">
                Envoyer
              </Button>
            </Col>
          </Row>
        </Badge>

        <Badge className="bg-rgba-primary mt-2">
          <CardTitle className="font-medium-3 light-secondary text-left ml-2 mt-1">
            Informations interne
          </CardTitle>
          <CardTitle className="font-medium-1 light-secondary text-left ml-2 mt-1 font-weight-bold">
            <Calculator size={17} />
            Tarif
          </CardTitle>
          <Card className="ml-2 p-3">
            <Card>
              <Row>
                <Col>
                  <Select
                    className="w-75 mb-2"
                    classNamePrefix="select"
                    placeholder="Orconnance classique"
                    name="Professions"
                    options={options}
                  />
                  <Input
                    type="text"
                    id="produits"
                    placeholder="Produit 1,produit 2,produit 3"
                  />
                  <Button
                    color="primary"
                    size="sm"
                    style={{
                      color: "white",
                      marginTop: "20px",
                      marginLeft: "0px",
                      float: "left",
                    }}
                  >
                    <Plus className="ml-0 mr-1" size={17} />
                    Rajouter une ligne
                  </Button>
                </Col>
                <Col>
                  <Row className="ml-4">
                    <Col>
                      <FormGroup className="text-left">
                        <Label className="mt-2" for="quantité_input">
                          <strong>Quantité</strong>
                        </Label>
                        <Input
                          type="text"
                          id="quantité_input"
                          readOnly
                          value="1"
                          bsSize="sm"
                          className="w-50 mt-2 text-center"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="text-left">
                        <Label className="mt-2" for="prix_input">
                          <strong>Prix</strong>
                        </Label>
                        <Input
                          type="text"
                          id="prix_input"
                          value="39€"
                          bsSize="sm"
                          className="w-50 mt-2 text-center"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="w-75"></hr>
                  <p className=" text-dark ">
                    Total : {"\u00A0"} {"\u00A0"}{" "}
                    <strong className="">39€</strong>
                  </p>
                </Col>
              </Row>
            </Card>
          </Card>
          <CardTitle className="font-medium-1 light-secondary text-left ml-2 mt-1 font-weight-bold">
            <FileText size={17} />
            Commentaire interne
          </CardTitle>
          <Input
            type="textarea"
            name="commentaire_interne"
            id="commentaire_interne"
            placeholder="RAS"
            className="ml-2"
            style={{ width: "95%", marginTop: "20px" }}
          />
          <Button
            color="primary"
            className="mt-2 text-white float-right font-weight-bold mr-2 p-75  mb-2"
          >
            Sauvgarder
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Card className="p-2 mt-5 text-dark text-left">
            <CardTitle className="font-medium-4 light-secondary text-left ml-2 mt-1 font-weight-bold">
              <ListUl size={17} />
              Historique commentaire et note du patient
            </CardTitle>
            <CommentaireBlock 
            icon_color ="#fa680c"
            block_type="Commentaire interne"
            block_note="Client reloue ce fdp"
            image_path={Image}
            name="Zongo meryouli"
            />
            <CommentaireBlock 
            icon_color ="#fa680c"
            block_type="Commentaire interne"
            block_note="Un tres bon client"
            image_path={Image}
            name="Bensnane rahmoune"
            />
            <CommentaireBlock 
            icon_color ="#28c76f"
            block_type="Note client"
            block_note="2 dose de brygabaline, 2 fois par jour "
            image_path={Image}
            name="Djaluidji bouffon"
            />
          </Card>
        </Badge>
      </Card>
    );
  }
}

export default QuatriemeSection;
