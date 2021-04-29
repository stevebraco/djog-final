import React from "react";
import WrapperHeading from "../../WrapperHeading";

export default function AboutMeScreen() {
  return (
    <section className="section about container">
      <WrapperHeading title="À Propos" />

      <div className="about__profil dp-flex align-c">
        <figure className="about__figure">
          <img
            className="about__img"
            src="./images/profil.jpg"
            alt="massothérapeute"
          />
        </figure>
        <ul className="about__list">
          <li className="about__list-item">
            Massothérapeute depuis février 2020
          </li>
          <li className="about__list-item">Kinésiologue depuis 2019</li>
          <li className="about__list-item">
            Entraîneur de basket CERTIFIÉE PNCE depuis 2018
          </li>
          <li className="about__list-item">
            Massage Sportif : Formation en cours
          </li>
          <li className="about__list-item">Thérapie du Sport : À venir</li>
        </ul>
      </div>
      <div className='about__container-description'>
        <p className="about__description">
          Grand passionné de basket-ball, j’y ai joué et coaché pendant une
          dizaine d'années. Après de nombreuses blessures. c’est lors de mes
          rééducations que la thérapie m’a passionné : Je me demandais comment
          optimiser la prévention,la guérison et la performance des athlètes
          .Ces questions m’ont fait développer un fort intérêt pour la science
          du mouvement et la thérapie manuelle.
        </p>

        <p className="about__description">
          Kinésiologue et massothérapeute spécialisé en massage suédois et
          thérapeutique. Je termine une formation en massage sportif. Mes
          compétences pluridisciplinaires, me permettent de fournir un
          traitement complet centré sur le patient.
        </p>
        <p className="about__description">
          j'interviens pour soulager les douleurs musculo-articulaires et
          diminuer les effets du stress sur le corps. Mon objectif est de
          redonner à mes patients le contrôle de leurs corps et les libérer de
          leurs douleurs.
        </p>
        <p className="about__description">
          J’interviens auprès d’une population sédentaire, sportive, et aînés.
          Je suis membre du <a className='about__link' href="https://www.rmqmasso.ca/" rel="noreferrer noopener" target="_blank"> Regroupement des Massothérapeutes du Québec</a> (RMQ),
          et de la <a className='about__link' href="https://www.kinesiologue.com/fr/" rel="noreferrer noopener" target="_blank"> Fédération des Kinésiologues du Québec</a> (FKQ).
        </p>

        <strong className="about__strong">
          À ce titre, je remets des reçus d’assurances.
        </strong>
      </div>
    </section>
  );
}
