import React, { useState } from "react";
import IconSocial from "../../IconSocial";
import WrapperHeading from "../../WrapperHeading";
import { validate, res } from "react-email-validator";
import * as emailjs from "emailjs-com";
import MessageBox from "../../MessageBox";
require('dotenv').config()




export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const sendMail = () => {

    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      console.log("erreur true");
      setError(true);
    } else {
      validate(email);
      if (!res) {
        setErrorEmail(true)
        console.log("erreur true email");
      setError(true);
      } else {
        setErrorEmail(false)
        console.log("pas d'erreur false");
        const template_params = {
          name: name,
          email: email,
          lastname: lastName,
          subject: subject,
          message: message,
        };

        const service_id = "Gmail";
        const template_id = process.env.REACT_APP_TEMPLATE;
        emailjs
          .send(
            service_id,
            template_id,
            template_params,
            process.env.REACT_APP_USER_ID
          )
          .then(
            function (response) {
              alert("Votre message a bien été envoyé");
            },
            function (err) {
              console.log("FAILED...", err);
            }
          );
        setName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    }
  };
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

            {error ? <MessageBox variant='success'>Votre message a bien été envoyé.</MessageBox> :<MessageBox variant='danger'>Les Champs sont obligatoires.</MessageBox>   }
              <div className="form__lil-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Prénom *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form__lil-input">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Nom *"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form__group">
              
              {errorEmail && <MessageBox variant='danger'> L'adresse email n'est pas valide</MessageBox> }
              <input
                type="text"
                name="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form__group">
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Sujet *"
                required
              />
            </div>

            <div className="form__group">
              <textarea
                name="message"
                placeholder="Comment puis-je vous aider ? *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" onClick={sendMail}>ENVOYER</button>
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
