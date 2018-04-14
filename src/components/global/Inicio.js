import React, { Component } from "react";
//import { BrowserRouter as Router } from 'react-router-dom';
import "./css/Inicio.css";

class Inicio extends Component {
    constructor(){
        super();

        this.state = {
            nombre: ''
        }

        this.handleClicTest = this.handleClicTest.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChangedInput = this.handleChangedInput.bind(this);
    }

    handleClicTest = () => {
        this.saveState(this.state);
        this.props.history.push('/buscar');
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.saveState(this.state);
            this.props.history.push('/buscar');
        }
    }

    handleChangedInput = (e) => {
        this.setState({
            nombre: e.target.value
        });
    }

    saveState= (state) => {
        localStorage.setItem('data', JSON.stringify(state));
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
                    <input type="text" id="input" className="Input-text" value = {this.state.nombre} onChange={this.handleChangedInput}  onKeyPress={this.handleKeyPress} placeholder="Ingrese su nombre"/>
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