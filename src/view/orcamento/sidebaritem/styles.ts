import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`;

export const IconArea = styled.div<{active: boolean;}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#495057' : '#ced4da'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styled.div<{active: boolean;}>`
    width: 8px;
    height: 8px;
    border: 3px solid #212529;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -4px;
    background-color: ${props => props.active ? '#FFF' : '#212529'};
`;