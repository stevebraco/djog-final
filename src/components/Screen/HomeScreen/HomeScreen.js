import React from 'react'
import MyServicesCard from '../../MyServicesCard'
import TakeADate from '../../TakeADate'
import WrapperHeading from '../../WrapperHeading'
import data from './data'



export default function HomeScreen() {
    return (
        <>
        <section className='home'>
            <div className="home__background">
                <div className="home__heading">
                    <h1 className='home__title'>La santé, <span className='home__text'>c'est vivre le destin de son corps.</span></h1>
                    <a href="https://www.gorendezvous.com/en/Osteosante" rel="noreferrer noopener" target="_blank" className='btn-takeadate'>Réservez votre rendez-vous</a>
                </div>
            </div>
            
        </section>
        <section className='myservices container section'>
            <WrapperHeading title='Mes Services'>
            L’évaluation de votre condition physique est essentielle à la
            planification de tout programme de conditionnement à venir, et ce,
            quelque soit votre objectif : la gestion de la douleur, la
            performance, la gestion du poids, l’amélioration posturale.
            </WrapperHeading>

            <div className="myservices-card dp-flex">
                {
                    data.map( item => (
                        <MyServicesCard key={item.id} item={item} />
                    ))
                }
                
            </div>

        </section>
            <TakeADate/>
        </>
    )
}
