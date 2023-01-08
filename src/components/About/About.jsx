import React from 'react'
import "../About/About.css"
import Title from '../Title/Title';

export default function About() {
  return (
    <>
    <div>
      <div className="about">
        <div className="container">
          <div className="about-item">
              <h2>About</h2>
              <Title/>
            </div>
            <div className="row">
              <div className="col-md-6    text-white">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files 
                  including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6  text-white">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
            </div>
        </div>
      </div>      
    </div>

      

    </>
  )
}
