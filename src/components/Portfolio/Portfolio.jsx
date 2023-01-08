import React, { useState } from 'react'
import "../Portfolio/Portfolio.css"
import TitleBlack from '../TitleBlack/TitleBlack';




export default function Portfolio() {
  let [show,setShow]=useState({})
  
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  let [data , setData]=useState(
    [
      {
        title:"Log Cabin",
        img:images["img2.png"],
        pargraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    
      },
      {
        title:"Tasty Cake",
        img:images["img3.png"],
        pargraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      },
      {
        title:"Circus Tent",
        img:images["img4.png"],
        pargraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      },
      {
        title:"Controller",
        img:images["img5.png"],
        pargraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      },
      {
        title:"Locked Safe",
        img:images["img6.png"],
        pargraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      },
      {
        title:"Submarine",
        img:images["img7.png"],
        pargraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      },
      
    ]
    
  )
function click(e){
  let x= data.find((ele)=> ele.title===e)
  setShow(x)
  console.log(x.title)
}

  
  return (
    <>
    <div>
    <div className=" container">
      <div className="content">
        <div className="row">
          <div className="col-md-12 mt-5 pt-5  text-center">
            <h2>Portfolio</h2>
            <TitleBlack/>       
          </div>
        </div>
      </div>
      <div className="row  justify-content-center">
          {data.map((ele,i)=>(
            <div className="col-md-4 " key={i}>
              <div className="port ">
                    <div onClick={()=> click(ele.title)} data-bs-toggle="modal" data-bs-target="#exampleModal"  className="layer  d-flex justify-content-center align-items-center w-100 rounded-3">
                      <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                    </div>
                
              <img src={ele.img}  className=" w-100 rounded-3 mb-5 " alt="" />
              </div>           
            </div>
            
          ))}
      </div>
    </div>      
    </div>

    <div>
      <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-items">
                <div className="modal-dialog  modal-xl rounded-4">
              <div className="modal-content">
              <div className="item ms-auto">
              <button type="button" className="btn-close fs-1 m-4" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
                <div className=" container">
                <div className="modal-header  d-block text-center ">
                    <div className="modal-tit">
                        <h2 className="modal-title" id="exampleModalLabel">{show.title}</h2>
                    <TitleBlack/>
                    </div>
                    <div className="modal-img mb-5">
                      <img src={show.img} className="w-50 rounded-3" alt="" />
                    </div>
                    <div className="content-modal w-75  m-auto">
                      <p className='text-center'>{show.pargraph}</p>
                      <button type="button" className="btn btn-success  mt-5" data-bs-dismiss="modal">Close Window</button>
                    </div>
                </div>
                </div>
                <div className="modal-end">
                  
                  
                </div>
              </div>
            </div>
            </div>
      </div>
    </div>

    
    
    </>
    
  )
}
