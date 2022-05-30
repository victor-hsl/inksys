import * as C from './styles'
import {Content} from '../../view/template/content';
import Accordion from 'react-bootstrap/Accordion'
import { useState, useEffect } from 'react';
import { Info } from '../../model/Info';
import * as I from '../../dao/Info'

const Infos = () => {
    const [infos, setInfos] = useState<Info[]>([]);
    const [description, setDescription] = useState(['']);
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

    const handleDescription = (line: String) => {
        const splited = line.split("\n");
        if(splited){
            return splited;
        } else {
            return [];
        }
    }


    return(
        <Content>
            <C.Container>
                <Accordion defaultActiveKey="">
                    {infos.map((item, key) => (
                        <Accordion.Item eventKey={key.toString()} key={key}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                <C.AcDiv>
                                    {item.description.map((p, index) => (
                                            <p key={index}>{p}</p>
                                    ))}
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