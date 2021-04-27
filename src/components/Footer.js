import React from 'react'
import IconSocial from './IconSocial'

export default function Footer() {
    return (
        <footer className="footer">
          <div className="footer__container">
            <div className="footer__info">
              <img className="footer__logo" src="./images/logofooter.jpg" alt="Logo" />
              <div className="footer__address">1280 Boul. de Maisonneuve E</div>
              <div className="footer__city">Montréal, QC H2L 2A3</div>
              <div className="footer__country">CANADA</div>
              <div className="footer__country">djogtherapy@gmail.com</div>
              <div className="footer__phone">+1 (438) 934 2083</div>
            </div>
          </div>
          <IconSocial/>
        </footer>
    );
}
