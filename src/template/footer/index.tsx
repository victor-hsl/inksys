import styled from "styled-components";

const Container = styled.footer`
@keyframes wobble-ver-right {
    0%,
    100% {
              transform: translateY(0) rotate(0);
              transform-origin: 50% 50%;
    }
    15% {
              transform: translateY(-5px) rotate(6deg);
    }
    30% {
              transform: translateY(5px) rotate(-6deg);
    }
    45% {
              transform: translateY(-5px) rotate(3.6deg);
    }
    60% {
              transform: translateY(5px) rotate(-2.4deg);
    }
    75% {
              transform: translateY(-1px) rotate(1.2deg);
    }
  }
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #212529;
    span {    
        font-family: Poppins;
        font-size: 18px;
    }
    i {
        font-size: 24px;
    }
    a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    a: hover {
        text-decoration: underline;
        i {
            animation: wobble-ver-right 0.8s ease-in-out both;
        }
    }
`;

const Footer = () => {
    return(
        <Container className="py-5">
            <a href="">
                <i className="bi bi-instagram me-2"/>
                <span>
                    Instagram
                </span>
            </a>
            <a href="">
                <i className="bi bi-whatsapp me-2"/>
                <span>
                    Whatsapp
                </span>
            </a>
            <a href="">
                <i className="bi bi-envelope me-2"/>
                <span>
                    E-mail
                </span>
            </a>
        </Container>
    )
}

export default Footer;