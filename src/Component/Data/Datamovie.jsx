import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Datamovie() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((Response=>{
            setData(Response.data)
        }))
        .catch ((error)=>{
            console.log("Error for testing api",error)
        })
    })

    

  return (
    <>
      <div className='w-full h-auto px-20 py-16 grid grid-cols-3 gap-10'>
        {data && data.length > 0 && data.map((value, index) => (
          <div key={index} className='w-full h-[400px] border border-red-500 rounded relative'>
            <h2 className='text-teal-300 text-4xl font-bold absolute bottom-18 bg-black left-16'>
              {value.id}
            </h2>
            <h1>{value.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Datamovie;
