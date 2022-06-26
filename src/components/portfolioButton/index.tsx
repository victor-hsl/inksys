import styled from "styled-components";

const Button = styled.button`
    border-radius: 20px;
    background: linear-gradient(145deg, #ffffff, #d7d7d7);
    box-shadow:  20px 20px 60px #cbcbcb,
                -20px -20px 60px #ffffff;
    color: #212529;
    border: 0px;

    :hover{
        color: #212529;
        font-weight: bold;
    }
    :focus{
        border-radius: 20px;
        background: linear-gradient(145deg, #d7d7d7, #ffffff);
        box-shadow:  20px 20px 60px #cbcbcb,
             -20px -20px 60px #ffffff;
        border: 0px;
    }
`;
const PortfolioButton = () => {
    return(
        <Button className="py-4 px-5 mb-4">
            Veja mais
        </Button>
    )
}

export default PortfolioButton;