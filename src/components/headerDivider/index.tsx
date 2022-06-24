import styled from 'styled-components'

const Divider = styled.div`
    margin: 15px 0;
    height: 15px;
    width: 100%;
    background: linear-gradient(90deg, rgba(103,87,87,1) 12%, rgba(166,166,166,1) 49%, rgba(154,121,121,1) 100%);
    border-radius: 10px;
`

const HeaderDivider = () => {
    return(
        <Divider>

        </Divider>
    )
}

export default HeaderDivider;