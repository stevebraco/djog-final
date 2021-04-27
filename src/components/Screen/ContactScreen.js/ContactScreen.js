import React from "react";
import IconSocial from "../../IconSocial";
import WrapperHeading from "../../WrapperHeading";

export default function ContactScreen() {
  return (
    <>
      <section className="section contact ">
        <WrapperHeading title="Contact" />

        <div className="contact__container  dp-flex align-c">
          <div className="contact__info">
            <strong className="contact__strong">Me contacter</strong>
            <div className="contact__wrapper">
              <div>
                <span className="contact__email-phone">Email : </span>{" "}
                <a
                  href="mailto:djogtherapy@gmail.com"
                  className="contact__link contact__link-email"
                >
                  djogtherapy@gmail.com{" "}
                </a>
              </div>
              <div>
                <span className="contact__email-phone">Phone : </span>{" "}
                <a className="contact__link" href="tel:+1(438)9342083">
                  +1 (438) 934 2083
                </a>
              </div>
            </div>
            <IconSocial colorStyle="icon-info" />
          </div>
          <div className="form">
            <div className="form__wrapper dp-flex">
              <div className="form__lil-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Prénom *"
                  required
                />
              </div>

              <div className="form__lil-input">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Nom *"
                  required
                />
              </div>
            </div>
            <div className="form__group">
              <span className="form__field-email">
                L'adresse email n'est pas valide
              </span>
              <input type="text" name="email" placeholder="Email *" required />
            </div>

            <div className="form__group">
              <input
                type="text"
                name="subject"
                placeholder="Sujet *"
                required
              />
            </div>

            <div className="form__group">
              <textarea
                name="message"
                placeholder="Comment puis-je vous aider ? *"
                required
              ></textarea>
            </div>
            <span className="form__field">Les Champs sont obligatoires.</span>
            <button type="submit">ENVOYER</button>
          </div>
        </div>
      </section>
      <iframe
        title="Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.521414908704!2d-73.55899458504761!3d45.51971193775967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bb1ea156f1f%3A0x5e6300fac4122f46!2s1280%20Boul.%20de%20Maisonneuve%20E%2C%20Montr%C3%A9al%2C%20QC%20H2L%202A3%2C%20Canada!5e0!3m2!1sfr!2sfr!4v1615284773450!5m2!1sfr!2sfr"
        loading="lazy"
      ></iframe>
    </>
  );
}
