import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import { App as Container } from './styles/global'
import Navigation from './template/nav';
function App() {
  const [position, setPosition] = useState(0);
  const myRef = React.createRef<HTMLElement>();
  const handleScroll = () => {
    if(myRef.current?.scrollTop){
      setPosition(myRef.current.scrollTop);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Container ref={myRef} onScroll={handleScroll}>
      <Navigation scrollPosition={position}/>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
      <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias. Facilis nostrum debitis ratione soluta neque accusamus
       tempora molestias deserunt provident illo numquam quos odio, nesciunt deleniti reprehenderit praesentium blanditiis.
      </div>
    </Container>
  );
}

export default App;
