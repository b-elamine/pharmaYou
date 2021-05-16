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
import PerfectScrollbar from "react-perfect-scrollbar";
import AutoComplete from "./autoCompleteComponent";
import { readRemoteFile } from "react-papaparse";

import {
  Justify,
  Calculator,
  Plus,
  FileText,
  ListUl,
  RecordCircleFill,
  // RecordCircleFill,
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
          title={props.block_note}
          className="ml-2 font-weight-bold font-medium-2"
        >
          {props.block_title}
        </span>
      </div>
      <small className="ml-3 font-small-2"> {props.block_note} </small>

      {/* <div className="d-flex mt-1 flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 ml-3">
        <div className="user-info text-truncate ml-xl-50 ml-0">
          <span className=" font-weight-bold d-block text-truncate mb-0 font-medium-1">
            {props.name}
          </span>
        </div>
      </div> */}
    </CardBody>
  );
};

class QuatriemeSection extends React.Component {
  state = {
    suggestions: [],
    medNames: [],
    medPrises: [],
    commentaires_notes: [],
    inputs: [
      {
        id: 1,
        produit: "",
        quantité: 1,
        prix: 0,
      },
    ],

    total: 0,
    note_patient: "",
    commentaire_interne: "",
    commentaire_interne_edited: "",
  };
  // componentDidUpdate() {
  //   // if (this.props.commentaires_notes && this.state.commentaires_notes.length===0){
  //   //   this.setState({
  //   //     commentaires_notes: this.props.commentaires_notes,
  //   //   });
  //   // }

  //   console.log(this.props.commentaires_notes)
  // }

  componentDidMount() {
    readRemoteFile(require("../../../medicamentsPrix/medicamentsPrix.txt"), {
      complete: (results) => {
        let medicaments = results.data.filter((item) => item[0] !== "");
        let suggestions = [];
        for (let index = 0; index < medicaments.length; index++) {
          suggestions[index] = {
            title: medicaments[index][0],
            price: medicaments[index][1],
          };
        }
        this.setState({ suggestions });
      },
    });
    this.setState({
      commentaire_interne: this.props.note_admin,
    });
  }

  // componentDidUpdate(){
  //   if(this.state.commentaire_interne.length===0 && this.props.ordonnance.note_admin){
  //     this.setState({
  //       commentaire: this.props.ordonnance.note_admin
  //     })

  //   }
  // }

  quantité_input_change_handler(value, id) {
    this.setState((prev_state, props) => {
      const updated_produit_index = prev_state.inputs.findIndex((el) => {
        return el.id === id;
      });
      const updated_produit = {
        ...this.state.inputs[updated_produit_index],
      };

      updated_produit.quantité = isNaN(parseInt(value)) ? "" : parseInt(value);
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
      updated_produit.prix = isNaN(parseFloat(value)) ? "" : parseFloat(value);
      const inputs = [...this.state.inputs];
      inputs[updated_produit_index] = updated_produit;
      return {
        inputs: inputs,
      };
    });
  }
  produit_input_change_handler(value, id) {
    this.setState((prev_state, props) => {
      const updated_produit_index = prev_state.inputs.findIndex((el) => {
        return el.id === id;
      });
      const updated_produit = {
        ...this.state.inputs[updated_produit_index],
      };
      let indexfound = this.state.suggestions.findIndex(
        (item) => item.title === value
      );
      if (indexfound !== -1) {
        updated_produit.prix = isNaN(
          parseFloat(this.state.suggestions[indexfound].price)
        )
          ? 0
          : parseFloat(this.state.suggestions[indexfound].price);
        indexfound = -1;
      }
      updated_produit.produit = value;
      const inputs = [...this.state.inputs];
      inputs[updated_produit_index] = updated_produit;
      return {
        inputs: inputs,
      };
    });
  }

  note_patient_input_handle_change(value) {
    this.setState((prev_state, props) => {
      return {
        note_patient: value,
      };
    });
  }
  commentaire_interne_input_handle_change(value) {
    this.setState((prev_state, props) => {
      return {
        commentaire_interne_edited: value,
      };
    });
  }

