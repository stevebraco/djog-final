import React from 'react'
import ServicesPrice from '../../ServicesPrice';
import WrapperHeading from '../../WrapperHeading';
import data from './data'

export default function ServicesScreen() {
    return (
        <div className='section services container' >
            <WrapperHeading title='Mes Services' >
            Selon vos besoins et vos envies, vous pouvez profiter de différents types de prestations.
            </WrapperHeading>
            <div className="services__container dp-flex">
                <h3 className='services__heading'>Massothérapie</h3>
                {
                    data.masso.map(item => (
                        <ServicesPrice key={item.id} item={item} />
                    ))
                }
            </div>
            <div className="services__container dp-flex">
            <h3 className='services__heading'>Kinésiologie</h3>

                {
                    data.kine.map(item => (
                        <ServicesPrice key={item.id} item={item} />
                    ))
                }
            </div>
            <div className="services__container   ">
            <h3 className='services__heading'>Massage Sportif</h3>
            <p className='services__loading'>En formation arrive en octobre 2021</p>
            </div>

            <div className="services__container  ">
            <h3 className='services__heading'>Thérapie du Sport</h3>
            <p className='services__loading'>A venir</p>
            </div>
        </div>
    )
}
