import React from 'react'
import './homecard.css'
import Image from './ct.jpg'


const HomeCard = () =>{
    return(

<div className='main-card'>
    <div className='title'>
        <h2>Hello peple</h2>
    </div>
    <div className='details'>
        {/* <div className='m-image'>
            <img src={Image}/>
             
        </div> */}
        <img src={Image}/>
        <div className='mini_desc'>
            <h2>Hello myname is Revant</h2>
        </div>
    </div>
   
</div>

    )
}

export default HomeCard;