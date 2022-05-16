import Content from '../template/content'
import Tabs from '../template/tabs'
import { storage } from '../../../util/FirebaseConnection';
import {FormEvent, Fragment, useState} from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Alert } from 'react-bootstrap';

type Material = {
    rl03: boolean, 
    rl05: boolean, 
    rl07: boolean, 
    rl09: boolean,
    rl11: boolean, 
    rl13: boolean, 
    mg05: boolean, 
    mg09: boolean,
    mg11: boolean, 
    mg13: boolean
}

const NewPost = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [end, setEnd] = useState('');
    const [urlPhoto, setUrlPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [material, setMaterial] = useState<Material>({rl03: false, rl05: false, rl07: false, rl09: false,
                                                        rl11: false, rl13: false, mg05: false, mg09: false,
                                                        mg11: false, mg13: false});    

    const insertPhoto = async (file: File) => {
        if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
            let newFile = ref(storage, `Portfolio/${title}`);
            try{
                let upload = await uploadBytes(newFile, file);
                setUrlPhoto(await getDownloadURL(upload.ref));

                setMessage('Post enviado com sucesso!');
                setEnd('success');
                setShow(true);
            } catch (e) {
                setMessage('Erro ao enviar post!');
                setEnd('error');
                setShow(true);
            }
       } else {
           setMessage('Insira um formato valido de imagem!');
           setEnd('error');
           setShow(true);
       }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('urlPhoto') as File;
        if(file.size !== 0 && title !== ''){
            insertPhoto(file);
        } else {
            setMessage('Insira uma imagem!');
            setEnd('error');
            setShow(true);
        }
    }

    return(
        <Fragment>
            <Tabs title1="Novo" link1="/admin/portfolio/newpost" title2="Listar" link2="/admin/portfolio/listposts" active={0}/>
            <Content>
                <h1 className="display-4 mb-3">Adicionar Post</h1>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="form-group row mb-3">
                        <label htmlFor="title" className="col-sm-2 col-lg-1 col-form-label">Titulo</label>
                        <div className="col-sm-10 col-lg-3">
                            <input type="text" className="form-control" id="title" placeholder="Nome do post" />
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="description" className="col-sm-2 col-lg-1 col-form-label">Descrição</label>
                        <div className="col-sm-10 col-lg-6">
                            <textarea className="form-control" id="description" rows={3} placeholder="Insira o texto aqui..."></textarea>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="duration" className="col-sm-2 col-lg-1 col-form-label">Duração</label>
                        <div className="col-sm-10 col-lg-2">
                            <input type="time" className="form-control" id="duration"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="material" className="col-sm-2 col-lg-1 col-form-label">Material</label>
                        <div className="col-sm-10 col-lg-5 mt-1">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" name="rl03" type="checkbox" id="rl03" value="RL 03" onChange={(e) => material.rl03 === false ? true : false}/>
                                <label className="form-check-label" htmlFor="rl03">RL 03</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl05" value="RL 05" />
                                <label className="form-check-label" htmlFor="rl05">RL 05</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl07" value="RL 07" />
                                <label className="form-check-label" htmlFor="rl07">RL 07</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl09" value="RL 09"/>
                                <label className="form-check-label" htmlFor="rl09">RL 09</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl11" value="RL 11"/>
                                <label className="form-check-label" htmlFor="rl11">RL 11</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl13" value="RL 13"/>
                                <label className="form-check-label" htmlFor="rl13">RL 13</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg05" value="MG 05"/>
                                <label className="form-check-label" htmlFor="mg05">MG 05</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg07" value="MG 07"/>
                                <label className="form-check-label" htmlFor="mg07">MG 07</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg09" value="MG 09" />
                                <label className="form-check-label" htmlFor="mg09">MG 09</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg11" value="MG 11" />
                                <label className="form-check-label" htmlFor="mg11">MG 11</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg13" value="MG 13" />
                                <label className="form-check-label" htmlFor="mg13">MG 13</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="category" className="col-sm-2 col-lg-1 col-form-label">Estilo</label>
                        <div className="col-sm-10 col-lg-2">
                            <select className="form-control" id="category" defaultValue="Selecione">
                                <option value="Selecione">Selecione...</option>
                                <option value="Blackwork">Blackwork</option>
                                <option value="Old School">Old School</option>
                                <option value="Sketch">Sketch</option>
                                <option value="Fine Line">Fine Line</option>
                                <option value="Lettering">Lettering</option>
                                <option value="Realismo">Realismo</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="date" className="col-sm-2 col-lg-1 col-form-label">Data</label>
                        <div className="col-sm-10 col-lg-2">
                            <input type="date" className="form-control" id="date"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="urlPhoto" className="col-sm-2 col-lg-1 col-form-label">Foto</label>
                        <div className="col-sm-10 col-lg-4 custom-file">
                            <input type="file" name="urlPhoto" className="form-control" id="urlPhoto" accept="image/png, image/jpeg, image/jpg"/>
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary me-2"><i className="bi bi-sd-card"></i> Salvar</button>
                            <button type="reset" className="btn btn-outline-secondary" onClick={(e) => setShow(false)}><i className="bi bi-eraser"></i> Limpar</button>
                        </div>
                    </div>
                </form> 
                {material.rl03.toString()}
                {end === 'success' && show === true &&
                    <Alert variant="success" onClose={() => setShow(false)} dismissible>
                        {message}
                    </Alert>
                }
                {end === 'error' && show === true &&
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        {message}
                    </Alert>
                }
            </Content>
        </Fragment>
    );
};

export default NewPost;