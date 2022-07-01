import { useEffect, useState } from "react";
import Content from "../../template/content";
import Post from "../../components/post";
import { Post as PostProps} from "../../types/Post";
import { getPosts } from "../../data/Post";
import styled from 'styled-components'
const Loader = styled.div`
  width: 110px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  span{
    font-size: 32px;
    margin: auto;
    color: #343a40;
  }
`
const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #343a40;
  animation: bounce .5s alternate infinite;

  :nth-child(2){
    animation-delay: .16s;
  }
  :nth-child(3){
    animation-delay: .32s;
  }

 @keyframes bounce {
   from{
     transform: scaleX(1.25);
   }
   to {
     transform: translateY(-50px) scaleX(1);
   }
 } 
`
const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [itensPerPage, setItensPerPage] = useState(4);
    const startIndex = currentPage * itensPerPage;
    const pages = Math.ceil(posts.length / itensPerPage);
    const endIndex = startIndex + itensPerPage
    const currentItens = posts.slice(startIndex, endIndex);
    
    useEffect(()=>{
        const getPortfolio = async () => {
          setLoading(true)
          setPosts(await getPosts())
          setLoading(false)
        }
        try{
            getPortfolio();
        } catch (error) {
            alert(error);
        }
    }, []);

    return(
        <Content>
            {loading &&
                <div className="d-flex justify-content-center">
                <Loader>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                    <span>Aguarde</span>
                </Loader>
                </div>
            }
            {!loading && posts.length > 0 &&
                <div className="d-flex justify-content-center mt-4 mt-lg-2">
                    <div className="container-xxl">
                        {currentItens.map((item, index) => (
                            <>
                            {index%2===0 &&
                                <div key={index}>
                                <Post content={item}  align='' textAlign='text-md-start' key={item.id}/>
                                <hr className="my-5"/>
                                </div>
                            }
                            {index%2!==0 &&
                                <div key={index}>
                                <Post content={item} align='order-md-2' textAlign='text-md-end' key={item.id}/>
                                <hr className="my-5"/>
                                </div>
                            }  
                            </>
                        ))}
                    </div>
                </div> 
            }
            {!loading &&
                <div className="d-flex justify-content-center mt-2">
                    <ul className="pagination">
                        <li className="page-item">
                            <button onClick={(e) => setCurrentPage(currentPage-1)} className={`btn btn-light ${currentPage === 0 ? 'disabled' : ''} p-2 me-1`} ><i className="bi bi-caret-left-fill"></i></button>
                        </li>
                        <li className="page-item">
                            <button onClick={(e) => setCurrentPage(currentPage+1)} className={`btn btn-light ${currentPage === pages-1 ? 'disabled' : ''} p-2 ms-1`}><i className="bi bi-caret-right-fill"></i></button>
                        </li>
                    </ul>
                </div>    
            }       
        </Content>
    )
}

export default Portfolio;