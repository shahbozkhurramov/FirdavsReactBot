import React from 'react'

export default function Contactus() {
    function validateForm()
    {
        var name = document.getElementById("name") as HTMLInputElement;
        var phone = document.getElementById("phone") as HTMLInputElement;
        var message = document.getElementById("message") as HTMLInputElement;
        var valid = true;

    if(name.value === "") {
        var nameError = document.getElementById("nameError") as HTMLInputElement;
        nameError.innerHTML = "Ismingizni kiriting";
        nameError.style.visibility = "visible";
        valid = false;
    }

    if(phone.value === "") {
        var phoneError = document.getElementById("phoneError") as HTMLInputElement;
        phoneError.innerHTML = "Telefon raqamingizni kiriting";
        phoneError.style.visibility = "visible";
        valid = false;
    }

    if(message.value === "") {
        var messageError = document.getElementById("messageError") as HTMLInputElement;
        messageError.innerHTML = "Xabarni kiriting";
        messageError.style.visibility = "visible";
        valid = false;
    }

    if(valid) {
        // redirect to home
        window.location.href = "/";
    }

    return valid;
    }
  return (
    <div className="contact-form-container">
      <form className="contact-form">
          <h2 className="form-title">Biz bilan bog'laning</h2>
          <div className="form-field">
              <label htmlFor="name">Ismingiz:</label>
              <input type="text" id="name" name="name"/>
              <div className="error-message" id="nameError"></div>
          </div>
          <div className="form-field">
              <label htmlFor="phone">Telefon raqamingiz:</label>
              <input type="tel" id="phone" name="phone"/>
              <div className="error-message" id="phoneError"></div>
          </div>
          <div className="form-field message-field">
              <label htmlFor="message">Xabar:</label>
              <textarea id="message" name="message"></textarea>
              <div className="error-message" id="messageError"></div>
          </div>
          <div className="form-field">
              <button className="submit-button" type='button' onClick={validateForm}>Yuborish</button>
          </div>
      </form>
  </div>
  )
}
