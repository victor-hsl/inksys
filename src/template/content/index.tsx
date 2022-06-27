import { ReactNode } from 'react'
import styled from 'styled-components'
type Props = {
    children: ReactNode;
}

const Main = styled.main`
    background-color: #efefef;
    position: relative;
    font-family: 'Poppins', 'Lucida Sans', sans-serif;

    .about {
        text-align: justify;
        font-size: 18px;
    }
`

const Content = ({children} : Props) => {
    return(
        <Main className='px-2 py-4 px-md-4 d-flex justify-content-center'>
            {children}
        </Main>
    )
}

export default Content;