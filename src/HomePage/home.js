import React, {useState, useEffect} from 'react'
import HomeCard from './homecard';
import './home.css'
import axios from "axios";

const Home = () =>{


    const [data, setData] = useState([]);

    async function getData() {
    
        try {
        
          let {data}=await axios.get('http://localhost:5000/data')
          console.log(data)
          setData(data)
        } catch (error) {
          console.log(error);
        }
    
      }

      useEffect(() => {
        getData();
      }, []);

    return(
    <div className='homepage'>
    {/* <HomeCard title='Movie' description='Hello World'/> */}

    {data?.map((value) => (
        <HomeCard
        // getPosts={getPosts}
        //   id={value._id}
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