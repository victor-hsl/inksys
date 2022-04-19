import { ReactNode } from 'react'
import * as C from './styles'
type Props = {
    children: ReactNode;
}

export const Content = ({children} : Props) => {
    return(
        <C.Main>
            {children}
        </C.Main>
    )
}