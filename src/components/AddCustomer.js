import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'
import '../components/css/Table.css'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export class AddCustomer extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        mobileNumber:'',
        password:'',
        balance:'',
        wallet:null
      }
    }

    
    RegisterCustomer= (event) =>
    {   event.preventDefault()
        let wallet = {balance:this.state.balance}
        let Customer = {name:this.state.name,mobileNumber:this.state.mobileNumber,password:this.state.password,wallet}
        console.log('Customer => ' + JSON.stringify(Customer));

        CustomerService.addCustomer(Customer).then(res =>
            {
                toast.configure()
                if (res.status === 200)
                toast.success(('Customer Added SuccessFully'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                else
                  Promise.reject()
              }).catch(err => toast.error(('Something Went Wrong!'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 }))
    
    }
    changeName=(event)=>
    {
        this.setState({
            name:event.target.value
        })
    }

    changeNumber=(event)=> 
    {
        this.setState({
            mobileNumber:event.target.value
        })
    }

    changePassword=(event)=>
    {
        this.setState({
            password:event.target.value
        })
    }

    changeBalance=(event)=>
    {
        this.setState({
           balance:event.target.value
        })
    }
  
    render() {
    return (
      <div>
      <p className='login-title'><b>Registration</b></p><br/>    
      <div className="login">    
      <form id="login">    
          <label className='label2'><b>Name</b></label>    
          <input type="text" className='inputfield1' placeholder="Your Name" minLength="5" value={this.state.name} onChange={this.changeName} required/>    
          <br/><br/>    
          <label className='label2'><b>Mobile</b></label>    
          <input type="number" className='inputfield1' placeholder="Mobile Number" minLength='10' maxLength="10" value={this.state.phoneNumber} onChange={this.changeNumber} required />    
          <br/><br/>  
          <label className='label2'><b>Password</b></label>    
          <input type="password" className='inputfield1' placeholder="Enter Password"  value={this.state.password} onChange={this.changePassword} required />    
          <br/><br/> 
          <label className='label2'><b>Amount</b></label>    
          <input type="number" className='inputfield1' placeholder="Add Money!" value={this.state.balance} onChange={this.changeBalance} />    
          <br/><br/>   
          <input type="submit" className="log" id="log" value="Register" onClick={this.RegisterCustomer} /> 
      </form>     
      <Link className='anchor' to='/validate'><b>Already a user? Login Here!</b></Link>
  </div>
  </div>
    )
  }
}

export default AddCustomer