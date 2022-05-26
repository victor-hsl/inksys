import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../../controller/FormContext';
import {Theme} from '../../theme';
import { ChangeEvent, useEffect } from 'react';


const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate('/app/orcamento');
            alert("Preencha o nome para prosseguir!");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, []);
    const handleNextStep = () => {
        if(state.email !== ''){
            //alert("Nome: "+state.name+"   Nivel: "+state.level+"   Email: "+state.email+"   GitHub: "+state.github);
        } else {
            alert("Preencha os dados");
        }
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos</p>
                <hr/>
                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.celphone}
                        onChange={handleGitHubChange}
                    />
                </label>
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </C.Container>
        </Theme>
    );
}

export default FormStep3;