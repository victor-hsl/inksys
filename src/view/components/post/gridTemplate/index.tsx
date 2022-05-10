import {useState, useEffect, Fragment } from 'react'
import '../../../portfolio/hr.css'
import {Photo} from '../../../../model/Photo'
import * as Photos from '../../../../dao/Photo'
import Card from './card'
import * as C from './styles'
import Loading from '../../../../assets/loading.gif'
const GridTemplate = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [itensPerPage, setItensPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * itensPerPage
    const pages = Math.ceil(photos.length / itensPerPage)
    const endIndex = startIndex + itensPerPage
    const currentItens = photos.slice(startIndex, endIndex)

    useEffect(()=>{
        const getPhotos = async () => {
          setLoading(true);
          setPhotos(await Photos.getPortfolio());
          setLoading(false);
        }
        getPhotos();
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
        {!loading && photos.length > 0 &&
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
            {currentItens.map((item, index) => (
                    <Card url={item.url} name={item.name}/>
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