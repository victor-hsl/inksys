type Props = {
    name: string;
    url: string;
    align: string;
}

export const Featurette = ({name, url, align}:Props) => {
    return(
        <div className="row featurette">
            <div className={`col-md-7 ${align}`}>
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">{name}</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" src={url} alt="Generic placeholder image"/>
            </div>
        </div>
    );
}