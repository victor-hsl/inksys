import styled from "styled-components";

export const Main = styled.main `
    background-color: white;
    box-shadow: 0px 0px 23px 10px rgba(0,0,0,0.1);
    padding: 20px;
    margin-bottom: 10px;
    min-height: 500px;
    @media (min-width: 768px) {
        padding: 30px;
    }
    @media (min-width: 992px) {
        padding: 40px;
    }
`;