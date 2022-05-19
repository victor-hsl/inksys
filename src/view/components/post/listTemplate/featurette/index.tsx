import {Post} from '../../../../../model/Post'

type Props = {
    content: Post,
    align: string;
}

export const Featurette = ({content, align} : Props) => {
    return(
        <div className="row featurette">
            <div className={`col-md-7 ${align}`}>
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">{content.title}</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" src={content.urlPhoto} alt="Generic placeholder image"/>
            </div>
        </div>
    );
}