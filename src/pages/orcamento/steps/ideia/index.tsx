import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../../FormContext';
import {Theme} from '../../theme';
import { ChangeEvent, useEffect, useState } from 'react';


const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [firstName, setFirstName] = useState('');
 
    useEffect(() => {
        if(state.email === '' || state.celphone === '' || state.instagram === ''){
            navigate('/orcamento/contato');
            alert("Preencha todos os campos para avançar!");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
            const splited = state.name.split(" ");
            setFirstName(splited[0]);
        }
    }, []);
    const handleEmailChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCelphone,
            payload: e.target.value
        });
    }
    const handleNextStep = () => {
        if(state.email !== ''){
            //alert("Nome: "+state.name+"   Nivel: "+state.level+"   Email: "+state.email+"   GitHub: "+state.github);
        } else {
            alert("Preencha todos os dados!");
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>{'Passo ' + state.currentStep + '/4'}</p>
                <h1>Legal {firstName}, qual é sua ideia?</h1>
                <p>Descreva sua ideia da forma mais detalhada possivel</p>
                <hr/>
                <div className="col-md-7 col-lg-4 mb-2">
                    <label htmlFor="description" className="mb-2">
                        Descrição
                    </label>
                    <textarea 
                        id="description"
                        className="form-control"
                        value={state.description}
                        rows={3}
                        onChange={handleEmailChange}
                    ></textarea>
                </div>
                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.celphone}
                        onChange={handleGitHubChange}
                    />
                </label>
                <div className="d-flex mt-4">
                    <Link to="/app/orcamento/contato" className="btn btn-outline-dark ms-auto ms-md-0"><i className="bi bi-reply-fill"></i> Voltar</Link>
                    <button className="btn btn-dark ms-1" onClick={handleNextStep}>Avançar <i className="bi bi-chevron-right"></i></button>
                </div>
            </C.Container>
        </Theme>
    );
}

export default FormStep3;