import React, { Component } from 'react'
import { toast } from 'react-toastify'
import AccountService from '../services/AccountService'
import { Link } from 'react-router-dom'

export class AddAccount extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        accountNo:'',
        ifscCode:'',
        bankName:'',
        balance:'',
        walletId:'',
       wallet:null
      }
    }

    RegisterAccount= (event) =>
    {   event.preventDefault()
        let wallet = {walletId:this.state.walletId}
        let account = {accountNo:this.state.accountNo,ifscCode:this.state.ifscCode,bankName:this.state.bankName,balance:this.state.balance,wallet}
        console.log('Account => ' + JSON.stringify(account));

        AccountService.addAccount(account).then(res =>
            {
                toast.configure()
              if (res.status === 200)
              toast.success(('BankAccount Added SuccessFully'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
              else
                  Promise.reject()
              }).catch(err => toast.error(('Error'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 }))
    }

    changeAccountNo=(event)=>
    {
      this.setState({
        accountNo:event.target.value
    })
    }

    changeifscCode=(event)=>
    {
        this.setState({
            ifscCode:event.target.value
        })
    }


    changebankName=(event)=> 
    {
        this.setState({
            bankName:event.target.value
        })
    }

    changebalance=(event)=>
    {
        this.setState({
            balance:event.target.value
        })
    }

    changewalletId=(event)=>
    {
        this.setState({
           walletId:event.target.value
        })
    }
  
    render() {
    return (
        <div className='container'>
            <h1>Account Creation</h1>
            <form name="creation">
                <table>
                    <tbody>
                        <tr>
                        <td><label htmlFor='name'>BankName:</label></td>
                <td><input type="text" name="name" id="name" placeholder="Bank Name" minLength="5" value={this.state.bankName} onChange={this.changebankName} required/></td>
                        </tr>
                        <tr>
                        <td><label htmlFor='phone'>AccountNo:</label></td>
                <td><input type="number" name="mobileNumber" id="mobileNumber" placeholder="Account Number" minLength="10" maxLength="10" value={this.state.accountNo} onChange={this.changeAccountNo} required/></td>
                        </tr>
                        <tr>
                        <td><label htmlFor='IFSC'>ifscCode:</label></td>
                <td><input type="text" name="pass" id="pass" placeholder='IFSC' value={this.state.ifscCode} onChange={this.changeifscCode} required></input></td>
                        </tr>
                        <tr>
                        <td><label htmlFor='balance'>Balance:</label></td>
                    <td><input type="number" name="Wallet" id="wallet" minLength="4" placeholder='Add Money!' value={this.state.balance} onChange={this.changebalance}/></td>
                        </tr>
                        <tr>
                        <td><label htmlFor='balance'>walletId:</label></td>
                <td><input type="number" name="Wallet" id="wallet" minLength="4" placeholder='WalletID' value={this.state.walletId} onChange={this.changewalletId}/></td>
                        </tr>
                        <tr>
                        <td colSpan="2"><input type="submit" className="submit" value="Register" onClick={this.RegisterAccount} /></td>
                        </tr>
                    </tbody>
                </table>    
            </form>

        </div>
    )
  }
}

export default AddAccount;