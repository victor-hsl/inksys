import {Routes, Route} from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Info from './pages/info'
import Portfolio from './pages/portfolio'
import Orcamento from './pages/orcamento'
import FormStep1 from './pages/orcamento/steps/pessoal'
import FormStep2 from './pages/orcamento/steps/contato'
import FormStep3 from './pages/orcamento/steps/ideia'
import AdminHome from './admin/home'
import Login from './admin/login'
import Main from './admin/main'
import AdminInfo from './admin/info'
import HomeHeader from './admin/headers/home'
import InfoHeader from './admin/headers/info'
import PortfolioHeader from './admin/headers/portfolio'
import OrcamentoHeader from './admin/headers/orcamento'

export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App children={<Home />}/>}/>
            <Route path='/info' element={<App children={<Info/>}/>}/>
            <Route path='/portfolio' element={<App children={<Portfolio/>}/>}/>
            <Route path='/orcamento' element={<App children={<Orcamento children={<FormStep1/>}/>}/>}/>
            <Route path='/orcamento/contato' element={<App children={<Orcamento children={<FormStep2/>}/>}/>}/>
            <Route path='/orcamento/ideia' element={<App children={<Orcamento children={<FormStep3/>}/>}/>}/>
            <Route path='/admin' element={<Main children={<AdminHome/>}/>}/>
            <Route path='/admin/home' element={<Main children={<AdminHome/>}/>}/>
            <Route path='/admin/infos' element={<Main children={<AdminInfo/>}/>}/>
            <Route path='/admin/headers/home' element={<Main children={<HomeHeader/>}/>}/>
            <Route path='/admin/headers/info' element={<Main children={<InfoHeader/>}/>}/>
            <Route path='/admin/headers/portfolio' element={<Main children={<PortfolioHeader/>}/>}/>
            <Route path='/admin/headers/orcamento' element={<Main children={<OrcamentoHeader/>}/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}  