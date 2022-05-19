import {useState, useEffect} from 'react'
import {Post} from '../../../../model/Post'
import { getPosts } from '../../../../dao/Post'
import '../../../portfolio/hr.css'
import Card from './card'
import * as C from './styles'
const GridTemplate = () => {
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
        <C.Container>
        {loading &&
          <div className="d-flex justify-content-center">
            <C.Loader>
              <C.Ball></C.Ball>
              <C.Ball></C.Ball>
              <C.Ball></C.Ball>
              <span>Aguarde</span>
            </C.Loader>
          </div>
        }
        {!loading && posts.length > 0 &&
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
            {currentItens.map((item, key) => (
                    <Card content={item} key={key}/>
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
        </C.Container>
    );
}

export default GridTemplate;