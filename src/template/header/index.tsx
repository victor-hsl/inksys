import { Container, Title } from './styles'
import HeaderDivider from '../../components/headerDivider'
type Props = {
    scrollPosition: number;
    title: string;
    subtitle: string;
}

const Header = ({scrollPosition, title, subtitle}: Props) => {
    return(
        <Container>
            <Title scrollPosition={scrollPosition} >
                <div className='title px-5 text-center'>{title}</div>
                <HeaderDivider/>
                <div className='subtitle px-5 text-center'>{subtitle}</div>
            </Title>
        </Container>
    )
}

export default Header;