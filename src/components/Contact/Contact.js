import './Contact.css'
import {BsTelephone} from "react-icons/bs";
import {ImLocation} from "react-icons/im";
import {SiGmail} from "react-icons/si";
import 'react-icons'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Slide} from 'react-reveal'
import { contact } from '../../portfolio'






const Contact = () => {
  if (!contact.email) return null

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1p0b6mb', 'template_ol4n0h4', form.current, '7DzIp8ssGPfPWSVW3')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent!")
            }, (error) => {
                console.log(error.text);
            });
    };

  return (

    <section className='section contact center' id='contact'>
        <Slide right duration={1500}>
            <h2 className='section__title'>Contact</h2>
        </Slide>
        <Slide left duration={1800}>
        <div className="contact--container">
            <div>

                <div style={{display:"inline-block"}}>
                    <form ref={form} onSubmit={sendEmail} >
                        <input className="input--mt input--name" type="text" name="user_name" placeholder="Name" />
                        <input className="input--mt input--email
                    " type="email" name="user_email" placeholder="Email" />
                        <textarea  name="message" placeholder="Message" maxLength="255"/>
                        <input type="submit" value="Send" />
                    </form>
                </div>

                <div style={{display:"inline-flex"}} className="contact--info">
                    <ul className="list--info">
                        <li className="contact--span"><span ><BsTelephone/> 09971855273</span></li>
                        <li className="contact--span"><span><ImLocation/> Dasmariñas, Cavite</span></li>
                        <a href={`mailto:${contact.email}`} className="contact--span">
                            <li><span type='button' className='mail-btn'><SiGmail/> armando.antonis@cvsu.edu.ph</span></li>
                        </a>
                    </ul>
                </div>

            </div>
        </div>
        </Slide>

    </section>
  )
}

export default Contact
