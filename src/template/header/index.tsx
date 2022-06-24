import { Container, Title } from './styles'
import HeaderDivider from '../../components/headerDivider'
type Props = {
    scrollPosition: number;
}

const Header = ({scrollPosition}: Props) => {
    return(
        <Container>
            <Title scrollPosition={scrollPosition} >
                <div className='title px-5 text-center'>Header title tattoo studio!</div>
                <HeaderDivider/>
                <div className='subtitle px-5 text-center'>Second header</div>
            </Title>
        </Container>
    )
}

export default Header;