import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Option = styled.div<{selected: boolean; disabled: boolean;standard:boolean;}>`
    align-items: center;
    background-color: #efefef;
    border: 2px solid ${props => props.selected ? '#16195C' : '#f2f2f2'};
    border-radius: 10px;
    cursor: pointer;
    padding: 40px 50px;
    max-width: 500px;
    height: 500px;
    opacity: ${props => props.disabled ? '0.2' : '1'};
    text-align: center;

    .botaoEsq {
        margin-top: 10px;
        border-radius: 5px 0 0 5px;
    }

    .botaoDir {
        margin-top: 10px;
        border-radius: 0 5px 5px 0;
    }

    .botaoAvn{
        margin-top: 10px;
        height: 60px;
    }
`;

