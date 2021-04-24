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
            alt="icon"
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
  state = {
    inputs: [
      {
        id: 1,
        produit: "",
        quantité: 1,
        prix: 0,
      },
    ],
    total: 0,
  };

  quantité_input_change_handler(value, id) {
    this.setState((prev_state, props) => {
      const updated_produit_index = prev_state.inputs.findIndex((el) => {
        return el.id === id;
      });
      const updated_produit = {
        ...this.state.inputs[updated_produit_index],
      };

      updated_produit.quantité = isNaN(parseInt(value)) ? 0 : parseInt(value);
      const inputs = [...this.state.inputs];
      inputs[updated_produit_index] = updated_produit;
      return {
        inputs: inputs,
      };
    });
  }
  prix_input_change_handler(value, id) {
    this.setState((prev_state, props) => {
      const updated_produit_index = prev_state.inputs.findIndex((el) => {
        return el.id === id;
      });
      const updated_produit = {
        ...this.state.inputs[updated_produit_index],
      };

      updated_produit.prix = isNaN(parseInt(value)) ? 0 : parseInt(value);
      const inputs = [...this.state.inputs];
      inputs[updated_produit_index] = updated_produit;
      console.log(inputs);
      return {
        inputs: inputs,
      };
    });
  }

  render() {
    console.log(this.state);
    // const total_array = this.state.inputs.map((item) => {
    //   return item.quantité * item.prix;
    // });
    // let total = 0;
    // total_array.forEach((item) => {
    //   total = total + item;
    // });
    // console.log("the total is : ", total);

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
              <Button
                className="mt-2 bg-success text-white float-right mr-2 p-75  mb-2"
                onClick={() => {
                  alert("Envoyer une note au client.");
                }}
              >
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
                  {this.state.inputs.map((item) => {
                    return (
                      <Input
                        key={item.id}
                        type="text"
                        id="produits"
                        className="mb-2"
                        placeholder="Produit 1,produit 2,produit 3"
                      />
                    );
                  })}
                  <Button
                    color="primary"
                    size="sm"
                    style={{
                      color: "white",
                      marginTop: "20px",
                      marginLeft: "0px",
                      float: "left",
                    }}
                    onClick={() => {
                      this.setState((prev_state, props) => {
                        const new_item_id =
                          prev_state.inputs.slice(-1)[0].id + 1;
                        const new_num_input = [
                          ...prev_state.inputs,
                          {
                            id: new_item_id,
                            produit: "",
                            quantité: 1,
                            prix: 0,
                          },
                        ];
                        return {
                          inputs: new_num_input,
                        };
                      });
                    }}
                  >
                    <Plus className="ml-0 mr-1" size={17} />
                    Rajouter une ligne
                  </Button>
                </Col>
                <Col>
                  {this.state.inputs.map((item) => {
                    return (
                      <Row className="ml-4">
                        <Col>
                          <FormGroup className="text-left">
                            <Label className="mt-1" for="quantité_input">
                              <strong>Quantité</strong>
                            </Label>
                            <Input
                              type="number"
                              id="quantité_input"
                              value={item.quantité}
                              min="1"
                              max="10"
                              step="1"
                              bsSize="sm"
                              className="w-50 mt-2 text-center"
                              onChange={(e) => {
                                this.quantité_input_change_handler(
                                  e.target.value,
                                  item.id
                                );
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup className="text-left">
                            <Label className="mt-1" for="prix_input">
                              <strong>Prix</strong>
                            </Label>
                            <Input
                              type="number"
                              id="prix_input"
                              value={item.prix}
                              bsSize="sm"
                              min="1"
                              max="250"
                              step="1"
                              className="w-50 mt-2 text-center"
                              onChange={(e) => {
                                this.prix_input_change_handler(
                                  e.target.value,
                                  item.id
                                );
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    );
                  })}
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
            onClick={() => {
              alert("Sauvegarder le commentaire interne");
            }}
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
            {this.props.commentaires_notes.map((comment) => {
              const icon_color =
                comment.type === "Commentaire interne" ? "#fa680c" : "#28c76f";
              return (
                <CommentaireBlock
                  key={comment.id}
                  icon_color={icon_color}
                  block_type={comment.type}
                  block_note={comment.commentaire}
                  image_path={comment.image}
                  name={comment.nom}
                />
              );
            })}
          </Card>
        </Badge>
      </Card>
    );
  }
}

export default QuatriemeSection;
