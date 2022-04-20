import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import {Header} from './view/template/header'
import {Menu} from './view/template/navbar'
import {Footer} from './view/template/footer'
import {FormProvider} from './controller/FormContext'
import { ReactNode } from 'react'
type Props = {
  children: ReactNode;
}

const App = ({children} : Props) => {  

  return(
    <div className="app container">
        <Header/>
        <Menu/>
        <FormProvider>
          {children}
        </FormProvider>
        <Footer/>
    </div>
  );
}

export default App;
