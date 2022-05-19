import Content from '../template/content'
import Tabs from '../template/tabs'
import { db, storage } from '../../../util/FirebaseConnection';
import {FormEvent, Fragment, useState} from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Alert } from 'react-bootstrap';

const NewPost = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [end, setEnd] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [material, setMaterial] = useState('');    
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [docId, setDocId] = useState('');
    
    const insertPhoto = async (file: File, id: string) => {
        if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
            let newFile = ref(storage, `Portfolio/${id}`);
            try{
                let upload = await uploadBytes(newFile, file);
                const url = await getDownloadURL(upload.ref);
                displayMessage('Imagem enviada com sucesso!', 'success', true);
                return url;
            } catch (e) {
                displayMessage('Erro ao enviar imagem! Erro: '+e, 'error', true);
            }
       } else {
           displayMessage('Insira um formato valido de imagem!', 'erorr', true);
           return '';
       }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        
            const formData = new FormData(e.currentTarget);
            const file = formData.get('urlPhoto') as File;
            const payload = {category: category, 
                            date: (new Date(date)).toLocaleDateString('pt-BR', {timeZone: 'UTC'}), 
                            description: description, 
                            duration: duration,
                            material: material,
                            title: title,
                            urlPhoto: 'NULL'};

            try {
                const docRef = await addDoc(collection(db, "portfolio"), payload);
                displayMessage('ID: '+docRef.id, 'success', true);
                if(docRef.id !== ''){
                    setDocId(docRef.id);
                    if(file.size !== 0){
                        const url = await insertPhoto(file, docRef.id);
                        try{
                            await updateDoc(doc(db, 'portfolio', docRef.id), {urlPhoto: url});
                            displayMessage('Post adicionado com sucesso!', 'success', true)
                        } catch (e) {
                            displayMessage('Falha ao inserir o url da imagem! Erro: '+e, 'error', true);
                        }
                    } else {
                        displayMessage('Insira uma imagem!', 'error', true);
                    }
                }
            } catch (e) {
                displayMessage('Falha ao enviar dados'+e, 'error', true);
            }
    }

    const resetForm = () => {
        setShow(false);setTitle('');
        setDescription('');setDuration('');
        setMaterial('');setCategory('');
        setDate('');setDocId('');
    }

    const displayMessage = (message: string, end: string, show: boolean) => {
        setMessage(message);
        setEnd(end);
        setShow(show);
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
                            <input type="text" className="form-control" id="title" placeholder="Nome do post" onChange={(e) => setTitle(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="description" className="col-sm-2 col-lg-1 col-form-label">Descrição</label>
                        <div className="col-sm-10 col-lg-6">
                            <textarea className="form-control" id="description" rows={3} placeholder="Insira o texto aqui..." onChange={(e) => setDescription(e.target.value)} required></textarea>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="duration" className="col-sm-2 col-lg-1 col-form-label">Duração</label>
                        <div className="col-sm-10 col-lg-2">
                            <input type="time" className="form-control" id="duration" onChange={(e) => setDuration(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="material" className="col-sm-2 col-lg-1 col-form-label">Material</label>
                        <div className="col-sm-10 col-lg-5 mt-1">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" name="rl03" type="checkbox" id="rl03" value="RL 03" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="rl03">RL 03</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl05" value="RL 05" onChange={(e) => setMaterial(material  + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="rl05">RL 05</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl07" value="RL 07" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="rl07">RL 07</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl09" value="RL 09" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="rl09">RL 09</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl11" value="RL 11" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="rl11">RL 11</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="rl13" value="RL 13" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="rl13">RL 13</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg05" value="MG 05" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="mg05">MG 05</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg07" value="MG 07" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="mg07">MG 07</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg09" value="MG 09" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="mg09">MG 09</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg11" value="MG 11" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="mg11">MG 11</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="mg13" value="MG 13" onChange={(e) => setMaterial(material + e.target.value + ' ')}/>
                                <label className="form-check-label" htmlFor="mg13">MG 13</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="category" className="col-sm-2 col-lg-1 col-form-label">Estilo</label>
                        <div className="col-sm-10 col-lg-2">
                            <select className="form-control" id="category" defaultValue="Selecione" onChange={(e) => setCategory(e.target.value)} required>
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
                            <input type="date" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} required/>
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
                            <button type="reset" className="btn btn-outline-secondary" onClick={resetForm}><i className="bi bi-eraser"></i> Limpar</button>
                        </div>
                    </div>
                </form> 
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