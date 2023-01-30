import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";

export default function Contactus() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/firdavsreactbot");
    }

    const phoneCode = '+998';

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    function validateForm()
    {
        var valid = true;
        ChangeVisibility("nameError", "hidden");
        ChangeVisibility("phoneError", "hidden");
        ChangeVisibility("messageError", "hidden");

        if(nameRef.current?.value === "") {
            ChangeVisibility("nameError", "visible", "Ismingizni kiriting!");
            valid = false;
        }

        if(phoneRef.current?.value === phoneCode) {
            ChangeVisibility("phoneError", "visible", "Telefon raqamingizni kiriting!");
            valid = false;
        }

        if(messageRef.current?.value === "") {
            ChangeVisibility("messageError", "visible", "Xabaringizni kiriting!");
            valid = false;
        }

        if(valid) {
            ChangeVisibility("SuccessMessage", "visible", "Xabar yuborildi!");
            ChangeVisibility("contact-form", "hidden")
            setTimeout(navigateToHome, 2000);
        }
    }

    function ChangeVisibility(id: string, visibility: string, message?: string) {
        var element = document.getElementById(id) as HTMLInputElement;
        element.innerHTML = message ?? "";
        element.style.visibility = visibility;
    }

    function ScrollToInput(id: string) {
        var element = document.getElementById(id) as HTMLInputElement;
        element.scrollTop = element.scrollHeight;
    }

  return (
    <>
    <div className="contact-form-container" data-aos="zoom-in-up" data-aos-duration="800">
      <form className="contact-form" id='contact-form'>
        <div className='our-location' data-aos="fade-up" data-aos-duration="1500">
            <div className="contact-card-title">Bizning manzil</div>
            <div className="contact-card-row">
                <div className="contact-card-item"><i className="fas fa-map-marker-alt"></i> Manzil: <a href="https://yandex.com/maps/-/CCU55AxJpC">Chorsu metrodan 10 minut</a></div>
                <div className="contact-card-item"><i className="fas fa-phone"></i> Telefon raqam: <a href="tel:+998909228267">+998 91 788-69-95 </a></div>
                <div className="social-icons">
                    <a href="https://t.me/firdavs_talim" style={{color:'#2c83e0'}} target="_blank" rel='noreferrer'>
                        <i className="fab fa-telegram"></i>
                    </a>
                    <a href="https://www.instagram.com/firdavs_talim" style={{color:'purple'}} target="_blank" rel='noreferrer'>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@firdavs_talim" style={{color:'red'}} target="_blank" rel='noreferrer'>
                        <i className="fab fa-fw fa-youtube"></i>
                    </a>
                    <a href="https://m.facebook.com" target="_blank" rel='noreferrer'>
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </div>
            </div>
        </div>
        <h2 className="form-title" data-aos="fade-down" data-aos-duration="1000">Biz bilan bog'laning</h2>
        <div className="form-field">
            <input type="text" id="name" ref={nameRef} placeholder="Ismingiz" name="name" onFocus={() => ScrollToInput("name")}/>
            <div className="error-message" id="nameError"></div>
        </div>
        <div className="form-field">
            <input type="tel" id="phone" defaultValue={phoneCode} placeholder="Telefon raqamingiz" ref={phoneRef} name="phone" onFocus={() => ScrollToInput("phone")}/>
            <div className="error-message" id="phoneError"></div>
        </div>
        <div className="form-field message-field">
            <textarea id="message" ref={messageRef} placeholder="Xabar..." name="message" onFocus={() => ScrollToInput("name")}></textarea>
            <div className="error-message" id="messageError"></div>
        </div>
        <div className="form-field">
            <button className="submit-button" type='button' onClick={validateForm}>Yuborish</button>
        </div>
      </form>
  </div>
  </>
  )
}
