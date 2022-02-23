import React, { Component } from 'react'
import { toast } from 'react-toastify'
import WalletService from '../services/WalletService'
import '../components/css/forms.css'
import { Link } from 'react-router-dom'

export class AddWallet extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
         mobileNumber:'',
         balance:''
      }
    }

    changeName=(event)=>
    {
        this.setState({
            name:event.target.value
        })
    }

    changeMobile=(event)=>
    {
        this.setState({
            mobileNumber:event.target.value
        })
    }

    changeBalance=(event)=>
    {
        this.setState({
            balance:event.target.value
        })
    }
    
    CreateWallet=(event)=>
    {
        event.preventDefault()
        WalletService.addWallet(this.state.name,this.state.mobileNumber,this.state.balance).then(res =>
            {
                toast.configure()
                if(res.status===200)
                toast.success(('Wallet Added SuccessFully'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                else
                Promise.reject()
            })
    }


  render() {
    return (
      <div className='out-form'>
      <p className='form-title'><b>Wallet Creation</b></p> 
       <div className='in-form'>   
          <form>    
              <label className='form-label'><b>Name</b></label>    
              <input type="text" className='form-input' placeholder="your name" minLength="5" value={this.state.name} onChange={this.changeName} required />    
              <br/><br/>    
              <label className='form-label'><b>Phone Number</b></label>    
              <input type="text" className='form-input' placeholder="Phone Number" minLength="10" maxLength="10" value={this.state.mobileNumber} onChange={this.changeMobile} required ></input>    
              <br></br><br/>
              <label className='form-label'><b> Amount..</b></label>    
              <input type="text" className='form-input' minLength="4" placeholder='Add Money' value={this.state.balance} onChange={this.changeBalance} ></input>    
              <br></br><br/>      
              <input type="submit" className="send" value="Create" onClick={this.CreateWallet}></input>          
          </form>     
      </div>
      <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
      </div>
    )
  }
}

export default AddWallet