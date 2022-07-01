import Content from "../../template/content";
import DestaquesGrid from "../../components/destaquesGrid";
import Blob from "../../components/blob";
import PortfolioButton from "../../components/portfolioButton";
import { useNavigate } from "react-router";
const Home = () => {
    const navigate = useNavigate();

    const handlePBClick = () => {
        navigate('/portfolio');
    }
    return(
        <Content>
            <div className="text-center h1 my-2 my-lg-4">Destaques</div>
            <hr/>
            <div className="my-5">
                <DestaquesGrid/>
            </div>
            <div className="d-flex justify-content-center">
                <PortfolioButton onclick={handlePBClick}/>
            </div>
            <div className="text-center h1 my2 my-lg-4">Sobre</div>
            <hr/>
            <div className="mt-5 mb-md-4 d-flex flex-wrap">
                <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-center">
                    <Blob/>
                </div>
                <div className="col-12 col-md-7 col-lg-9 py-4 px-4 px-xxl-0 about">
                    <p className="mb-3 me-xxl-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia reprehenderit consequuntur alias
                     quo dicta eos dolorum nihil perspiciatis repellendus debitis possimus fugiat accusamus vero nesciunt ea, ullam quos sunt!
                    </p>
                    <p className="mb-3 me-xxl-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia reprehenderit consequuntur alias
                     quo dicta eos dolorum nihil perspiciatis repellendus debitis possimus fugiat accusamus vero nesciunt ea, ullam quos sunt!
                    </p>
                    <p className="mb-3 me-xxl-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia reprehenderit consequuntur alias
                     quo dicta eos dolorum nihil perspiciatis repellendus debitis possimus fugiat accusamus vero nesciunt ea, ullam quos sunt!
                    </p>
                </div>
            </div>
        </Content>
    )
}

export default Home;