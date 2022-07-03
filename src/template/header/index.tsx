import { Container, Title } from './styles'
import HeaderDivider from '../../components/headerDivider'
import { getHeader } from '../../data/Header';
import Placeholder from 'react-bootstrap/Placeholder'
import { useEffect, useState } from 'react';
type Props = {
    scrollPosition: number;
}

const Header = ({scrollPosition}: Props) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const get = async (id: string) => {
            const response = await getHeader(id);
            setTitle(response.title);
            setSubtitle(response.subtitle);
            setLoading(false);
        } 
        if(window.location.pathname === '/'){
            get("home");
        }
        else if(window.location.pathname === '/info'){
            get("info");
        }
        else if(window.location.pathname === '/portfolio'){
            get("portfolio");
        }
        else {
            get("orcamento");
        }
    }, []);
    return(
        <Container>
            <Title scrollPosition={scrollPosition} >
                { loading && 
                    (<>
                        <Placeholder xs={8} bg="secondary" size="lg" />
                        <HeaderDivider/>
                        <Placeholder xs={6} bg="secondary" />
                    </>)
                }
                {   !loading &&
                    (<>
                        <div className='title px-5 text-center'>{title}</div>
                        <HeaderDivider/>
                        <div className='subtitle px-5 text-center'>{subtitle}</div>   
                    </>)
                }
            </Title>
        </Container>
    )
}

export default Header;