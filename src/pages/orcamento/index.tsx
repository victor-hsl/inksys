import Content from '../../template/content';
import {FormProvider} from '../../FormContext';
import {ReactNode, useState} from 'react';
import styled from 'styled-components'
type Props = {
    children: ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Orcamento = ({children}: Props) => {
    
    return(
      <Content>
        <Container>
          <div className="container-xxl">
            <FormProvider>
              {children}
            </FormProvider>
          </div>
        </Container>        
      </Content>
    );
};

export default Orcamento;