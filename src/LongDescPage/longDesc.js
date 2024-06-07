import React, { Component } from 'react'
import "./longDesc.css"
import { useLocation } from 'react-router-dom';

const LongDesc = () => {

    const location = useLocation();
    const { longDesc,title} = location.state || {};
    return (
        <div className="big">
            <div className="text_area">
                <h1>{title}</h1>
                <h2>{longDesc}</h2>
            </div>
        </div>    
        
    )
}

export default LongDesc;