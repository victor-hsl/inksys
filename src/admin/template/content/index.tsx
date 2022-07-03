import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Poppins!important;
    .title {
        font-size: 2.75rem;
        font-family: Poppins;
        text-align: center;
    }

    label {
        font-size: 1.5rem;
        margin: auto 0;
    }
`
type Props = {
    children: ReactNode;
}

const Content = ({children} : Props) => {
    return(
        <Container className='px-3 px-md-5 py-5'>
            {children}
        </Container>
    )
}

export default Content;