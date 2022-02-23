import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import CustomerService from '../services/CustomerService'
import '../components/css/Login.css'

function ValidateCustomer() {

 const [username,setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [user,SetUser] = useState()

 const fun=()=>{
    this.props.history.push('/wallet')
 }
   
 let navigate=useNavigate('');

 let Invalid=()=>{
        
    document.getElementById("erro").style.display = "block";

}

   ValidateCustomer=(event)=>
  {
      let user ={username,password}
      event.preventDefault()
      CustomerService.validateCustomer(username,password).then(res=>{
        if(res.status === 200)
        {
            navigate('/wallet')
            SetUser(username,password)
            localStorage.setItem('user',res.data)
        }
        else{
            Invalid()
        }      
      })

      }


  return (
    <div>
    <p className='login-title'><b>Login Page</b></p><br/>    
    <div className="login">    
    <form id="login" method="get" >    
        <label className='label2'><b>Login ID</b></label>    
        <input type="text"  className='inputfield1'  minLength="10" maxLength="10"  placeholder="Mobile Number" required onChange={(event)=>{setUsername(event.target.value)}}/>    
        <br/><br/>    
        <label className='label2'><b>Password</b></label>    
        <input type="Password" className='inputfield1' placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} required />    
        <br/><br/>    
        <input type="submit" className="log" id="log" value="Log In" onClick={ValidateCustomer} /> 
    </form>   
    <Link className='anchor' to='/register'><b>New User? click Here</b></Link>
    <label id='erro'><b>Invalid Credentials</b></label>
</div>
</div>
  )
}

export default ValidateCustomer