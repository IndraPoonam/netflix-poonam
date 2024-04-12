import React from 'react'
// import logo from './logo.png'

const Navbar=()=> {
  // const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
      const CLIENT_ID = '559402968496-200ia1m5uvl06urs44g82thipc6ruerg.apps.googleusercontent.com';
      const REDIRECT_URI = 'http://localhost:3000/inbox'; // Redirect URI configured in Google Developers Console
      const SCOPE = 'https://mail.google.com/'
      const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;

      window.location.href = AUTH_URL;
  };

  // const getAccessToken = ()=>{
  //   const url =window.location.href
  //   const token = url.match(/access_token=([^&]+)/)
  //   localStorage.setItem("Token",token && token[1])
  // }

  // useEffect(()=>{
  //   getAccessToken()
  // },[])

  return (
    <>
    <div className='w-full h-[100px] bg-transparent flex justify-between  px-8 py-2 '>
    <img className='h-[70px]' src='https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png'/>
    <div className='flex gap-5'>
       
          <select className='border py-2 rounded h-10 w-35 px-6 bg-transparent font-bold text-white'>
  <option value="english" className='bg-white text-black'> English</option>
  <option value="hindi" className='bg-white text-black'>Hindi</option>
</select>

        <button className='bg-rose-600 py-2 h-10 w-35 rounded px-5 text-white' onClick={handleLogin}>Sign in</button>
    </div>
    </div>
    
    </>
  )
}

export default Navbar