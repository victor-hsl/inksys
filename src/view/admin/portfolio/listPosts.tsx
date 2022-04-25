import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment} from 'react'
const listPosts = () => {

    return(
        <Fragment>
            <Tabs title1="Novo" link1="/admin/portfolio/newpost" title2="Listar" link2="/admin/portfolio/listposts" active={1}/>
            <Content>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Duração</th>
                            <th scope="col">Estilo</th>
                            <th scope="col">Data</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Placeholder</td>
                            <td>03:00</td>
                            <td>Blackwork</td>
                            <td>20/04/22</td>
                            <td>
                                <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                                <button className="botaoDir btn btn-danger"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Placeholder</td>
                            <td>01:30</td>
                            <td>Lettering</td>
                            <td>30/03/22</td>
                            <td>
                                <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                                <button className="botaoDir btn btn-danger"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Placeholder</td>
                            <td>06:00</td>
                            <td>Blackwork</td>
                            <td>25/01/22</td>
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

export default listPosts;