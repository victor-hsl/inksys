import {Routes, Route} from 'react-router-dom'
import Portfolio from '../view/portfolio'
import Orcamento from '../view/orcamento'
import Info from '../view/info'
import FormStep1 from '../view/orcamento/steps/FormStep1'
import FormStep2 from '../view/orcamento/steps/FormStep2'
import FormStep3 from '../view/orcamento/steps/FormStep3'

//import Admin from './pages/admin';
export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/Portfolio' element={<Portfolio/>}/>
            <Route path='/' element={<Portfolio/>}/>
            <Route path='/Orcamento' element={<Orcamento/>}/>
            <Route path='/step1' element={<FormStep1/>}/>
            <Route path='/step2' element={<FormStep2/>}/>
            <Route path='/step3' element={<FormStep3/>}/>
            <Route path='/Info' element={<Info/>}/>
        </Routes>
    )
}