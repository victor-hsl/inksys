import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment} from 'react'
const newPost = () => {

    return(
        <Fragment>
            <Tabs title1="Novo" link1="/admin/portfolio/newpost" title2="Listar" link2="/admin/portfolio/listposts" active={0}/>
            <Content>
                <div className="">
                    <h1 className="display-4 mb-3">Adicionar Post</h1>
                    <form>
                        <div className="form-group row mb-3">
                            <label aria-for="title" className="col-sm-2 col-lg-1 col-form-label">Titulo</label>
                            <div className="col-sm-10 col-lg-3">
                            <input type="text" className="form-control" id="title" placeholder="Nome do post"/>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label aria-for="description" className="col-sm-2 col-lg-1 col-form-label">Descrição</label>
                            <div className="col-sm-10 col-lg-6">
                            <textarea className="form-control" id="description" rows={3} placeholder="Insira o texto aqui..."></textarea>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label aria-for="duration" className="col-sm-2 col-lg-1 col-form-label">Duração</label>
                            <div className="col-sm-10 col-lg-2">
                            <input type="time" className="form-control" id="duration"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary me-2" ><i className="bi bi-sd-card"></i> Salvar</button>
                                <button type="reset" className="btn btn-outline-secondary" ><i className="bi bi-eraser"></i> Limpar</button>
                            </div>
                        </div>
                    </form>
                </div>        
            </Content>
        </Fragment>
    );
};

export default newPost;