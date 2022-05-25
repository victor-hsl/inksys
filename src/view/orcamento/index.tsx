import {Content} from '../../view/template/content';
import {FormProvider} from '../../controller/FormContext';
import {
    BrowserRouter as Router,
    useNavigate
  } from 'react-router-dom'
import {auth} from '../../util/FirebaseConnection';
import FormStep1 from './steps/FormStep1';
import * as C from './styles';
import {ReactNode, useState} from 'react';

type Props = {
    children: ReactNode;
}

const Orcamento = ({children}: Props) => {
    
    return(
        <FormProvider>
          {children}
        </FormProvider>
    );
};

export default Orcamento;