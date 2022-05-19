import {Post} from '../../../../../model/Post'

type Props = {
    content: Post,
    align: string,
    textAlign: string
}

export const Featurette = ({content, align, textAlign} : Props) => {
    return(
        <div className="row featurette">
            <div className={`col-md-7 ${align} ${textAlign}`}>
                <h2 className="featurette-heading">{content.title}</h2>
                <p className="lead">{content.description}</p>
                <p className="lead"><strong>Estilo: </strong>{content.category}</p>
                <p className="lead"><strong>Tempo total: </strong>{content.duration}</p>
                <p className="lead"><strong>Material: </strong>{content.material}</p>
                <p className="text-muted small">{content.date}</p>
            </div>
            <div className="col-md-5 my-auto">
                <img className="featurette-image img-fluid mx-auto" src={content.urlPhoto} alt={content.title}/>
            </div>
        </div>
    );
}