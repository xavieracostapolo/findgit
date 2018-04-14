import React, {Component} from 'react';
import lupa from './images/lupa.svg';
import './css/Buscar.css';

import Tarjeta from './Tarjeta';

class Buscar extends Component {
    constructor(){
        super();

        this.state = {
            nombre : ''
        }

        this.handleClicBuscar = this.handleClicBuscar.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.getRepoName = this.getRepoName.bind(this);
    }

    componentDidMount(){
        var nom = JSON.parse(localStorage.data).nombre;
        this.setState({
            nombre : nom,
            repos: null
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            const { value } = this.input;

            if (value === '') {
                return;
            }

            this.cargarDatos(value);
        }
    }

    handleClicBuscar = (e) => {
        e.preventDefault();

        const { value } = this.input;

        if (value === '') {
            return;
        }

        this.cargarDatos(value);
    }

    cargarDatos = (value) => {
        fetch('https://api.github.com/search/repositories?q=' + value + '&sort=stars&order=desc')
            .then(response => response.json())
            .then(result => this.onSetResult(result, value));
    }

    onSetResult = (result, key) => {
        this.setState({ repos: result.items });
    }

    getRepoName = (reponame) => {
        alert(reponame);
    }

    render() {
        return (
            <div className="Container">
                <div className="Header">
                    <div className="HeaderLeft">
                        <span className="TextWelcome">Hola </span><span className="Nombre">{this.state.nombre}</span><span className="TextWelcome">!! Bienvenida a </span><span  className="Nombre">GITFIND</span>
                    </div>
                    <div className="HeaderRight">
                        <input className="Input-textBuscar" type="text" ref={node => this.input = node} onKeyPress={this.handleKeyPress}/>
                        
                        <input className="btnBuscar" type="image" src={lupa} alt="Lupa" onClick={this.handleClicBuscar}/>
                    </div>
                </div>
                <div>
                {
                    this.state.repos &&
                    this.state.repos.map(item => <Tarjeta key={item.id} item={item} getRepoName={(reponame) => {this.getRepoName(reponame)}} />)
                }
                </div>

            </div>
        );
    }
}

export default Buscar;