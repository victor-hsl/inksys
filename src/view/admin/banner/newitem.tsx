import Content from '../template/content'
import Tabs from '../template/tabs'
import { Fragment } from 'react';
const NewItem = () => {

    return(
        <Fragment>
            <Tabs title1='Teste' link1='1' title2='Teste2' link2='2' active={0}/>
            <Content>
                <h1 className="display-4 mb-3">Novo Item</h1>
                <form>
                    <div className="form-group row mb-3">
                        <label htmlFor="urlPhoto" className="col-sm-2 col-lg-1 col-form-label">Foto</label>
                        <div className="col-sm-10 col-lg-4 custom-file">
                            <input type="file" className="form-control" id="urlPhoto" accept="image/png, image/jpeg, image/jpg"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary me-2" ><i className="bi bi-sd-card"></i> Salvar</button>
                            <button type="reset" className="btn btn-outline-secondary" ><i className="bi bi-eraser"></i> Limpar</button>
                        </div>
                    </div>
                </form>
            </Content>
        </Fragment>
    );
};

export default NewItem;