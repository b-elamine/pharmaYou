import React from "react"
import {
    Button,
    Label,
    Input,
  } from "reactstrap"
import logo from "../../../../assets/img/logo/logo_pharmaYou.PNG"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import validator from"validator"


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

    //validation
    // componentDidUpdate () {
    //     this.validation(e)
    // }
    validation(e) {
        this.setState({
            email:e.target.value
        })
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
                    onChange={(e) => this.validation(e)}
                    type="email"
                    placeholder={this.state.email}
                    // value={this.state.email}
                    required
                    />
                    </div>
                    <div style={{heignt:"1rem"}} >
                        {this.state.valid ? (
                        <small>Entrer un email valid</small>
                        ): "" }
                        
                    </div>
                    <div style={{marginBottom:"1rem"}} >
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