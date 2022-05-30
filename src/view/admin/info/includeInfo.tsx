import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment, useState} from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../../util/FirebaseConnection';
import { Alert } from 'react-bootstrap';


const IncludeInfo = () => {
    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState('');
    const infoRef = collection(db, "info");
    const [end, setEnd] = useState('');
    const [show, setShow] = useState(false);
    const [erro, setErro] = useState('');
    
    const insert = async () => {
        if(title === '' || description === ''){
            if(title !== '' && description === ''){
                setErro('Preencha a descrição!');
                setEnd('error');
                setShow(true);    
            }
            else if(title === '' && description !== ''){
                setErro('Preencha o titulo!');
                setEnd('error');
                setShow(true);
            } 
            else {
                setErro('Preencha todos os campos!');
                setEnd('error');
                setShow(true);
            }
        } else {
            try{
                await addDoc(infoRef, {
                    description: description.split("\n"),
                    title: title
                });
                setEnd('success');
                setShow(true);
            } catch (e) {
                console.error("Failed to add! ", e);
                setEnd('error');
                setErro('Erro! Falha ao contatar o servidor');
                setShow(true);
            }
            (document.getElementById("titulo") as HTMLInputElement).value='';
            (document.getElementById("descricao") as HTMLTextAreaElement).value='';
        }
    }

    const reset = () => {
        setTitle('');
        setDescription('');
        setEnd('');
        setErro('');
        setShow(false);
    }

    return(
        <Fragment>
            <Tabs title1="Incluir" link1="/admin/info/includeinfo" title2="Listar" link2="/admin/info/listinfo" active={0}/>
            <Content>
                <div className="">
                    <h1 className="display-4 mb-3">Incluir Info</h1>
                    <form>
                        <div className="form-group row mb-3">
                            <label htmlFor="titulo" className="col-sm-2 col-lg-1 col-form-label">Titulo</label>
                            <div className="col-sm-10 col-lg-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="titulo" 
                                placeholder="Nome da informação"
                                onChange={(e) => {setTitle(e.target.value)}}
                                required   
                            />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="descricao" className="col-sm-2 col-lg-1 col-form-label">Descrição</label>
                            <div className="col-lg-11 col-sm-10">
                            <textarea
                                className="form-control" 
                                id="descricao" 
                                rows={5}
                                placeholder="Insira o texto aqui..."
                                onChange={(e) => {setDescription(e.target.value)}}
                                required
                            ></textarea>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <div className="col-sm-10">
                                <button type="button" className="btn btn-primary me-2" onClick={insert}><i className="bi bi-sd-card"></i> Salvar</button>
                                <button type="reset" className="btn btn-outline-secondary" onClick={reset}><i className="bi bi-eraser"></i> Limpar</button>
                            </div>
                        </div>
                    </form>
                    {end === 'success' && show === true &&
                        <Alert variant="success" onClose={() => reset} dismissible>
                            Informação incluida com sucesso!
                        </Alert>
                    }
                    {end === 'error' && show === true &&
                        <Alert variant="danger" onClose={() => reset} dismissible>
                            {erro}
                        </Alert>
                    }
                </div>        
            </Content>
        </Fragment>
    );        
};

export default IncludeInfo;