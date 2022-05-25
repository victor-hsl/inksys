import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../../controller/FormContext';
import {Theme} from '../../theme';
import { ChangeEvent, useEffect } from 'react';



const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/app/orcamento/step2');
        } else {
            alert('Preencha os dados');
        }
        
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr/>
                <label>
                    Nome completo
                    <input
                        className="form-control"
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button className="btn btn-secondary"onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    );
}

export default FormStep1;