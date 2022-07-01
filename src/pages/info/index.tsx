import Content from "../../template/content";
import AccordionInfo from "../../components/accordionInfo";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { Info as InfoProps} from "../../types/info";
import * as I from '../../data/Info';
const Container = styled.div`
    display: flex;
    justify-content: center;

`;
const Info = () => {
    const [infos, setInfos] = useState<InfoProps[]>([]);
    useEffect(() => {
        const getAll = async () => {
            setInfos(await I.getInfos());
        }
        try{
            getAll();
        } catch (e) {
            alert("Erro ao buscar infos: "+e);
        }
    }, []);
    return(
        <Content>
            <Container className="mb-4">
                <AccordionInfo items={infos}/>
            </Container>
        </Content>
    )
}

export default Info;