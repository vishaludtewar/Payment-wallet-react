import React, { Component } from 'react'
import WalletService from '../services/WalletService'
import { Link } from 'react-router-dom'

export class DepositMoney extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         mobileNumber:'',
         amount:''
      }
    }

    changeMobile=(event)=>
    {
        this.setState({
            mobileNumber:event.target.value
        })
    }

    ChangeAmount=(event)=>
    {
        this.setState({
            amount:event.target.value
        })
    }

    Deposit=(event)=>
    {
        event.preventDefault()
        WalletService.depositAmount(this.state.mobileNumber,this.state.amount).then(res=>{
            if(res.status === 202)
            alert("Money Transferred into Wallet from Bank")
            else
            Promise.reject()
        }).catch(err=>alert("Error Occured"))
    }
  
  
    render() {
    return (
        <div className='out-form'>
        <p className='form-title'><b>Deposit Money</b></p> 
        <h6>Add Money to Wallet From Bank</h6>
         <div className='in-form'>   
            <form>    
                <label className='form-label'><b>Mobile Number</b></label>    
                <input type="number" className='form-input' placeholder="Enter bank Linked mobile Number" value={this.state.mobileNumber} onChange={this.changeMobile} required />    
                <br/><br/>  
                <br/><br/>    
                <label className='form-label'><b>Amount</b></label>    
                <input type="number" className='form-input' placeholder="Amount" value={this.state.amount} onChange={this.ChangeAmount} required ></input>    
                <br></br><br/>     
                <input type="submit" className="send" value="Deposit" onClick={this.Deposit}></input>          
            </form>     
        </div>
        <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
        </div>
    )
  }
}

export default DepositMoney