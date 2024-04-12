

import React from 'react';
import Navbar from './Navbar/Navbar';

const Home = () => {
  return (
    <>
      <div className='h-[100vh] w-full bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg")] 
               bg-no-repeat bg-center bg-cover overflow-hidden'>
        <div className=''>
          <Navbar />

          <p className='font-bold text-center text-[3.5rem] text-white mt-[10rem]'>Unlimited movies, TV shows and more</p>
          <p className='text-center text-[2.5rem] text-white'>Watch anywhere, Cancel anytime <br />
            Ready to watch? Enter your email to create or restart your membership</p>

          <div className='flex justify-center'>
            <input className='bg-transparent text-white bg-[#292827] rounded font-normal border h-[8vh] w-[25vw] border-white  mt-[1rem]' type="text" placeholder='Email address' />
            <button className='bg-[rgb(229,9,20)] text-white h-[8vh] w-[15vw] rounded mt-[1rem] text-2xl font-extrabold'>Get Started  <i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
