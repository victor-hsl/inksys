import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../../controller/FormContext';
import {Theme} from '../../theme';
import { ChangeEvent, useEffect } from 'react';

const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate('/app/orcamento/step1');
            alert("Preencha o nome para prosseguir!");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/app/orcamento/step3');
        } else {
            alert('Preencha os dados');
        }
        
    }
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente</p>
                <hr/>
                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    );
}

export default FormStep2;