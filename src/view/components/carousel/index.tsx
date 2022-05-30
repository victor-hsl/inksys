import { useEffect, useState } from 'react'
import * as Photos from '../../../dao/Photo'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import {Photo} from '../../../model/Photo'
import PlaceHolder1 from '../../../assets/placeholder1300.png'
import PlaceHolder2 from '../../../assets/placeholder1300(1).png'
import PlaceHolder3 from '../../../assets/placeholder1300(2).png'

const Caroussel = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    const getPhotos = async () => {
      setPhotos(await Photos.getCarousel());
      setLoading(false);
    }

    getPhotos();
  }, []);

  return(
    <div>
      { loading &&
        <Carousel>
          <Carousel.Item>
            <img className="item" src={PlaceHolder1}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="item" src={PlaceHolder2}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="item" src={PlaceHolder3}/>
          </Carousel.Item>
        </Carousel>
      }
      {!loading && photos.length > 0 &&
        <Carousel className="carrossel">
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="item"
              src={photo.url}
              alt={photo.name}
            />
          </Carousel.Item>
        ))}
        </Carousel>
      }
    </div>
  );
}

export default Caroussel;