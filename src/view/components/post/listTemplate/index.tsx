import {useState, useEffect, Fragment } from 'react';
import {Featurette} from './featurette'
import '../../../portfolio/hr.css'
import {Photo} from '../../../../model/Photo'
import * as Photos from '../../../../dao/Photo'
import Loading from '../../../../assets/loading.gif'

const ListTemplate = () => {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState<Photo[]>([])
    const [itensPerPage, setItensPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * itensPerPage
    const pages = Math.ceil(photos.length / itensPerPage)
    const endIndex = startIndex + itensPerPage
    const currentItens = photos.slice(startIndex, endIndex)

    useEffect(()=>{
        const getPhotos = async () => {
          setLoading(true)
          setPhotos(await Photos.getPortfolio())
          setLoading(false)
        }
        getPhotos();
      }, []);
    return(
        <div>
        {loading &&
            <div className="loading">
              <p className="display-6">Aguarde...</p>
              <img src={Loading} alt="Aguarde..." width="50px"/>
            </div>
        }
        
        {!loading && photos.length > 0 &&
          <div>
            {currentItens.map((item, index) => (
              <Fragment>
                {index%2!==0 &&
                  <div>
                    <Featurette url={item.url} name={item.name} align=''/>
                    <hr className="featurette-divider"/>
                  </div>
                }
                {index%2===0 &&
                  <div>
                    <Featurette url={item.url} name={item.name} align='order-md-2'/>
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