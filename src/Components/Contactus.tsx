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

  return (
    <>
    <div className="contact-form-container" data-aos="zoom-in-up" data-aos-duration="800">
      <form className="contact-form" id='contact-form'>
      <img src={require('../Images/contactus.jpg')} alt="Course 1" className="contact-form-image" />
          <h2 className="form-title" data-aos="fade-down" data-aos-duration="1500">Biz bilan bog'laning</h2>
          <div className="form-field" data-aos="fade-up" data-aos-duration="1500">
              <label htmlFor="name">Ismingiz:</label>
              <input type="text" id="name" ref={nameRef} name="name"/>
              <div className="error-message" id="nameError"></div>
          </div>
          <div className="form-field" data-aos="fade-up" data-aos-duration="2000">
              <label htmlFor="phone">Telefon raqamingiz:</label>
              <input type="tel" id="phone" defaultValue={phoneCode} ref={phoneRef} name="phone"/>
              <div className="error-message" id="phoneError"></div>
          </div>
          <div className="form-field message-field" data-aos="fade-up" data-aos-duration="2000">
              <label htmlFor="message">Xabar:</label>
              <textarea id="message" ref={messageRef} name="message"></textarea>
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
