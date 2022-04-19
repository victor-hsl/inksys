import {Content} from '../../view/template/content';
import {FormProvider} from '../../controller/FormContext';
import {
    BrowserRouter as Router,
    useNavigate
  } from 'react-router-dom'
import {
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../../util/FirebaseConnection';
import FormStep1 from './steps/FormStep1';
import * as C from './styles';
import {useState} from 'react';


const Orcamento = () => {
    const [loginEmail, setLoginEmail] = useState<string>('');
    const [loginPassword, setLoginPassword] = useState<string>('');
    const [user, setUser] = useState();
    const [active, setActive] = useState(2);
    const [disabled, setDisabled] = useState(1);
    const navigate = useNavigate();

    const handleClick = (n : number) => {
        if(n === 1){
            setActive(1);
            setDisabled(2);
        }
        if(n === 2){
            setActive(2);
            setDisabled(1);
        }
    }

    const logout = async () => {
        await signOut(auth);
        alert("Success!");
      };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
              auth,
              loginEmail,
              loginPassword
            )
            if(loginEmail === 'victor@tattoo.com'){
                navigate('/admin');
            }
          } catch (error) {
            console.log('err');
          }
    }

    return(
        <Content>
            <C.Container>
                <C.Option
                    className={`align-items-${active===1 ? 'start' : 'center d-flex'}`} 
                    selected={active === 1} 
                    standard={active ===0}
                    disabled={disabled === 1} 
                    onClick={() => handleClick(1)}
                >
                    <p className="display-4">Continuar sem cadastro</p>
                    {active === 1 &&
                        <div>
                            <hr/>
                            <button className="btn btn-primary botaoAvn" onClick={() => navigate('/step1')}>Ir para orçamento <i className="bi bi-chevron-double-right"></i></button>
                        </div>
                    }   
                </C.Option>
                <C.Option    
                    className={`justify-content-center align-items-${active===2 ? 'start' : 'center d-flex'}`} 
                    selected={active === 2} 
                    standard={active === 0}
                    disabled={disabled === 2} 
                    onClick={() => handleClick(2)}
                >
                    <p className="display-4">Quero me cadastrar ou já possuo cadastro</p>
                    {active===2 &&
                        <div>
                            <hr/>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3"className="col-sm-2 col-form-label mt-sm-1"><i className="bi bi-person-fill"></i></label>
                                <div className="col-sm-10">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="inputEmail3" 
                                    placeholder="Email"
                                    onChange={(e) => {
                                        setLoginEmail(e.target.value)
                                    }}
                                />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-sm-1"><i className="bi bi-lock-fill"></i></label>
                                <div className="col-sm-10">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="inputPassword3" 
                                    placeholder="Senha"
                                    onChange={(e) => {
                                        setLoginPassword(e.target.value)
                                    }}
                                />
                                </div>
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <button className="btn btn-secondary botaoEsq" onClick={logout}>Registrar</button>
                                <button className="btn btn-primary botaoDir"  onClick={login}>Logar</button>
                            </div>
                        </div>
                    }
                </C.Option>
            </C.Container>
        </Content>
    );
};

export default Orcamento;