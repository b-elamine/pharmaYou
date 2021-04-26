import React from "react"
import {
    Button,
    Label,
    Input,
  } from "reactstrap"
import logo from "../../../../assets/img/logo/logo_pharmaYou.PNG"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class N_Login extends React.Component {
    render() {
        return(
            
            <div >
                <div className="d-flex flex-sm-row justify-content-center">
                <img alt="Loading problem" style={{width:"12rem"}} src={logo}/>
                </div>
                <div
                style={{marginTop:"2rem"}}
                >
                    <h3>Bienvenu sur l'interface admin<br/>PharmaYou !</h3>
                </div>
                <div style={{
                     width:"28rem",
                     marginTop:"3rem"
                     }} >
                    <div style={{marginBottom:"1rem"}} >
                    <Label>E-mail</Label>
                    <Input placeholder="example@abc.xyz"/>
                    </div>
                    <div style={{marginBottom:"1rem"}} >
                    <Label>Mot de passe</Label>
                    <small><a href="/#" style={{color:"orange", float:"right"}} >Mot de passe oublié ?</a></small>
                    <Input type="password" placeholder="Entrer le mot de passe"/>
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