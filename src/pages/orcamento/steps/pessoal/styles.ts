import styled from "styled-components";

export const Container = styled.div `
    
    p{
        font-size: 13px;
        color: #B8B8D4;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label{
        font-size: 14px;
    }

    .form-control {
        border-radius: 2rem;
        border: 0;
        padding: .9rem 1.3rem;
        background: #efefef;
        box-shadow: inset 20px 20px 29px #cbcbcb,
            inset -20px -20px 29px #ffffff;
    }

    .btn {
        padding: 1rem;
        border-radius: 1.9rem;
        box-shadow:  14px 14px 28px #cbcbcb,
             -14px -14px 28px #ffffff;
    }
`;