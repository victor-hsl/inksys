import styled from "styled-components";

export const TitleInput = styled.input`
    width: 100%;
    border-radius: 2rem;
    background: #ffffff;
    box-shadow:  13px 13px 25px #d9d9d9,
                -13px -13px 25px #ffffff;
    border: 0;
    padding: 1.5rem 1.75rem;
`;

export const Button = styled.button`
    border-radius: 2rem;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow:   10px 10px 34px #d9d9d9,
    -10px -10px 34px #ffffff;
    border: 0;
    padding: 1rem 2rem;

    :active {
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        box-shadow:  10px 10px 34px #d9d9d9,
        -10px -10px 34px #ffffff;
        text-decoration: underline;
    }
`;