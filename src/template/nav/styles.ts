import styled from 'styled-components'
type Props = {
    position: number;
}


export const NavbarContainer = styled.div(({position} : Props) => (
`
    nav {
        background: ${position < 100 ? 'transparent!important' : ''};
        color:  ${position < 100 ? '#fff' : '#000'};
    }

    .navbar-light .navbar-brand{
        font-size: 24px;
    }

    .navbar {
        justify-content: flex-start;
    }

    .nav-link {
        color: #000;
        font-size: 22px;
    }

    .navbar-light .navbar-nav .nav-link{
        font-size: 20px;
    }

    .navbar-light .navbar-nav .nav-link.active{
        color: #fff;
        background: #000;
        border-radius: 5px;
    }

    .navbar-toggler {
        font-size: 22px;
        border: 0;
        border-radius: 10%;
    }

    .btn-close {
        font-size: 22px;
    }
`))