import React, {Component} from 'react';
import { SegmentedControl } from 'segmented-control';
import { ToastContainer, toast } from 'react-toastify';

import lupa from './images/lupa.svg';
import finding from './images/puntos.svg';

import './css/Buscar.css';

import Tarjeta from './Tarjeta';
import Favorito from './Favorito';

const uuidV4 = require('uuid/v4');

class Buscar extends Component {
    constructor(){
        super();

        this.state = {
            nombre : '',
            repos : null,
            favoritos : [],
            showResultados : false,
            showFavoritos : false,
            finding : false,
        }

        this.handleClicBuscar = this.handleClicBuscar.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.getRepoName = this.getRepoName.bind(this);
    }

    componentDidMount(){
        var nom, favs;
        try {
            nom = JSON.parse(localStorage.data).nombre;
            if(localStorage.favoritos){
                favs =  JSON.parse(localStorage.favoritos);
            } else {
                favs = [];
            }
                
        } catch (error) {
            console.log(error);
            nom = '';
            favs = [];
        }
        
        this.setState({
            nombre : nom,
            repos: null,
            favoritos: favs,
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
        this.setState({
            finding: true,
            repos: []
        });
        fetch('https://api.github.com/search/repositories?q=' + value + '&sort=stars&order=desc')
            .then(response => response.json())
            .then(result => this.onSetResult(result, value));
    }

    onSetResult = (result, key) => {
        this.setState({ 
            repos: result.items,
            finding: false 
        });
    }

    getRepoName = (reponame) => {
        var favs = this.state.favoritos;
        favs.unshift(reponame);
        this.setState({
            favoritos : favs
        });
        
        try {
            localStorage.setItem('favoritos', JSON.stringify(favs)); 
            toast.success(reponame + ' es tu favorito!');   
        } catch (error) {
            toast.error("Paso algo mal.")
            console.log(error);
        }
        
    }

    doSomething = (newValue) => {
        if (newValue === 'Resultados'){
            this.setState({
                showFavoritos : false,
                showResultados : true
            });
        } else {
            this.setState({
                showFavoritos : true,
                showResultados : false
            });
        }
        console.log(newValue);
    }

    render() {           
        return (
            <div className="Container">
                <ToastContainer autoClose={3000} />
                <div className="Header">
                    <div className="HeaderLeft">
                        <span className="TextWelcome">Hola </span><span className="Nombre">{this.state.nombre}</span><span className="TextWelcome">!! Bienvenida a </span><span  className="Nombre">GITFIND</span>
                    </div>
                    <div className="HeaderRight">
                        <input className="Input-textBuscar" type="text" ref={node => this.input = node} onKeyPress={this.handleKeyPress} placeholder="Ingrese su busqueda"/>
                        
                        <input className="btnBuscar" type="image" src={lupa} alt="Lupa" onClick={this.handleClicBuscar}/>
                    </div>
                </div>
                <div className="Content">
                { this.state.showResultados && 
                    <div className="Panel_Resultados">
                        {
                            this.state.repos &&
                            this.state.repos.map(item => <Tarjeta key={item.id} item={item} getRepoName={(reponame) => {this.getRepoName(reponame)}} />)
                        }
                        {
                            !this.state.repos && <h2>Inicia la busqueda de tu repositorio o pasa a tus favoritos guardados.</h2>
                        }
                        {
                            this.state.finding && <img src={finding} alt="Buscando" width="100px" />
                        }
                    </div> 
                }
                { this.state.showFavoritos && 
                    <div className="Panel_Favorito">
                        <div className="Txtfavoritos">
                                FAVORITOS
                        </div>
                        <div className="Panel_ResultFav">
                            {
                                this.state.favoritos &&
                                this.state.favoritos.map(item => <Favorito key={uuidV4()} user={this.state.nombre} favorito={item} />)
                            }
                        </div>
                    </div>
                }
                </div>
                <div className="SegmentControl">
                    <SegmentedControl
                        name="oneDisabled"
                        options={[
                            { label: "Resultados", value: "Resultados", default: true },
                            { label: "Favoritos", value: "Favoritos" }
                        ]}
                        setValue={newValue => this.doSomething(newValue)}
                        style={{ width: 300, color: '#e91e63' }} // purple400
                    />
                </div>
            </div>
        );
    }
}

export default Buscar;