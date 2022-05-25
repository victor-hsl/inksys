import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }
    @media (min-width: 768px) {
        margin: 30px 0;
        display: block;
        a{
            display: flex;
            flex-direction: row;
            margin-right: -4px;
        }
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 0px;
    @media (min-width: 768px) {
        margin-right: 20px;
    }    
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #000;
    @media (min-width: 768px) {
        text-align: right;
    } 
`;

export const Description = styled.div`
    text-align: center;
    font-size: 13px;
    color: #B8B8D4;
    @media (min-width: 768px) {
        text-align: right;
    } 
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
    margin-top: 5px;
    margin-bottom: -5px;
    background-color: ${props => props.active ? '#FFF' : '#212529'};
    
    @media (min-width: 768px) {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 30px;
        margin-right: -7;
    }

`;