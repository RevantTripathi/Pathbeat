import React from 'react'
import './homecard.css'
import Image from './ct.jpg'


const HomeCard = ({title,shortDesc,longDesc,imageUrl}) =>{
    return(

<div className='main-card'>
    <div className='title'>
        <h3>{title}</h3>
    </div>
    <div className='details'>
        {/* <div className='m-image'>
            <img src={Image}/>
             
        </div> */}
        <img src={imageUrl} alt='icon'/>
        <div className='mini_desc'>
            <h3>{shortDesc}</h3>
        </div>
    </div>
   
</div>

    )
}

export default HomeCard;