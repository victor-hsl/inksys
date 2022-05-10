import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment, useState} from 'react'
import { Info } from '../../../model/Info';
import { addDoc, collection } from '@firebase/firestore';
import { infoCollection, db } from '../../../util/FirebaseConnection';

const IncludeInfo = () => {
    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState('');
    const infoRef = collection(db, "info");

    const insert = async () => {
        await addDoc(infoCollection, {description: description, title: title});
    }

    return(
        <Fragment>
            <Tabs title1="Incluir" link1="/admin/info/includeinfo" title2="Listar" link2="/admin/info/listinfo" active={0}/>
            <Content>
                <div className="">
                    <h1 className="display-4 mb-3">Incluir Info</h1>
                    <form>
                        <div className="form-group row mb-3">
                            <label aria-for="titulo" className="col-sm-2 col-lg-1 col-form-label">Titulo</label>
                            <div className="col-sm-10 col-lg-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="titulo" 
                                placeholder="Nome da informação"
                                onChange={(e) => {setTitle(e.target.value)}}    
                            />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label aria-for="descricao" className="col-sm-2 col-lg-1 col-form-label">Descrição</label>
                            <div className="col-sm-10 col-lg-6">
                            <textarea 
                                className="form-control" 
                                id="descricao" 
                                rows={5} 
                                placeholder="Insira o texto aqui..."
                                onChange={(e) => {setDescription(e.target.value)}}
                            ></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary me-2" onClick={insert}><i className="bi bi-sd-card"></i> Salvar</button>
                                <button type="reset" className="btn btn-outline-secondary" ><i className="bi bi-eraser"></i> Limpar</button>
                            </div>
                        </div>
                    </form>
                </div>        
            </Content>
        </Fragment>
    );        
};

export default IncludeInfo;