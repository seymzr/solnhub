import React from 'react'
import './header.css'
import {FaPaperPlane} from "react-icons/fa"
import Navbar from '../Navbar/navbar'

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
      <Navbar/>
      <div className="container">
        <div className="header-content text-center flex flex-column ">
          <h1 className='text-uppercase header-title'>marketing solution Agency</h1>
          <p className='text-lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti odit, molestias in, nisi quasi accusamus suscipit, ipsum placeat at unde deleniti.</p>
          <a href="/" className='btn header-btn btn-blue'>
            <FaPaperPlane/> <span>get started</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header