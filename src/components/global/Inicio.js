import React, { Component } from "react";
import "./css/Inicio.css";

class Inicio extends Component {
    constructor(){
        super();

        this.handleClicTest = this.handleClicTest.bind(this);
    }

    handleClicTest(){
        alert("Hola mundo");
    }

    render() {
        return (
            <div className="Inicio">

                <div className="Pulpo">
                    <img className="Imagen" src="http://octodex.github.com/images/kimonotocat.png" alt="Imagen" />
                </div>

                <div className="Formder">
                    <div className="DivCenter">
                        <label>GITFIND</label>
                    </div>
                    <div className="DivbRight">
                    <input type="text" id="input" className="Input-text" placeholder="Ingrese su nombre"/>
                    </div>
                    <div className="DivbRight">
                    <button className="Btn" onClick={this.handleClicTest} type="button"><span>ENTRAR</span></button>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Inicio;