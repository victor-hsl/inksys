import { useEffect, useState } from "react";
import Content from "../../template/content";
import { setHeader } from "../../hooks/useHeader";
import { setActive } from "../../hooks/navActive";
import Post from "../../components/post";
import { Post as PostProps} from "../../types/Post";
const Portfolio = () => {
    const [item, setItem] = useState<PostProps>({id: '1', title: 'Titulo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error facilis provident labore delectus nisi impedit illo odit neque beatae vel quaerat saepe, quia enim earum dolore amet cumque ducimus.',
                                                     duration: '01:30', material: 'RL 03, RL05', category: 'Old School', urlPhoto: '', date: '06/06/0666'});
    useEffect(() => {
        setHeader('Portfolio','Most recent works done');
        setActive(2);
    }, []);
    
    return(
        <Content>
            <div className="container-xxl">
                <Post content={item}  align='' textAlign='text-md-start' key={item.id}/>
                <hr className="my-5"/>
                <Post content={item}  align='order-md-2' textAlign='text-md-end' key={item.id}/>
            </div>
        </Content>
    )
}

export default Portfolio;