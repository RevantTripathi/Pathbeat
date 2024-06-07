import React from 'react'
import './homecard.css'
import LongDesc from '../LongDescPage/longDesc';
import { useNavigate } from 'react-router-dom';



const HomeCard = ({ title, shortDesc, longDesc, imageUrl }) => {

    const navigate = useNavigate();
    
    return (

        <div className='main-card'>
           
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='details'>
                <img src={imageUrl} alt='icon' />
                <div className='mini_desc' onClick={() =>{navigate("/long", {state:{longDesc}})}}>
                    <h3>{shortDesc}</h3>
                </div>
            </div>

        </div>

    )
}

export default HomeCard;