import React, { Component } from 'react'
import TransactionService from '../services/TransactionService';
import '../components/css/Table.css'
import { Link } from 'react-router-dom'

export class ListOfTransactionByType extends Component {


    constructor(props){
        super(props)

        this.state = {
          
          transactionType:'',
          transactions: []
        }

    }

    changeTransactionType=(event)=>
    {
        this.setState({
            transactionType:event.target.value
        })
    }

    getTransaction=(event)=>{
      event.preventDefault()

      TransactionService.getTransactionByType(this.state.transactionType).then(Response=>Response.data).then((data) => {
                this.setState({transactions: data});
            });
    }

  render() {
    return (
      <div>
          <p id="table-title"><b>View Transaction Details By Type</b></p>
          <label id="label1"><b>Transaction Type:</b></label>
          <input type='text' placeholder='Enter Transaction Type' className="inputfield" value={this.state.transactionType} onChange={this.changeTransactionType}/>        
          <button className='btn btn-primary' id='b1' role="button"  onClick={this.getTransaction}> Search</button>
          <Link id='b3' className='btn btn-primary btn' to='/wallet/extra/transaction'>Back</Link>

          <div className='container'>
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

export default ListOfTransactionByType