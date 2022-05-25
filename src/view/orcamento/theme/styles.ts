import styled from "styled-components";

export const Area = styled.div`
    margin: auto;
    min-height: 50vh;
    display: flex;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
    @media (min-width: 768px) {
        height: auto;
    }
`;

export const Sidebar = styled.div`
    display: flex;
    border-bottom: 1px solid #c5cdd5;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        display: block;
        width: 200px;
        border-right: 1px solid #c5cdd5;
        border-bottom: 0;
    }
`;

export const Page = styled.div `
    flex: 1;
    
    padding-top: 40px;
    @media (min-width: 768px) {
        padding-left: 40px;
    }
`;