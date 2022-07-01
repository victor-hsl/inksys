import styled from 'styled-components'
import Background from '../../assets/image.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppins;
    background: url(${Background});
    background-size: auto 100vh;
    background-position: center;

    .label {
        font-size: 5rem;
    }
    @media (min-width: 1200px) {
        background-size: 100vw auto;
        .label {
            font-size: 10rem;
        }
    }

    @keyframes slide-in-top {
        0% {
          -webkit-transform: translateY(-1000px);
                  transform: translateY(-1000px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          opacity: 1;
        }
    }
    @keyframes slide-in-bottom{
        0%{
            transform:translateY(1000px);
            opacity:0;
        }
        100%{
            transform:translateY(0);
            opacity:1;
        }
    }
    @keyframes slide-out{
        0%{
            transform:translateZ(0);
            opacity:1;
        }
        100%{
            transform:translateZ(-1100px);
            opacity:0;
        }
    }
    .slide-in-top {
        animation: slide-in-top 1.5s ease both;
    }

    .slide-in-bottom{
        animation:slide-in-bottom 2s ease-in-out both;
    } 
    .slide-out{
        animation:slide-out .5s ease-in-out both;
    }

    .hide {
        display: none;
    }
`;

export const SmokeScreen = styled.div`
    width: 100%;
    height: 100%;
    background: hsla(0,0%,15%,0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    
    @keyframes slide-in {
        0% {
            transform:translateZ(-1400px);
            opacity:0;
        }
        100% {
            transform:translateZ(0);
            opacity:1;
        }
    }
    .slide-in{
        animation: slide-in 0.5s ease-in both;
    }
`

export const LoginButton = styled.button`
    position: relative;
    cursor: pointer;
    overflow: hidden;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #26262642;
    box-shadow: inset 20px 20px 60px #2020206b, inset -20px -20px 60px #2c2c2ca1;
    color: #fff;
    border: 0;

    :hover::before {
        transform: scaleX(1);
    }

    :active::before {
        transform: scaleX(1);
    }

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: 0 50%;
        width: 100%;
        height: inherit;
        border-radius: inherit;
        background: linear-gradient(
            83.2deg,
            rgba(150, 93, 233, 1) 10.8%,
            rgba(99, 88, 238, 1) 94.3%
        );
        transition: all 0.475s;
    }

    @media (min-width: 1200px) {
        height: 6rem;
        border-radius: 3rem;
        padding: 0 4rem;
    }
`

export const ButtonContent = styled.span`
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
    @media (min-width: 1200px) {
        font-size: 3rem;
    }
`

export const LoginForm = styled.form`
    background-color: rgba(255, 255, 255, .05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    border-radius: 2rem;
    font-family: Poppins;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .leading {
        font-size: 3rem;
        box-sizing: border-box;
    }
    @media (min-width: 768px) {
        padding: 4rem!important;
    }

    @media (min-width: 1200px) {
        padding: 5rem!important;
    }
    @media (min-width: 1400px) {
        padding: 6rem!important;
    }

    .styled-input {
        position: relative;
    }

    .input {
        padding: .7rem 1rem;
        border: none;
        border-radius: 1.5rem;
        color: #fff;
        background-color: transparent;
        outline: 2px solid #fff;
    }
    .input-label {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(10px, 10px);
        transition: transform .25s;
    }

    .input:focus+.input-label, .input:valid+.input-label {
        transform: translate(10px, -14px) scale(.8);
        color: #d1c5fc;
        padding-inline: 5px;
        background-color: #242329;
        border-radius: .5rem;
    }
    .input:is(:focus, :valid) {
        outline-color: #d1c5fc;
    }
`

export const Button = styled.button`
    cursor: pointer;
    position: relative;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: linear-gradient(
        83.2deg,
        rgba(150, 93, 233, 1) 10.8%,
        rgba(99, 88, 238, 1) 94.3%
    );
    color: #fff;
    transition: all .3s;
    border: 0;

    :hover {
        background: transparent;
        letter-spacing: 2px;
    }

    :active {
        background: transparent;
        letter-spacing: 2px;
    }

    ::before {top: 0;}

    ::after {bottom: 0;}

    :hover::before, :hover::after {
        transform: scaleX(1);
    }

    ::before, ::after {
        content: "";
        position: absolute;
        left: 0;
        transform: scaleX(0);
        width: 100%;
        height: 0.5px;
        background: white;
        transition: all .3s;
    }
`