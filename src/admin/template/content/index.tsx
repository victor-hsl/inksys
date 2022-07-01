import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 2.75rem;
        font-family: Poppins;
        text-align: center;
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