import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment} from 'react'
const listInfo = () => {
    return(
        <Fragment>
            <Tabs title1="Incluir" link1="/admin/info/includeinfo" title2="Listar" link2="/admin/info/listinfo" active={1}/>
            <Content>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col" className="col-lg-1 col-sm-1">Prioridade</th>
                    <th scope="col">Titulo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" className="col-lg-1 col-sm-1">1</th>
                    <td >Titulo pequeno</td>
                    </tr>
                    <tr>
                    <th scope="row" className="col-lg-1 col-sm-1">2</th>
                    <td >Titulo médio para verificar o espaço</td>
                    </tr>
                    <tr>
                    <th scope="row" className="col-lg-1 col-sm-1">3</th>
                    <td >Titulo muito grande pra caber na pagina toda, enrolando pra ficar maior</td>
                    </tr>
                </tbody>
            </table>
            </Content>
        </Fragment>
    );
};

export default listInfo;