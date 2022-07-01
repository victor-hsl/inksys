import { Container, Title } from './styles'
import HeaderDivider from '../../components/headerDivider'
import { useEffect, useState } from 'react';
type Props = {
    scrollPosition: number;
}

const Header = ({scrollPosition}: Props) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    useEffect(() => {
        if(window.location.pathname === '/'){
            setTitle('Home title');
            setSubtitle('services offered');
        }
        else if(window.location.pathname === '/info'){
            setTitle('Info title');
            setSubtitle('all information about the studio');
        }
        else if(window.location.pathname === '/portfolio'){
            setTitle('Portfolio title');
            setSubtitle('recently done works');
        }
        else {
            setTitle('Orçamento title');
            setSubtitle('book your tattoo');
        }
    }, []);
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