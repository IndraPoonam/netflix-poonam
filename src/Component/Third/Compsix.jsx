import React, { useState } from 'react'

const Compsix = () => {
    const [visibility, setVisibility] = useState({});
    
    const toggleVisibilty = (index) => {
        setVisibility(prevVisibilty => ({
            ...prevVisibilty,
            [index]: !prevVisibilty[index]
        }))
    };
    return (
        <>
     <div className=' bg-black h-fit w-full border-y-8 border-gray-800  pt-[4.7rem] flex justify-center overflow-hidden'>
                 <div className=''>
                     <h1 className='text-white font-bold text-5xl  pl-[15rem] '>Frequently Asked Questions</h1>
                     
                     <div onClick={() => toggleVisibilty(0)} className='w-[73rem] bg-zinc-600 px-10 py-6 mt-5 font-bold text-white text-semibold text-xl flex justify-between items-center cursor-pointer'>
                         <div style={{ width: 'calc(100% - 20px)', text: 'white' }}>What is Netflix?</div>
                         <i className={`fa-solid fa-plus transform ${visibility[0] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-500 ${visibility[0] ? 'block opacity-100 text-white  text-lg border-[2px] border-black' : 'hidden opacity-0'}`} style={{ width: '73rem', overflow: 'hidden', marginTop: visibility[0] ? '1rem' : '0' }}>
                         Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices. <br />
                        You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                     </div>
                    <div onClick={() => toggleVisibilty(1)} className='w-[73rem] bg-zinc-600 px-10 py-6 mt-5 font-bold text-white text-semibold text-xl flex justify-between items-center cursor-pointer'>
                        <div style={{ width: 'calc(100% - 20px)', text: 'white' }}>How much does Netflix cost?</div>
                                                 <i className={`fa-solid fa-plus transform ${visibility[1] ? 'rotate-45' : ''}`}></i>
                     </div>
                     <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-500 ${visibility[1] ? 'block opacity-100 text-white  text-lg border-[2px] border-black' : 'hidden opacity-0'}`} style={{ width: '73rem', overflow: 'hidden', marginTop: visibility[1] ? '1rem' : '0' }}>
                         Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly <br /> fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                     </div>
                     <div onClick={() => toggleVisibilty(2)} className='w-[73rem] bg-zinc-600 px-10 py-6 mt-5 font-bold text-white text-semibold text-xl flex justify-between items-center cursor-pointer'>
                         <div style={{ width: 'calc(100% - 20px)', text: 'white' }}>Where I can Watch?</div>
                         <i className={`fa-solid fa-plus transform ${visibility[2] ? 'rotate-45' : ''}`}></i>
                     </div>
                     <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-500 ${visibility[2] ? 'block opacity-100 text-white  text-lg border-[2px] border-black' : 'hidden opacity-0'}`} style={{ width: '73rem', overflow: 'hidden', marginTop: visibility[2] ? '1rem' : '0' }}>
                         Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com <br /> from your personal computer or on any internet-connected device that offers the Netflix app, including <br /> smart TVs, smartphones, tablets, streaming media players and game consoles.<br />
                         You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to <br /> watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                     </div>

                     <div onClick={() => toggleVisibilty(3)} className='w-[73rem] bg-zinc-600 px-10 py-6 mt-5 font-bold text-white text-semibold text-xl flex justify-between items-center cursor-pointer'>
                         <div style={{ width: 'calc(100% - 20px)', text: 'white' }}>How do i cancel?</div>
                         <i className={`fa-solid fa-plus transform ${visibility[3] ? 'rotate-45' : ''}`}></i>
                     </div>
                 <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-500 ${visibility[3] ? 'block opacity-100 text-white  text-lg border-[2px] border-black' : 'hidden opacity-0'}`} style={{ width: '73rem', overflow: 'hidden', marginTop: visibility[3] ? '1rem' : '0' }}>
                     Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix <br/> originals, and more. Watch as much as you want, anytime you want.
                     </div>

                     <div onClick={() => toggleVisibilty(4)} className='w-[73rem] bg-zinc-600 px-10 py-6 mt-5 font-bold text-white text-semibold text-xl flex justify-between items-center cursor-pointer'>
                         <div style={{ width: 'calc(100% - 20px)', text: 'white' }}>What can I Watch on Netflix?</div>
                        <i className={`fa-solid fa-plus transform ${visibility[4] ? 'rotate-45' : ''}`}></i>
                     </div>
                     <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-500 ${visibility[4] ? 'block opacity-100 text-white  text-lg border-[2px] border-black' : 'hidden opacity-0'}`} style={{ width: '73rem', overflow: 'hidden', marginTop: visibility[4] ? '1rem' : '0' }}>
                     Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix <br/> originals, and more. Watch as much as you want, anytime you want.
                     </div>

                     <div onClick={() => toggleVisibilty(5)} className='w-[73rem] bg-zinc-600 px-10 py-6 mt-5 font-bold text-white text-semibold text-xl flex justify-between items-center cursor-pointer'>
                         <div style={{ width: 'calc(100% - 20px)', text: 'white' }}>Is Netflix is good for kids?</div>
                         <i className={`fa-solid fa-plus transform ${visibility[5] ? 'rotate-45' : ''}`}></i>
                     </div>
                     <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-500 ${visibility[5] ? 'block opacity-100 text-white  text-lg border-[2px] border-black' : 'hidden opacity-0'}`} style={{ width: '73rem', overflow: 'hidden', marginTop: visibility[5] ? '1rem' : '0' }}>
                     The Netflix Kids experience is included in your membership to give parents control while kids enjoy <br/> family-friendly TV shows and films in their own space.<br/>
 Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content <br/> kids can watch and block specific titles you don’t want kids to see.
                     </div>
                   
                     <h3 className='text-white text-2xl pl-[5rem] pt-[2rem]'>Ready to watch? Enter your email to create or restart your membership.</h3>
                     <div className='flex justify-center h-[10rem] '>
                         <input className='bg-transparent text-white bg-[#292827] rounded font-normal border h-[8vh] w-[25vw] border-white  mt-[1rem]' type="text" placeholder='Email address' />
                        <button className='bg-[rgb(229,9,20)] text-white h-[8vh] w-[15vw] rounded mt-[1rem] mx-4 text-2xl font-extrabold'>Get Started  <i class="fa-solid fa-chevron-right"></i></button>
                     </div>
                 </div>
        </div> 
                </>
    )
}

export default Compsix