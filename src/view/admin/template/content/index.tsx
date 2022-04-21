import * as C from './styles'
import { ReactNode, Fragment } from 'react'
import Tabs from '../tabs'
type Props = {
    children: ReactNode;
}

const AdminContent = ({children} : Props) => {
    return(
        <Fragment>
            <Tabs/>
            <C.Main className="container">
                {children}
            </C.Main>
        </Fragment>
    )
}
export default AdminContent;