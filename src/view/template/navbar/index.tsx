import './styles.css'
import {Link} from 'react-router-dom';

export const Menu = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded menu-area">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar nav collapse navbar-collapse justify-content-around menu" id="navbarsExample08">
                        <h2><Link to='/Info'>Informações</Link></h2>
                        <h2><Link to='/Portfolio'>Portfolio</Link></h2>
                        <h2><Link to='/Orcamento'>Orçamento</Link></h2>
            </div>
        </nav>
    );    
}