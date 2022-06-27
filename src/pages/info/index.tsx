import Content from "../../template/content";
import AccordionInfo from "../../components/accordionInfo";
import styled from 'styled-components';
import { useEffect } from "react";
import { setHeader } from "../../hooks/useHeader";
import { setActive } from "../../hooks/navActive";
const Container = styled.div`
    display: flex;
    justify-content: center;

`;

const items = [
    {
        title: 'Serviços',
        content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta voluptatum? Ipsum enim, quas ducimus quasi culpa illum? Ipsa quidem non fuga velit vitae modi vero autem! Saepe, illo ea?']
    },
    {
        title: 'Agendamento',
        content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta voluptatum? Ipsum enim, quas ducimus quasi culpa illum? Ipsa quidem non fuga velit vitae modi vero autem! Saepe, illo ea?']
    },
    {
        title: 'Local',
        content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta voluptatum? Ipsum enim, quas ducimus quasi culpa illum? Ipsa quidem non fuga velit vitae modi vero autem! Saepe, illo ea?', 'Segundo paragrafo', 'terceiro paragrafo']
    }
]
const Info = () => {
    useEffect(() => {
        setHeader('Information about the studio','');
        setActive(1);
    }, []);
    return(
        <Content>
            <Container className="container-xxl mb-4">
                <AccordionInfo items={items}/>
            </Container>
        </Content>
    )
}

export default Info;