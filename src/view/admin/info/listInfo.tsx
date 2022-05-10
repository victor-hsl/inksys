import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment} from 'react'
import * as I from '../../../dao/Info'
import {useState, useEffect} from 'react';
import {Info} from '../../../model/Info';
const ListInfo = () => {
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

    return(
        <Fragment>
            <Tabs title1="Incluir" link1="/admin/info/includeinfo" title2="Listar" link2="/admin/info/listinfo" active={1}/>
            <Content>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" className="col-lg-1 col-sm-1">Prioridade</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {infos.map((item, index) => (
                        <tr>
                            <th scope="row" className="col-lg-1 col-sm-1">{index+1}</th>
                            <td >{item.title}</td>
                            <td >{item.description}</td>
                            <td>
                                <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                                <button className="botaoDir btn btn-danger"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </Content>
        </Fragment>
    );
};

export default ListInfo;