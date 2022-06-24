import Content from "../../template/content";
import DestaquesGrid from "../../components/destaquesGrid";

const Home = () => {

    return(
        <Content>
            <div className="text-center h1 my-2 my-lg-4">Destaques</div>
            <hr/>
            <div className="my-5">
                <DestaquesGrid/>
            </div>
        </Content>
    )
}

export default Home;