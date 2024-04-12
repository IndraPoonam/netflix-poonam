import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Datamovie() {
    const [data,setData]=useState([]);
    const [more,setMore] = useState(7)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((Response=>{
            setData(Response.data)
        }))
        .catch ((error)=>{
            console.log("Error for testing api",error)
        })
    })

    const showmore =()=>{
      setMore(more+1)
    }
    

  return (
    <>
      <div className='w-full h-auto px-20 py-16 grid grid-cols-3 gap-10'>
        { data.slice(0,more).map((value, index) => (
          <div key={index} className='w-full h-[450px] border border-red-500 bg-blue-400   rounded relative'>
  

            <h2 className='text-teal-300 text-4xl font-bold absolute bottom-18 bg-black left-16'>
              {value.id}
            </h2>
            <h1>{value.title}</h1>
 <img className='h-[40vh] ' src='https://img.freepik.com/premium-vector/movie-theater-signboard-blue_34230-295.jpg'/>
         <Link to={`data/${value.id}`}> <button className='w-[5rem] h-[6vh] border-2 border-red-900 bg-yellow-300
          text-black font-bold ml-[7rem] '>MORE &nbsp;
         <i class="fa-solid fa-caret-right"></i></button></Link><br/><br/>
         <button onClick={()=> showmore()} className='w-[15rem] h-[6vh] bg-yellow-300 text-black font-bold '>Get more Movie</button>

         </div>
        ))}
      </div>
    </>
  );
}

export default Datamovie;
