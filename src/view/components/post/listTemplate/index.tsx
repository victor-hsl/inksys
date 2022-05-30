import {useState, useEffect, Fragment } from 'react';
import {Featurette} from './featurette'
import { getPosts } from '../../../../dao/Post';
import { Post } from '../../../../model/Post';
import '../../../portfolio/hr.css'
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

const ListTemplate = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false)
  const [itensPerPage, setItensPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(0)
  const startIndex = currentPage * itensPerPage
  const pages = Math.ceil(posts.length / itensPerPage)
  const endIndex = startIndex + itensPerPage
  const currentItens = posts.slice(startIndex, endIndex)

  useEffect(()=>{
      const getPortfolio = async () => {
        setLoading(true)
        setPosts(await getPosts())
        setLoading(false)
      }
      getPortfolio();
    }, []);
  return(
      <div>
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
        <div>
          {currentItens.map((item, index) => (
            <Fragment>
              {index%2===0 &&
                <div>
                  <Featurette content={item}  align='' textAlign='text-md-start' key={item.id}/>
                  <hr className="featurette-divider"/>
                </div>
              }
              {index%2!==0 &&
                <div>
                  <Featurette content={item} align='order-md-2' textAlign='text-md-end' key={item.id}/>
                  <hr className="featurette-divider"/>
                </div>
              }  
            </Fragment>
          ))}
        </div>
      }
      {!loading &&
        <div className="d-flex justify-content-center">
          <ul className="pagination">
            <li className="page-item">
              <button onClick={(e) => setCurrentPage(currentPage-1)} className={`btn btn-light ${currentPage === 0 ? 'disabled' : ''}`} ><i className="bi bi-caret-left-fill"></i></button>
            </li>
            <li className="page-item">
              <button onClick={(e) => setCurrentPage(currentPage+1)} className={`btn btn-light ${currentPage === pages-1 ? 'disabled' : ''}`}><i className="bi bi-caret-right-fill"></i></button>
            </li>
          </ul>
        </div>
      }  
      </div>
  );
}

export default ListTemplate;