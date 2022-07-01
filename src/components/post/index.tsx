import { Post as PostProps } from '../../types/Post'
import Image from '../../assets/placeholder500.png'
type Props = {
    content: PostProps,
    align: string,
    textAlign: string
}

const Post = ({content, align, textAlign} : Props) => {
    return(
        <div className="row featurette">
            <div className={`col-md-5 my-auto ${align} d-flex`}>
                <img className={`featurette-image img-fluid mx-auto ${align === '' ? 'ms-md-auto' : 'me-md-auto'}`} src={content.urlPhoto} alt={content.title}/>
            </div>
            <div className={`col-md-7 ${textAlign}`}>
                <h2 className="featurette-heading mt-4 mt-md-0">{content.title}</h2>
                <p className="lead about mt-2">{content.description}</p>
                <p className="lead"><strong className='featurette-heading'>Estilo: </strong>{content.category}</p>
                <p className="lead"><strong>Tempo total: </strong>{content.duration}</p>
                <p className="lead"><strong>Material: </strong>{content.material}</p>
                <p className="text-muted small">{content.date}</p>
            </div>
        </div>
    )
}

export default Post;