  add_commentaire_handler() {
    if (this.state.commentaire_interne.length === 0) {
      return alert("Il faut entrer un commentaire");
    }
    // const new_commentaire_id =
    //   this.state.commentaires_notes.length === 0
    //     ? 1
    //     : this.state.commentaires_notes.slice(-1)[0].id + 1;
    // const new_commentaire_image =
    //   this.state.commentaires_notes.length === 0
    //     ? ""
    //     : this.state.commentaires_notes.slice(-1)[0].image;
    // const new_commentaire_interne = {
    //   id: new_commentaire_id,
    //   commentaire: this.state.commentaire_interne,
    //   type: "Commentaire interne",
    //   image: new_commentaire_image,
    //   nom: "utilisateur connecter",
    // };
    this.setState({
      // commentaires_notes: new_comment_array,
      commentaire_interne: this.state.commentaire_interne_edited,
      commentaire_interne_edited: "",
    });
  }
  add_note_handler() {
    if (this.state.note_patient.length === 0) {
      return alert("Il faut entrer une note");
    }
    const new_note_id = this.state.commentaires_notes.slice(-1)[0].id + 1;
    const new_note_image = this.state.commentaires_notes.slice(-1)[0].image;
    const new_note_patient = {
      id: new_note_id,
      commentaire: this.state.note_patient,
      type: "Note envoyé au client",
      image: new_note_image,
      nom: "utilisateur connecter",
    };
    const new_comments_notes_array = this.state.commentaires_notes;
    new_comments_notes_array.push(new_note_patient);
    this.setState({
      commentaires_notes: new_comments_notes_array,
      note_patient: "",
    });
  }

  render() {
    // console.log(this.state.commentaire_interne)
    let total = 0;
    const total_array = this.state.inputs.map((item) => {
      return item.quantité * item.prix;
    });
    total_array.forEach((item) => {
      total = total + item;
    });
    total = total.toFixed(2);
    const options = [
      { value: "classique", label: "Ordonnance Classique" },
      // { value: "option_2", label: "Option 2" },
      // { value: "option_3", label: "Option 3" },
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
            value={this.state.note_patient}
            onChange={(e) => {
              this.note_patient_input_handle_change(e.target.value);
            }}
          />
          <Row>
            <Col>
              <Button
                className="mt-2 bg-success text-white float-right mr-2 p-75  mb-2"
                onClick={() => {
                  this.add_note_handler();
                }}
              >
                Envoyer
              </Button>
            </Col>
          </Row>
        </Badge>

        <Badge className="bg-rgba-primary mt-2">
          <CardTitle className="font-medium-3 light-secondary text-left ml-2 mt-1">
            Informations internes
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
                    placeholder="Ordonnance classique"
                    name="Professions"
                    options={options}
                  />
                  {this.state.inputs.map((item) => {
                    return (
                      <AutoComplete
                        key={item.id}
                        id="produits"
                        suggestions={this.state.suggestions}
                        className="form-control mb-2"
                        filterKey="title"
                        suggestionLimit={20}
                        placeholder="Produit 1,produit 2,produit 3"
                        // onKeyDown={(e, inpt)=>{
                        //   if(e.keyCode === 13){
                        //     console.log(inpt)
                        //   }
                        // }}
                        item={item.id}
                        setitemchosen={(value, id) =>
                          this.produit_input_change_handler(value, id)
                        }
                        onSuggestionClick={(e) => {
                          this.produit_input_change_handler(
                            e.currentTarget.innerText,
                            item.id
                          );
                        }}
                        onChange={(e) => {
                          this.produit_input_change_handler(
                            e.target.value,
                            item.id
                          );
                        }}
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
                            {item.id === 1 ? (
                              <Label className="mt-0" for="quantité_input">
                                <strong>Quantité</strong>
                              </Label>
                            ) : null}
                            <Input
                              type="number"
                              id="quantité_input"
                              value={item.quantité}
                              min="1"
                              max="10"
                              step="1"
                              bsSize="sm"
                              className={`w-50 mt-${
                                item.id === 1 ? "4" : "1"
                              } text-center`}
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
                            {item.id === 1 ? (
                              <Label className="mt-0" for="prix_input">
                                <strong>Prix</strong>
                              </Label>
                            ) : null}
                            <Input
                              type="number"
                              id="prix_input"
                              value={item.prix}
                              bsSize="sm"
                              min="1"
                              max="250"
                              className={`w-50 mt-${
                                item.id === 1 ? "4" : "1"
                              } text-center`}
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
                    <strong className="">{total} €</strong>
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
            value={this.state.commentaire_interne_edited}
            onChange={(e) => {
              this.commentaire_interne_input_handle_change(e.target.value);
            }}
          />
          <Button
            color="primary"
            className="mt-2 text-white float-right font-weight-bold mr-2 p-75  mb-2"
            onClick={() => {
              this.add_commentaire_handler();
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
              <ListUl className="mr-1" size={17} />
              Historique commentaire et note du patient
            </CardTitle>
            <div style={{ height: "250px" }}>
              <PerfectScrollbar
                options={{
                  wheelPropagation: false,
                }}
              >

                 {this.props.commentaires_notes.length === 0 ? null : (
                  this.props.commentaires_notes.map((comment) => {
                    return (
                      <CommentaireBlock
                        key={comment.id}
                        icon_color={comment.color}
                        block_title={comment.title}
                        block_note={comment.text}
                        name="admin name"
                      />
                    );
                  })
                )}
              </PerfectScrollbar>
            </div>
          </Card>
        </Badge>
      </Card>
    );
  }
}

export default QuatriemeSection;
