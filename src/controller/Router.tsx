import {Routes, Route} from 'react-router-dom'
import App from '../App'
import Portfolio from '../view/portfolio'
import Orcamento from '../view/orcamento'
import Info from '../view/info'
import FormStep1 from '../view/orcamento/steps/FormStep1'
import FormStep2 from '../view/orcamento/steps/FormStep2'
import FormStep3 from '../view/orcamento/steps/FormStep3'

import Admin from '../view/admin'
import IncludeInfo from '../view/admin/info/includeInfo'
import ListInfo from '../view/admin/info/listInfo'
import NewPost from '../view/admin/portfolio/newpost'
import ListPosts from '../view/admin/portfolio/listPosts'
import Edit from '../view/admin/orcamento/edit'
import NewItem from '../view/admin/banner/newitem'

export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/admin' element={<Admin children/>}/>
            <Route path='/admin/info/includeinfo' element={<Admin children={<IncludeInfo/>}/>}/>
            <Route path='/admin/info/listinfo' element={<Admin children={<ListInfo/>}/>}/>
            <Route path='/admin/portfolio/newpost' element={<Admin children={<NewPost/>}/>}/>
            <Route path='/admin/portfolio/listposts' element={<Admin children={<ListPosts/>}/>}/>
            <Route path='/admin/orcamento/edit' element={<Admin children={<Edit/>}/>}/>
            <Route path='/admin/banner/newitem' element={<Admin children={<NewItem/>}/>}/>
            
            <Route path='/' element={<App children={<Portfolio/>}/>}/>
            <Route path='/app/portfolio' element={<App children={<Portfolio/>}/>}/>
            <Route path='/app/orcamento' element={<App children={<Orcamento children={<FormStep1/>}/>}/>}/>
            <Route path='/app/orcamento/step2' element={<App children={<Orcamento children={<FormStep2/>}/>}/>}/>
            <Route path='/app/orcamento/step3' element={<App children={<Orcamento children={<FormStep3/>}/>}/>}/>
            <Route path='/app/info' element={<App children={<Info/>}/>}/>
        </Routes>
    )
}