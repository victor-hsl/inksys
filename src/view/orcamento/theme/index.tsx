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
                            description="Se identifique"
                            icon="profile"
                            path="/step1"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Profissional"
                            description="Seu nivel"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
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