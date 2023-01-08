import React from 'react'
import '../Home/Home.css'
import Title from '../Title/Title';

export default function Home() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  
  
  return (
    <>
      <div className="header text-white text-center">
        <div className="conatiner">
        <div className="item d-flex justify-content-center ">
            <div className="content">
            <img src={images['img1.svg']} />
            <h1 className='mt-5'>Start React</h1>
            <Title/>
            <p>Graphic Artist - Web Designer - Illustrator</p>

            </div>
        </div>
      </div>
      </div>
    
    </>
  )
}
