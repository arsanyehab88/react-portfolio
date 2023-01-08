import React from 'react'
import "../Contact/Contact.css"
import TitleBlack from '../TitleBlack/TitleBlack';
export default function Contact() {
  return (
    <>
    <div className="container">
      <div className="contact-items  ">
        <h2 className=' text-center'>Contact Me</h2>
        <TitleBlack/>
      </div>
      <form className='w-50 m-auto'>
        <input type="text" className=' form-control form-control-lg border-0 border-bottom  mb-3' placeholder='Name' />
        <input type="email" className=' form-control form-control-lg border-0 border-bottom mb-3' placeholder='Email Address' />
        <input type="tel" className=' form-control form-control-lg border-0 border-bottom mb-3' placeholder='Phone Number' />
        <textarea name="" id="" cols="15" rows="5" placeholder='Message' className='mb-3 form-control border-0 border-bottom form-control-lg'></textarea>
        <button className='btn btn-success btn-lg mb-5'>Send</button>
      </form>
      
    </div>


      <div className="footer py-5">
        <div className=" container">
          <div className="row">
            <div className="col-md-4">
              <h4>Location</h4>
              <p>2215 John Daniel Drive <br />
                Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h4>AROUND THE WEB</h4>
                <div className="social d-flex">
                                <a href="" className="link d-flex justify-content-center align-items-center ms-3">
                                  <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="" className="link d-flex justify-content-center align-items-center ms-3">
                                  <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="" className="link d-flex justify-content-center align-items-center ms-3">
                                  <i className="fa-solid fa-g"></i>
                                </a>
                                <a href="" className="link d-flex justify-content-center align-items-center ms-3">
                                  <i className="fa-brands fa-pinterest"></i>
                                </a>
                  </div>              
            </div>
            <div className="col-md-4">
              <h4>ABOUT FREELANCER</h4>
              <p className=' ms-4'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>

      </div>

      <div className="end">
        <div className="container text-center text-white pt-5 pb-2">
          <p>Copyright © Your Website 2021</p>
        </div>
        
      </div>

    </>
  )
}
