import React from 'react'
import {IoMdCheckmark} from 'react-icons/io'

export default function ServicesPrice({ item }) {
    const {
      heading,
      suivi,
      suiviTwo,
      classBg,
      price,
      minutes,
      listOne,
      listTwo,
      listThree,
      listFour,
      listFive,
      listSix,
    } = item;
    return (
        <div className={`pricing  ${classBg}`}>
          <h4 className="pricing__heading section-heading">{heading}</h4>
          <strong className="pricing__price">{price}</strong>
          <span className="pricing__minutes">{minutes}</span>
          {suivi ? <span className="pricing__suivi"> {suivi} </span> : null}
          {suivi ? <span className="pricing__suivi"> {suiviTwo} </span> : null}
          <ul className="pricing__list-element">
            <li className="pricing__list"><IoMdCheckmark className='icon-check' /> {listOne}</li>
            <li className="pricing__list"><IoMdCheckmark className='icon-check' /> {listTwo}</li>
            <li className="pricing__list"><IoMdCheckmark className='icon-check' /> {listThree}</li>
            {listFour ? <li className="pricing__list"><IoMdCheckmark className='icon-check' /> {listFour}</li> : null}
            {listFive ? <li className="pricing__list"><IoMdCheckmark className='icon-check' /> {listFive}</li> : null}
            {listSix ? <li className="pricing__list"><IoMdCheckmark className='icon-check' /> {listSix}</li> : null}
            
          </ul>
          <div className="pricing__date">
            <a className='btn-takeadate'
              href="https://www.gorendezvous.com/en/Osteosante"
              rel="noreferrer noopener"
              target="_blank"
            >
                Prendre rendez-vous
            </a>
          </div>
        </div>
      );
}
