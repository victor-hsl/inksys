import styled from 'styled-components';

export const FormButton = styled.button`
    border-radius: 2rem;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow:   10px 10px 34px #d9d9d9,
    -10px -10px 34px #ffffff;
    border: 0;
    padding: 1rem 2rem;

    :active {;
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        box-shadow:  10px 10px 34px #d9d9d9,
        -10px -10px 34px #ffffff;
        text-decoration: underline;
    }
`;

export const TextArea = styled.textarea`
    border-radius: 2rem;
    background: #ffffff;
    box-shadow:  13px 13px 25px #d9d9d9,
                -13px -13px 25px #ffffff;
    border: 0;
    padding: 1.5rem 1.75rem;

`;

export const TitleInput = styled.input`
    border-radius: 2rem;
    background: #ffffff;
    box-shadow:  13px 13px 25px #d9d9d9,
                -13px -13px 25px #ffffff;
    border: 0;
    padding: 1.5rem 1.75rem;
`;

export const ChangeArea = styled.td`
    @keyframes vibrate{0%{transform:translate(0)}20%{transform:translate(-2px,2px)}40%{transform:translate(-2px,-2px)}60%{transform:translate(2px,2px)}80%{transform:translate(2px,-2px)}100%{transform:translate(0)}}
    .vibrate:hover{animation:vibrate .3s ease-in-out both};
    .vibrate:active{animation:vibrate .3s ease-in-out both};
`