import * as C from './styles'
import {Content} from '../../view/template/content';
import Accordion from 'react-bootstrap/Accordion'

const Info = () => {
    return(
        <Content>
            <C.Container>
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            <C.Map
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957316.9406859789!2d-52.74496555079278!3d-20.402700504928532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098677def2a67%3A0x75de19b81061bd7f!2sTr%C3%AAs%20Lagoas%20-%20State%20of%20Mato%20Grosso%20do%20Sul!5e0!3m2!1sen!2sbr!4v1650301441301!5m2!1sen!2sbr" 
                                width="600" 
                                height="450" 
                                loading="lazy" 
                            ></C.Map>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </C.Container>
        </Content>
    );
};

export default Info;