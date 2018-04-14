import React, {Component} from 'react';
import './css/Favorito.css';

class Favorito extends Component {
    render() {

        const {user, favorito} = this.props;

        return (
            <li>
                <div className="Panel_favoritos">
                    <div className="Txt_usuario">
                        A {user} le gusta:
                    </div>
                    <hr />
                    <div className="Txt_fav">
                        {favorito}
                    </div>
                </div>
            </li>
        );
    }
}

export default Favorito;

