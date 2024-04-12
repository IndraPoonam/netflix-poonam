import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-40 h-auto w-max  flex justify-between items-center">
        <div className="">
          <p className="text-gray-400">Questions? Call 000-000-0000</p>
         
          <ul >
            <li className='border-b-2 border-white w-[2rem]'>FAQ</li>
            <li >Investor Relations</li>
            <li >Privacy</li>
            <li >Speed test</li>
          </ul>
        </div>
        <div> <ul>
            <li >Help Center</li>
            <li >Jobs</li>
            <li >Cookies Preference</li>
            <li>Legal Notice</li>
          </ul></div>

          <div  className="container mx-40 h-auto w-max  flex justify-between items-center"> <ul>
            <li >Account</li>
            <li >Ways to Watch</li>
            <li>Corporate Information</li>
            <li >Only on Netflix</li>
          </ul></div>
          <div  className="container mx-40 h-auto w-max flex justify-between items-center"> <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul></div>
        
      </div>
    </footer>
  );
};

export default Footer;