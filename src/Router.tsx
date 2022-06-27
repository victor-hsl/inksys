import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Info from './pages/info'
import Portfolio from './pages/portfolio'

export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
    )
}  