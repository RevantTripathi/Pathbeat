import React, { useState, useEffect } from 'react'
import HomeCard from './homecard';
import './home.css'
import axios from "axios";
import LongDesc from '../LongDescPage/longDesc';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


const Home = () => {


    const [data, setData] = useState([]);


    async function getData() {
        try {
            // http://localhost:5000/data
            let { data } = await axios.get('https://pathbeat-backend.onrender.com/data')
            //   https://pathbeat-backend.onrender.com/data
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='homepage'>

            <h1> Movie HomePage</h1>
            {data?.map((value) => (
                <HomeCard
                    title={value.title}
                    shortDesc={value.shortDesc}
                    longDesc={value.longDesc}
                    imageUrl={value.imageUrl}
                />
            ))}


            

        </div>
    )
}

export default Home;