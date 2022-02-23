import React, { Component } from 'react'
import TransactionService from '../services/TransactionService'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import '../components/css/Table.css'

export class ListOfTransactionBetweenDates extends Component {

    constructor(props){
        super(props)

        this.state={
            startDate: '' ,
            endDate:'',
            transactions:[]
        }
    }

    changeTransactionStartDate=(event)=>
    {
        this.setState({
            startDate:event.target.value
        })
    }

    changeTransactionEndDate=(event)=>
    {
        this.setState({
            endDate:event.target.value
        })
    }

    getTransaction=(event)=>{
        event.preventDefault()
        
        TransactionService.getTransactionBetweenDates(this.state.startDate,this.state.endDate).then(Response=>Response.data).then((data) => {
                  this.setState({transactions: data});
                  toast.configure()
                if (Response.status !== 200){
                toast.success('Transaction View successfully',{ position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                }
                else{
                  toast.error('Error',{ position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                }
                  
              });
      }


  render() {
    return (
      <div>
         <p id="table-title"><b>View Transaction Details Between Dates</b></p>
          <label id="label1">Transaction Starting Date:</label>
          <input className='inputfield' type='date' value={this.state.startDate} onChange={this.changeTransactionStartDate}/>
          <label  id="label1">Transaction Ending Date:</label>
          <input type='date' id='inputf1' value={this.state.e} onChange={this.changeTransactionEndDate}/>  
          <button className='btn btn-primary btn' id='b1' role="button"  onClick={this.getTransaction}> Search</button>
          <Link id='b4' className='btn btn-primary btn' to='/wallet/extra/transaction'>Back</Link>

          <div className='container1'>
          <table>
                <thead>
                  <tr>
                    <th>Transaction Id</th>
                    <th>Transaction Type</th>
                    <th>Transaction Date</th>
                    <th>Wallet Id</th>
                    <th>Balance</th>
                    <th>Amount</th>
                    <th>Description</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    this.state.transactions.map(
                      transaction =>
                      <tr key={transaction.transactionId}>
                        <td>{transaction.transactionId}</td>
                        <td>{transaction.transactionType}</td>
                        <td>{transaction.transactionDate}</td>
                        <td>{transaction.wallet.walletId}</td>
                        <td>{transaction.wallet.balance}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.description}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
          </div>
          
      </div>
    )
  }
}

export default ListOfTransactionBetweenDates