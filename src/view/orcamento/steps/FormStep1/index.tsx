import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../../controller/FormContext';
import {Theme} from '../../theme';
import { ChangeEvent, useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import InputMask from 'react-input-mask'
const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [show, setShow] = useState(false);
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);

    const handleNextStep = () => {
        if(state.name !== '' && state.birth !== ''){
            navigate('/app/orcamento/contato');
        } else {
            setShow(true);
        }        
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const handleBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setBirth,
            payload: e.target.value
        });
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/4</p>
                <h1>Vamos começar com seu nome e idade</h1>
                <p>Preencha o campo abaixo com seu nome completo e data de nascimento.</p>
                <hr/>
                <div className="col-md-8 col-lg-6 mb-2">
                    <label htmlFor="name" className="mb-2">
                        Nome completo
                    </label>
                    <input
                        id="name"
                        className="form-control"
                        type="text"
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="col-md-8 col-lg-6 mb-4">
                    <label htmlFor="age" className="mb-2">
                        Nascimento
                    </label>
                    <InputMask
                        mask="99/99/9999"
                        id="age"
                        className="form-control"
                        type="text"
                        placeholder='dd/mm/aaaa'
                        value={state.birth}
                        onChange={handleBirthChange}
                    />
                </div>
                <div className="d-flex flex-row-reverse flex-md-row">
                    <button className="btn btn-dark"onClick={handleNextStep}>Avançar <i className="bi bi-chevron-right"></i></button>
                </div>
                {show === true &&
                    <div className="mt-2">
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            Preencha todos os campos!
                        </Alert>
                    </div>
                }
                
            </C.Container>
        </Theme>
    );
}

export default FormStep1;