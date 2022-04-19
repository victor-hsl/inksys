import {useState, useEffect, FormEvent} from 'react'
import './hr.css'
import {Content} from '../template/content'
import  ListTemplate  from '../components/post/listTemplate'
import GridTemplate from '../components/post/gridTemplate'

const Portfolio = () => {
    const [active, setActive] = useState(0);

    return (
      <Content>
        <div>
          <div className="d-flex justify-content-end" role="group">
            <div className="btn-group col-md-1">
              <button type="button" className={`btn btn-outline-secondary ${active===0 ? 'active' : ''}`} onClick={(e) => setActive(0)} ><i className="bi bi-justify"></i></button>
              <button type="button" className={`btn btn-outline-secondary ${active===1 ? 'active' : ''}`} onClick={(e) => setActive(1)}><i className="bi bi-grid-3x3-gap-fill"></i></button>
            </div>
          </div>
          <hr className="featurette-divider"/>
          { active === 0 &&
            <ListTemplate/>          
          }
          {active === 1 &&
            <GridTemplate/>
          }        
        </div>
      </Content>
    );
}

export default Portfolio;

