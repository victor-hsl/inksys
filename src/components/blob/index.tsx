import styled from "styled-components";

const Bloob = styled.div`
    @keyframes morph {
        0%, 100% {
            border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        }
        33% {
            border-radius: 72% 28% 48% 48% / 28% 28% 72% 72%;
        }
        66% {
            border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
        }
    }

    overflow: hidden;
    width: 18rem;
    height: 18rem;
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    background: #8f44fd url("https://www.xtrafondos.com/wallpapers/glenwood-springs-en-colorado-6641.jpg");
    background-size: cover;
    background-position: center;
    animation: morph 6s linear infinite;
`;

const Blob = () => <Bloob></Bloob>

export default Blob;