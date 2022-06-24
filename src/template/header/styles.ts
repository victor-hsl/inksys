import styled from 'styled-components'
import Background from '../../assets/image.jpg'

export const Container = styled.header
`
    margin-top: -68px;
    height: 80vh;
    overflow: hidden;
    background: url(${Background});
    img {
        z-index: -1;
        margin-top: -300px;
        min-width: 100%;
        filter: blur(1px);
    }
    @media (min-width: 1200px) {
        height: 70vh;
    }
    @media (min-width: 1400px) {
        height: 60vh;
    }
`

export const Title = styled.div<{scrollPosition: number;}>`
    @keyframes slide-top {
        0% {
            transform: translateY(0);
        }
        100% {
          transform: translateY(100px);
        }
    }
    animation: ${props => props.scrollPosition > 100 ? 'slide-top 1.5s ease-in-out forwards' : 'inherit'};
    background: hsla(0, 0%, 15%, 0.5);
    top: 0;
    left: 0;
    padding: 40px;
    color: #fff;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    .title{
        font-family: 'Poppins', 'Lucida Sans', sans-serif;
        font-size: 4rem;
    }

    .subtitle{
        font-family: 'Poppins', 'Lucida Sans', sans-serif;
        font-size: 2rem;
    }

    @media (min-width: 1200px) {
        height: 70vh;

        .title{
            font-family: 'Poppins', 'Lucida Sans', sans-serif;
            font-size: 5rem;
        }
    
        .subtitle{
            font-family: 'Poppins', 'Lucida Sans', sans-serif;
            font-size: 2.5rem;
        }
    }
    @media (min-width: 1400px) {
        height: 60vh;

        .title{
            font-family: 'Poppins', 'Lucida Sans', sans-serif;
            font-size: 6rem;
        }
    
        .subtitle{
            font-family: 'Poppins', 'Lucida Sans', sans-serif;
            font-size: 3rem;
        }
    }    
`