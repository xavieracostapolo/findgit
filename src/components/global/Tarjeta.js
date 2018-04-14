import React, {Component} from 'react';
import estrella from './images/estrella.svg';
import './css/Tarjeta.css';

class Tarjeta extends Component {
    render() {
        const item = this.props.item;
        const getRepoName = this.props.getRepoName;
        return (
            <div className="Tarjeta_panel">
                <div className="Repo_name">
                    {item.name}
                </div>
                <hr />
                <div className="Repo_desc">
                    {item.description}
                </div>
                <div className="Repo_estrella">
                    Estrellas: {item.stargazers_count}
                </div>
                <div className="Btnbar">
                    <div className="Btnlink">
                        <a className="BtnLink" href={item.html_url} target="_blank">VISITAR REPO</a>
                    </div>
                    <div className="Btnestrella">
                        <input className="btnFav" type="image"  src={estrella} alt="Estrella" onClick={() => getRepoName(item.name)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tarjeta;