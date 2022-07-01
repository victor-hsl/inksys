import { useState, useEffect } from "react"
import { Info } from '../../types/info'
import * as I from '../../data/Info'
import { Alert } from 'react-bootstrap';
import { db } from "../../connections/FirebaseConnection";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

const AdminInfo = () => {
    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState('');
    const infoRef = collection(db, "info");
    const [end, setEnd] = useState('');
    const [show, setShow] = useState(false);
    const [erro, setErro] = useState('');
    const [infos, setInfos] = useState<Info[]>([]);
    useEffect(() => {
        const getAll = async () => {
            setInfos(await I.getInfos());
        }
        try{
            getAll();
        } catch (e) {
            console.log("Erro ao buscar infos: "+e);
        }        
    }, []);

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
                document.location.reload();
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

    const deleteInfo = async (id: string) => {
        try{
            const infoDoc = doc(db, "info", id);
            await deleteDoc(infoDoc);
            document.location.reload();
        } catch (e) {
            console.error("Failed! Error: ", e);
        }
    }


    return(
        <>
            <div className="title">
                Incluir Informação
            </div>
            <div className="d-flex justify-content-center">
                <form className="col-12 col-md-9 col-lg-7 col-xl-5 mt-2">
                    <div className="form-group row mb-3">
                        <label htmlFor="titulo" className="col-sm-2 col-form-label text-md-end">Titulo</label>
                        <div className="col-sm-10">
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
                        <label htmlFor="descricao" className="col-sm-2  col-form-label text-md-end">Descrição</label>
                        <div className="col-sm-10">
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
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-primary me-2" onClick={insert}><i className="bi bi-sd-card"></i> Salvar</button>
                            <button type="reset" className="btn btn-outline-secondary" onClick={reset}><i className="bi bi-eraser"></i> Limpar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-5 mt-3">
                    {end === 'success' && show === true &&
                        <Alert variant="success" onClose={reset} dismissible>
                            Informação incluida com sucesso!
                        </Alert>
                    }
                    {end === 'error' && show === true &&
                        <Alert variant="danger" onClose={reset} dismissible>
                            {erro}
                        </Alert>
                    }
                </div>
            </div>
            <hr/>
            <div className="title">
                Lista de Informações
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="col-lg-1 col-sm-1">Id</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {infos.map((item, key) => (
                            <tr key={key}>
                                <th scope="row" className="col-lg-1 col-sm-1">{key+1}</th>
                                <td >{item.title}</td>
                                <td >{item.description[0]}{item.description.length > 1 ? '...' : ''}</td>
                                <td>
                                    <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                                    <button className="botaoDir btn btn-danger" onClick={() => {deleteInfo(item.id)}}><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminInfo;