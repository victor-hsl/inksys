import {Routes, Route} from 'react-router-dom'
import Portfolio from '../view/portfolio'
import Orcamento from '../view/orcamento'
import Info from '../view/info'
import FormStep1 from '../view/orcamento/steps/FormStep1'
import FormStep2 from '../view/orcamento/steps/FormStep2'
import FormStep3 from '../view/orcamento/steps/FormStep3'
import Admin from '../view/admin'
import App from '../App'
export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/admin' element={<Admin children/>}/>
            <Route path='/' element={<App children={<Portfolio/>}/>}/>
            <Route path='/app/portfolio' element={<App children={<Portfolio/>}/>}/>
            <Route path='/app/orcamento' element={<App children={<Orcamento/>}/>}/>
            <Route path='/app/orcamento/step1'element={<App children={<FormStep1/>}/>}/>
            <Route path='/app/orcamento/step2' element={<App children={<FormStep2/>}/>}/>
            <Route path='/app/orcamento/step3' element={<App children={<FormStep3/>}/>}/>
            <Route path='/app/info' element={<App children={<Info/>}/>}/>
        </Routes>
    )
}