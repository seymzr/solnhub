import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs";
import Services from './Services';
import './services.css'

const SingleService = ({service}) => {
  return (
    <div className='item bg-dark translate-effect'>
        <div className="item-icon">
            <span className='item-icon'>
                {service.icon}
            </span>
            <h4 className='item-title fs-25'>{service.title}</h4>
            <p className='fs-19 text'>{service.text}</p>
            <a href="/" className='item-link text-grey'>
                <BsArrowRightCircle size={30} />
            </a>
        </div>
    </div>
  )
}

export default SingleService