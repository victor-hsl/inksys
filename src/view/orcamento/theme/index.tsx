import { ReactNode } from 'react';
import * as C from './styles';
import { SidebarItem } from '../sidebaritem';
import { useForm } from '../../../controller/FormContext';
import {Content} from '../../../view/template/content';
type Props = {
    children: ReactNode;
}

export const Theme = ({children} : Props) => {
    const {state} = useForm();
    return (
        <Content>
            <C.Area>
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title="Pessoal"
                            description="Quem é você"
                            icon="profile"
                            path="/step1"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Contato"
                            description="Como te achar"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Ideia"
                            description="O que faremos"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="Data"
                            description="Quando gostaria"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </Content>
    );
}