import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../components/css/Home.css'


function Home() {

  let navigate=useNavigate();
  return (
    <div> 
     <div className='Home'>
     <p className='Pr-title'>Wallet  App</p>
     <p  className='quote'>Simple Payment Wallet App, But you can try!</p>
     <button className='log-button' onClick={()=>navigate('/validate')}>Login</button>
     <button className='reg-button' onClick={()=>navigate('/register')}>Register</button>
     </div>
     </div>
  )
}




export default Home