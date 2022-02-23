import React, { Component } from 'react'
import WalletService from '../services/WalletService'
import { Link } from 'react-router-dom'
import '../components/css/forms.css'



export class AddMoney extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       amount:'',
       WalletId:''
    }
  }

  ChangeAmount=(event)=>
  {
      this.setState({
          amount:event.target.value
      })
  }

  ChangeId=(event)=>
  {
      this.setState({
          WalletId:event.target.value
      })
  }
  
  addMoney=(event)=>
  {
      event.preventDefault()
      let Wallet = {walletId:this.state.WalletId}
      console.log('Customer => ' + JSON.stringify(Wallet));
      WalletService.addMoney(Wallet,this.state.amount).then(res=>{
        
        if(res.status === 202)
        {
            alert("Money Added")
        }
        else
        Promise.reject()

      }).then(err =>alert("Error Occured!"))
  }
  
    render() {
    return (
        <div className='out-form'>
        <p className='form-title'><b>Add Money</b></p> 
         <div className='in-form'>   
            <form>    
                <label className='form-label'><b>Wallet Id</b></label>  
                <input type="number" className='form-input' placeholder="Wallet ID" value={this.state.walletId} onChange={this.ChangeId} required ></input>    
                <br></br>    
                <br/><br/>    
                <label className='form-label'><b>Amount</b></label>    
                <input type="number" className='form-input' placeholder="Amount" value={this.state.amount} onChange={this.ChangeAmount} required ></input>    
                <br></br><br/>     
                <input type="submit" className="send" value="Deposit" onClick={this.addMoney}></input>          
            </form>     
        </div>
        <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
        </div>
    )
  }
}

export default AddMoney