import React from 'react'
import './about.css'
import images from '../../constants/images'

const About = () => {
  return (
    <section className="about section-p bg-dark" id='about'>
        <div className="container">
            <div className="about-content grid text-center">
                <div className="content-left">
                    <img src={images.about_main_img} alt="" />
                </div>
                <div className="content-right">
                    <div className="section-t">
                        <h3>About Us</h3>
                    </div>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut nisi est velit veniam itaque impedit consequuntur illum ipsa. Id omnis distinctio quisquam sed doloribus quos tenetur cum, fugiat quasi dignissimos optio ipsam magnam sequi natus sunt illum. Voluptatibus, magni!Lorem ipsum dolor sit amet agun dor</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam blanditiis, ex rerum quas impedit?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About