import * as C from './styles'
import {Post} from '../../../../../model/Post'
import { useState } from 'react'
type Props = {
    content: Post
}
const Card = ({content}:Props) => {
    const [active, setActive] = useState(0);
    const show = () => {
        if(active === 0){
            setActive(1);
        } else {
            setActive(0);
        }
    }

    return(
        <div className="col">
            <div className="card">
                <img src={content.urlPhoto} className="card-img-top" alt={content.title}/>
                <div className="card-body">
                    <h4 className="card-title">{content.title}</h4>
                    <p className="card-text"><strong>Estilo: </strong>{content.category}</p>
                    <p className="card-text"><strong>Tempo Total: </strong>{content.duration}</p>
                    <p className="card-text"><strong>Material: </strong>{content.material}</p>
                    <C.Button onClick={show}>
                        {active === 0 && <i className="bi bi-three-dots"></i>}
                        {active === 1 && <p className="card-text">{content.description}</p>}
                    </C.Button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{content.date}</small>
                </div>
            </div>
        </div>
    );
}

export default Card;