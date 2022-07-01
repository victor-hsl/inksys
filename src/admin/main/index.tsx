import NavBar from "../template/navbar";
import Content from "../template/content";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const Main = ({children} : Props) => {
    return(
        <>
            <NavBar/>
            <Content>
                {children}
            </Content>
        </>
    )
}

export default Main;