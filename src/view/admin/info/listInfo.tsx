import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment} from 'react'
const listInfo = () => {
    return(
        <Fragment>
            <Tabs title1="Incluir" link1="/admin/info/includeinfo" title2="Listar" link2="/admin/info/listinfo" active={1}/>
            <Content>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" className="col-lg-1 col-sm-1">Prioridade</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="col-lg-1 col-sm-1">1</th>
                        <td >Titulo pequeno</td>
                        <td>
                            <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                            <button className="botaoDir btn btn-danger"><i className="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="col-lg-1 col-sm-1">2</th>
                        <td >Titulo médio para verificar o espaço</td>
                        <td>
                            <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                            <button className="botaoDir btn btn-danger"><i className="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="col-lg-1 col-sm-1">3</th>
                        <td >Titulo muito grande pra caber na pagina toda, enrolando pra ficar maior</td>
                        <td>
                            <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                            <button className="botaoDir btn btn-danger"><i className="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </Content>
        </Fragment>
    );
};

export default listInfo;