import { useState, FormEvent, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../connections/FirebaseConnection';
import { useNavigate } from 'react-router';
import { Alert } from 'react-bootstrap';
import { 
    Container,
    SmokeScreen,
    LoginButton,
    ButtonContent,
    LoginForm,
    Button
} from './styles'

const Login = () => {
    const [user, setUser] = useState<User>();
    const [slideOut, setSlideOut] = useState(false);
    const [inputType, setInputType] = useState('password');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                navigate('/admin/home')
            }
        })
    }, []);

    const handleInputType = () => {
        if(inputType === 'password'){
            setInputType('text');
        } else {
            setInputType('password');
        }
    }

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(email === '' || senha === ''){
            setMessage('Preencha todos os campos!');
            setShowAlert(true);
        } else {
            await signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
                navigate('/admin');
            }).catch((e) => {
                if(e.code === 'auth/user-not-found'){
                    setMessage('Usuário não encontrado!');
                    setShowAlert(true);
                }
                else if(e. code === 'auth/wrong-password'){
                    setMessage('E-mail ou senha incorretos!');
                    setShowAlert(true);
                }      
                else if(e. code === 'auth/invalid-email'){
                    setMessage('Insira um e-mail valido!');
                    setShowAlert(true);
                }          
            })
        }
    }

    return(
        <Container>
            <SmokeScreen>
                {!slideOut &&
                    <>
                        <div className="label slide-in-top" >
                            Ink Sys
                        </div>
                        <LoginButton className="slide-in-bottom" onClick={() => setSlideOut(true)}>
                            <ButtonContent>
                                Login
                            </ButtonContent>
                        </LoginButton>
                    </>
                }
                {slideOut &&
                    <LoginForm className="py-5 px-4 slide-in" onSubmit={login}>
                        <div className='leading'>
                            Ink Sys
                        </div>
                        <div className='styled-input mt-2'>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required className="input"/>
                            <label htmlFor="email" className="input-label">E-mail</label> 
                        </div>
                        <div className='styled-input mt-3 mb-2'>
                            <input type={inputType} id="senha" name="senha" onChange={(e) => setSenha(e.target.value)} required className="input"/>
                            <label htmlFor="senha" className="input-label">Senha</label> 
                        </div>
                        <label onClick={handleInputType}>
                            <i className={`bi bi-eye-${inputType === 'password' ? 'slash-fill' : 'fill'}`} ></i> Exibir senha
                        </label>
                        <Button className='mt-3'>
                            Login
                        </Button>
                    </LoginForm>
                }
                { showAlert === true &&
                    <Alert variant="danger" className='mt-3' onClose={() => setShowAlert(false)} dismissible>
                        {message}
                    </Alert>
                }
            </SmokeScreen>
        </Container>
    )
}

export default Login;