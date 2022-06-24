import styled from 'styled-components'
import Placeholder from '../../assets/placeholder500.png'
const Grid = styled.div`
    @keyframes scale-up{
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.15);
        }
    }

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
    
    img {
        cursor: pointer;
        width: 70%;
        box-shadow:  10px 10px 50px #bebebe, -10px -10px 50px #ffffff;
    }

    img:hover {
        animation: scale-up 0.5s ease-in-out forwards;
    }
    
    @media (min-width: 768px) {
        img {
            width: 40%;
        }
    }

    @media (min-width: 992px) {
        img {
            width: 30%;
        }
    }

    @media (min-width: 1200px) {
        img {
            width: 20%;
        }
    }
`;

const DestaquesGrid = () => {
    return(
        <Grid>
            <img src={Placeholder}/>
            <img src={Placeholder}/>
            <img src={Placeholder}/>
            <img src={Placeholder}/>
        </Grid>
    )
}

export default DestaquesGrid;