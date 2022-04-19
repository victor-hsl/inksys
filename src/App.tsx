import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import {Header} from './view/template/header'
import {Menu} from './view/template/navbar'
import {Footer} from './view/template/footer'
import {FormProvider} from './controller/FormContext'
import Rotas from './controller/Router'
import {
  BrowserRouter as Router,
  Link,
  useNavigate
} from "react-router-dom"
import {auth} from './util/FirebaseConnection'

const App = () => {  

  return(
    <div className="app container">
      <Router>
        <Header/>
        <Menu/>
        <FormProvider>
          <Rotas/>
        </FormProvider>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
