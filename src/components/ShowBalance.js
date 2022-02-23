import React, { Component } from 'react'
import { useNavigate } from 'react-router'
import WalletService from '../services/WalletService'
import { Link } from 'react-router-dom'

export class ShowBalance extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         mobileNumber:'',
         balance:'',
         Customer1:[{
         }],

         
      }
    }

    mobileChange=(event)=>
    {
        this.setState({
            mobileNumber:event.target.value
        })
    }


    GetBalance=(event)=>
    {
        event.preventDefault()
        WalletService.showBalance(this.state.mobileNumber).then(response=>response.data).then((data) => {
            this.setState({Customer1:data});    
        })
       this.setState({balance:this.state.Customer1.wallet.balance})
       this.showBal()
    }
    
    showBal(){
        
            document.getElementById("balance").style.display = "block";
        
    }
    
    render() {
        return (
            <div className='out-form'>
        <p className='form-title'><b>Check Balance</b></p> 
         <div className='balance-form'>   
            <form>    
                <label className='form-label'><b>Mobile Number</b></label>    
                <input type="number" className='form-input' placeholder="Mobile Number" value={this.mobileNumber} onChange={this.mobileChange} required />    
                <br/><br/>  
                <br/><br/>       
                <input type="submit" className="send" value="Check" onClick={this.GetBalance}></input>          
            </form>  
        </div>
        <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
            <label id='balance' ><b>Your Balance is: {this.state.balance}</b></label>    
        </div>
        )
      }
    }
        

export default ShowBalance