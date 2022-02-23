import React, { Component } from 'react'
import WalletService from '../services/WalletService'
import '../components/css/forms.css'
import { Link } from 'react-router-dom'

export class MoneyTransfer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         SourceMobile:'',
         TargetMobile:'',
         amount:0
      }
    }    

    SourceM=(event)=>
    {
        this.setState({
            SourceMobile:event.target.value
        })
    }

    TargetM=(event)=>
    {
        this.setState({
            TargetMobile:event.target.value
        })
    }
    
    ChangeAmount=(event)=>
    {
        this.setState({
            amount:event.target.value
        })
    }
    
    Transfer=(event)=>
    {
        event.preventDefault()
        WalletService.fundTransfer(this.state.SourceMobile,this.state.TargetMobile,this.state.amount).then(res=>{
            
            if(res.status === 200)
            {
                alert('Transferred')
            }
            else
                Promise.reject()
        }).catch(err=>alert("Error Occured"))
    }

    render() {
    return (
    <div className='out-form'>
    <p className='form-title'><b>Money Transfer</b></p> 
     <div className='in-form'>   
        <form className="" >    
            <label className='form-label'><b>Your Mobile Number</b></label>    
            <input type="text" className='form-input' name="Source" placeholder="From" onChange={this.SourceM} required />    
            <br/><br/>    
            <label className='form-label'><b>Customer's Mobile Number</b></label>    
            <input type="text" className='form-input' placeholder="To" onChange={this.TargetM} required ></input>    
            <br></br><br/>
            <label className='form-label'><b> Amount..</b></label>    
            <input type="text" className='form-input' placeholder="Amount" onChange={this.ChangeAmount} required ></input>    
            <br></br><br/>      
            <input type="submit" className="send" value="Transfer" onClick={this.Transfer}></input>          
        </form>     
    </div>
    <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
    </div>
    )
  }
}

export default MoneyTransfer