import { useState, useEffect } from 'react';
import { TitleInput, Button } from './styles'
import { Header } from '../../types/Header';
import { getHeader, updateHeader } from '../../data/Header';
import Placeholder from 'react-bootstrap/Placeholder'
type Props = {
    id: string;
}
const UpdateHeader = ({id} : Props) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [header, setHeader] = useState<Header>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const get = async () => {
            const response = await getHeader(id);
            if(response.docId !== 'N/A'){
                setHeader(response);
                setTitle(response.title);
                setSubtitle(response.subtitle);
                setLoading(false);
            } else {
                alert('Não foi possivel obter o header! Atualize a pagina.');
            }
        }
        try{
            get();
        } catch (e) {
            console.log("Erro ao buscar infos: "+e);
        }
        return () => {
            setHeader(undefined);
        };        
    }, []);

    const update = async () => {
        if(header){
            try {
                await updateHeader({
                    docId: header.docId,
                    title: title,
                    subtitle: subtitle
                });
                window.location.reload();
            } catch (e) {
                console.log(e);
            }
        }
    }
    return(
        <>
            <div className="title">
                { loading &&
                    <Placeholder as="p" animation="wave"> 
                        <Placeholder xs={3} bg="light" />
                    </Placeholder>                    
                } 
                { !loading && header &&
                    ('Cabeçalho ' + header.docId.charAt(0).toLocaleUpperCase() + header.docId.slice(1))
                }                
            </div>
            <div className="d-flex justify-content-center">
                
                <div className="col-12 col-md-9 col-lg-7 col-xl-5 mt-2">
                    <div className="form-group row mb-3">
                        <label htmlFor="titulo" className="col-sm-2 col-form-label text-md-end">Titulo</label>
                        <div className="col-sm-10">
                            <TitleInput id="titulo" className='form-control ' value={title} onChange={(e) => setTitle(e.target.value)} />     
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="titulo" className="col-sm-2 col-form-label text-md-end">Subtitulo</label>
                        <div className="col-sm-10">
                            <TitleInput id="titulo" className='form-control ' value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />     
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button onClick={update}>
                            <i className='bi bi-pencil me-2'/>
                            Atualizar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateHeader;