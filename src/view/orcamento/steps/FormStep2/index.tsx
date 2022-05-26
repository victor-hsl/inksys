import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../../controller/FormContext';
import {Theme} from '../../theme';
import { ChangeEvent, useEffect, useState } from 'react';

const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('');
    useEffect(() => {
        if(state.name === '' && state.birth === ''){
            navigate('/app/orcamento');
            alert("Preencha o nome para prosseguir!");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
            const splited = state.name.split(" ");
            setFirstName(splited[0]);
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/app/orcamento/ideia');
        } else {
            alert('Preencha os dados');
        }
        
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/4</p>
                <h1>Certo {firstName}, como te achamos?</h1>
                <p>Insira seus dados para contato</p>
                <hr/>
                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    );
}

export default FormStep2;