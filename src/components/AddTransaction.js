import React, { Component } from 'react'
import TransactionService from '../services/TransactionService'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export class AddTransaction extends Component {

    constructor(props){
        super(props)

        this.state={

            transactionId:0,
            transactionType:'',
            transactionDate:'',
            walletId :0,
            wallet:null,
            amount:0.0,
            description:'',
            Transaction:null
            
        }
    }


    changeTransactionId=(event)=>
    {
        this.setState({
            transactionId:event.target.value
        })
    }

    changeTransactionType=(event)=>
    {
        this.setState({
            transactionType:event.target.value
        })
    }

    changeTransactionDate=(event)=>
    {
        this.setState({
            transactionDate:event.target.value
        })
    }

    changeWalletId=(event)=>
    {
        this.setState({
            walletId:event.target.value
        })
    }

    changeAmount=(event)=>
    {
        this.setState({
            amount:event.target.value
        })
    }

    changeDescription=(event)=>
    {
        this.setState({
            description:event.target.value
        })
    }

    AddTransaction=(event)=>{
        event.preventDefault()
        let wallet ={walletId:this.state.walletId}
        let Transaction = { transactionId:this.state.transactionId,transactionType:this.state.transactionType,transactionDate:this.state.transactionDate,wallet,amount:this.state.amount,description:this.state.description}
        console.log('Transaction => ' + JSON.stringify(Transaction));

        TransactionService.addTransaction(Transaction).then(res =>
            {
                toast.configure()
                if (res.status === 200){
                toast.success('Transaction Added successfully',{ position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                }
                else{
                  Promise.reject()
                }
            }).catch(err => alert('Error'))
    }

    

  render() {
    return (
      <div className="container">
          <h1><b>Add Transaction</b></h1>
          <form name="add" className="transaction-form" action="">
              <table>
                  <tbody>
                      <tr>
                          <td><label htmlFor='TransactionId'>Transaction Id:</label></td>
                          <td><input type='number' placeholder='Enter Transaction Id' value={this.state.transactionId} onChange={this.changeTransactionId} required/></td>
                      </tr>
                      <tr>
                          <td><label htmlFor='TransactionType'>Transaction Type:</label></td>
                          <td><input type='text' placeholder='Enter Transaction Type' value={this.state.transactionType} onChange={this.changeTransactionType}/></td>
                      </tr>
                      <tr>
                          <td><label htmlFor='TransactionDate'>Transaction Date:</label></td>
                          <td><input type='date' value={this.state.transactionDate} onChange={this.changeTransactionDate}/></td>
                      </tr>
                      <tr>
                          <td><label htmlFor='WalletId'>Wallet Id:</label></td>
                          <td><input type='number' placeholder='Enter Wallet Id' value={this.state.walletid} onChange={this.changeWalletId}/></td>
                      </tr>
                      <tr>
                          <td><label htmlFor='Amoount'>Amount:</label></td>
                          <td><input type='number' placeholder='Enter Amount' value={this.state.amount} onChange={this.changeAmount}/></td>
                      </tr>
                      <tr>
                          <td><label htmlFor='Description'>Description:</label></td>
                          <td><input type='text' placeholder='Enter Description' minLength="5" maxLength="30" value={this.state.description} onChange={this.changeDescription}/></td>
                      </tr>
                      <tr>
                          <td colSpan="2"><input type="submit" className="submit" value="Add" onClick={this.AddTransaction} /></td>
                      </tr>
                  </tbody>
              </table>
          </form>
          <Link id='etx1' className='btn btn-primary btn-lg' to='/wallet/extra/transaction'>BACK</Link>
      </div>
    )
  }
}

export default AddTransaction