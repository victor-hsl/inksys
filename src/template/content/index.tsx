import { ReactNode } from 'react'
import styled from 'styled-components'
type Props = {
    children: ReactNode;
}

const Main = styled.main`
    background-color: #efefef;
    padding: 20px;
    position: relative;
    font-family: 'Poppins', 'Lucida Sans', sans-serif;
`

const Content = ({children} : Props) => {
    return(
        <Main>
            {children}
        </Main>
    )
}

export default Content;