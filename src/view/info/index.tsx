import * as C from './styles'
import {Content} from '../../view/template/content';
import Accordion from 'react-bootstrap/Accordion'
import { useState, useEffect } from 'react';
import { Info } from '../../model/Info';
import * as I from '../../dao/Info'

const Infos = () => {
    const [infos, setInfos] = useState<Info[]>([]);
    useEffect(() => {
        const getAll = async () => {
            setInfos(await I.getInfos());
        }
        try{
            getAll();
        } catch (e) {
            console.log("Erro ao buscar infos: "+e);
        }        
    }, []);


    return(
        <Content>
            <C.Container>
                <Accordion defaultActiveKey="">
                    {infos.map((item, key) => (
                        <Accordion.Item eventKey={key.toString()}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                <C.AcDiv>
                                    {item.description}
                                </C.AcDiv>
                            </Accordion.Body>
                        </Accordion.Item>    
                    ))}
                </Accordion>
                
            </C.Container>
        </Content>
    );
};

export default Infos;