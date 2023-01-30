import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    } 
  return (
    <div>
        <h1>Hech narsa topilmadi</h1>
        <button onClick={navigateToHome} className="submit-button">Orqaga</button>
        </div>
  )
}
