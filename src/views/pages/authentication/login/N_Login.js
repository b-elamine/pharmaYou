import React from "react"
import {
    Button,
    Label,
    Input,
  } from "reactstrap"
import logo from "../../../../assets/img/logo/logo_pharmaYou.PNG"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import validator from "validator"
import LoginJWT from "./LoginJWT"
import axios from "axios"
import { history } from "../../../../history"


let errormessage =""

class N_Login extends React.Component {
    state = {
        email: "example@abcd.xyz",
        password: "password",
        remember: false,
        valid : false,
      }
    //   handleLogin = e => {                    
    //     e.preventDefault()
    //     this.props.loginWithJWT(this.state)    //Use loginAction(LoginWithJwt) in this path redux/action.auth/loginAction    
    //   }

     loginWithJWT = user => {
        return dispatch => {
          axios
            .post("/api/authenticate/login/user", {
              email: user.email,
              password: user.password
            })
            .then(response => {
              var loggedInUser
      
              if (response.data) {
                loggedInUser = response.data.user
      
                dispatch({
                  type: "LOGIN_WITH_JWT",
                  payload: { loggedInUser, loggedInWith: "jwt" }
                })
      
                history.push("/")
              }
            })
            .catch(err => console.log(err))
        }
      }

   
    handl_mail_input(value) {
        this.setState((prev_state, props) => {
            return {
              email: value
            };
          });
    if (validator.isEmail(this.state.email)) {
        console.log("c'est valide ")
        this.setState({
            valid:true
        })
      } else {
        console.log('Enter valid Email!')
        this.setState({
            valid:false
        })
        errormessage ="Entrer un e-mail valide"
      }
    }
    
    

    render() {
        return(
            
            <div >
                <div className="d-flex flex-sm-row justify-content-center">
                <img alt="Loading problem" style={{width:"12rem"}} src={logo}/>
                </div>
                <div
                style={{marginTop:"2rem"}}
                >
                    <h3>Bienvenu sur l'interface admin<br/>PharmaYou !👋</h3>
                </div>
                <div style={{
                     width:"28rem",
                     marginTop:"3rem"
                     }} >
                    <div>
                    <Label>E-mail</Label>
                    <Input
                    valid={this.state.valid} 
                    onChange={(e) => this.handl_mail_input(e.target.value)}
                    type="email"
                    placeholder={this.state.email}
                    // value={this.state.email}
                    required
                    />
                    </div>
                    <label>
                        {this.state.valid === false ? (
                        <small style={{color:"red"}} >{errormessage}</small>
                        ): "" }
                        
                    </label>
                    <div style={{marginBottom:"1.5rem"}} >
                    <Label>Mot de passe</Label>
                    <small><a href="/#" style={{color:"orange", float:"right"}} >Mot de passe oublié ?</a></small>
                    <Input
                    type="password"
                    placeholder="Entrer le mot de passe"
                    onChange={e => this.setState({ password: e.target.value })}
                    required
                    />
                    </div>
                    <div style={{marginBottom:"1rem"}}>
                    <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        label="Se souvenir de moi"
                        />
                    </div>
                    <div>
                        <Button style={{
                        width:"28rem",
                         }}
                         color="primary"
                         onClick={this.loginWithJWT}
                         >
                             Se connecter
                        </Button>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default N_Login