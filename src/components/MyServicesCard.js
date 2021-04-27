import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'

export default function MyServicesCard({item}) {
    const {img, heading, description, link} = item
    return (
        <div className='myservices-card__container'>
                <a href={link}>
            <figure className="myservices-card__figure">
                    <img className="myservices-card__img" src={img} alt={heading} loading='lazy'/>
                    <h3 className="myservices-card__heading"> {heading} </h3>
            </figure>
                </a>
                <p className="myservices-card__desc"> {description} </p>
                <a className='myservices-card__link' href={link}>En savoir plus <BiRightArrowAlt className='myservices-card__arrow' /> </a>
        </div>
    )
}
