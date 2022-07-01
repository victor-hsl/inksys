import { ReactNode } from 'react';
import * as C from './styles';
import { SidebarItem } from '../sidebaritem';
import { useForm } from '../../../FormContext';
type Props = {
    children: ReactNode;
}

export const Theme = ({children} : Props) => {
    const {state} = useForm();
    return (
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title="Pessoal"
                            description="Quem é você"
                            icon="person"
                            path="/orcamento"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Contato"
                            description="Como te achar"
                            icon="@"
                            path="/orcamento/contato"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Ideia"
                            description="O que faremos"
                            icon="lamp"
                            path="/orcamento/ideia"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="Data"
                            description="Quando gostaria"
                            icon="date"
                            path="/"
                            active={state.currentStep === 4}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
    );
}