import styled from 'styled-components'

export const App = styled.main`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Poppins;
    }
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    .featurette > * {
        flex-shrink: 0;
        padding-right: calc(var(--bs-gutter-x) * .5);
        padding-left: calc(var(--bs-gutter-x) * .5);
        margin-top: var(--bs-gutter-y);
    }
}
`;