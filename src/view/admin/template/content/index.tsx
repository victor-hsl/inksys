import * as C from './styles'
import { ReactNode } from 'react'
type Props = {
    children: ReactNode;
}

const AdminContent = ({children} : Props) => {
    return(
        <C.Main className="container">
            {children}
        </C.Main>
    )
}
export default AdminContent;