import NavBar from "../template/navbar";
import Content from "../template/content";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../connections/FirebaseConnection";
import { onAuthStateChanged, User } from "firebase/auth";

type Props = {
    children: ReactNode;
}

const Main = ({children} : Props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else {
                navigate('/login');
            }
        })
    }, []);
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