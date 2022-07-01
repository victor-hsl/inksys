import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../../FormContext';
import {Theme} from '../../theme';
import { ChangeEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask'
import { Alert } from 'react-bootstrap';
const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('');
    useEffect(() => {
        if(state.name === '' || state.birth === ''){
            navigate('/orcamento');
            alert("Preencha os campos para avançar!");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
            const splited = state.name.split(" ");
            setFirstName(splited[0]);
        }
    }, []);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleCelChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCelphone,
            payload: e.target.value
        });
    }

    const handleInstaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setInstagram,
            payload: e.target.value
        });
    }

    const handleNextStep = () => {
        if(state.email !== '' && state.celphone !== '' && state.instagram !== ''){
            navigate('/orcamento/ideia');
        } else {
            setShow(true);
        }        
    }
    return (
        <Theme>
            <C.Container>
                <p>{'Passo ' + state.currentStep + '/4'}</p>
                <h1>Certo {firstName}, como te achamos?</h1>
                <p>Insira seus dados para contato</p>
                <hr/>
                <div className="col-md-7 col-lg-4 mb-2">
                    <label htmlFor="email" className="mb-2">
                        E-mail
                    </label>
                    <input
                        id="email"
                        className="form-control"
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="col-md-3 col-lg-2 mb-2">
                    <label htmlFor="celular" className="mb-2">
                        Celular
                    </label>
                    <InputMask 
                        mask="(99)99999-9999" 
                        className="form-control"
                        value={state.celphone}
                        onChange={handleCelChange}
                    />
                </div>
                <div className="col-md-4 col-lg-3 mb-2">
                    <label htmlFor="celular" className="mb-2">
                        Instagram
                    </label>
                    <input
                        id="celular"
                        className="form-control"
                        type="text"
                        value={state.instagram}
                        onChange={handleInstaChange}
                    />
                </div>
                <div className="d-flex mt-4">
                    <Link to="/orcamento" className="btn btn-outline-dark ms-auto ms-md-0"><i className="bi bi-reply-fill"></i> Voltar</Link>
                    <button className="btn btn-dark ms-1" onClick={handleNextStep}>Avançar <i className="bi bi-chevron-right"></i></button>
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

export default FormStep2;