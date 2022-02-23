import React, { Component } from 'react'
import BillPaymentService from '../services/BillPaymentService'
import { Link } from 'react-router-dom'

export class ViewBillPayment extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       billId:'',
       bills:[]
    }
  }

    changeBillid=(event)=>
    {
        this.setState({
            billId:event.target.value
        })
    }

    getList=(event)=>
    {
        BillPaymentService.viewBillPayment(this.state.billId).then(response=>response.data).then((data) => {
            this.setState({bills:data});    

            let Billpayment = {BillId:this.bills.BillId}
            console.log(JSON.stringify(Billpayment))
        }); 
    }
  
    render() {
    return (
        <div>
        <p id="table-title">Transactions</p>
        <label id="label1"><b>Transaction Type:</b></label>
          <input type='text' placeholder='Enter BillId' className="inputfield" value={this.state.billId} onChange={this.changeBillid}/>        
          <button className="b1" role="button"  onClick={this.getList}> Search</button>
        <div className="container">
	<table>
		<thead>
			<tr>
				<th>Bill Id</th>
				<th>Wallet Id</th>
				<th>Wallet Balance</th>
				<th>Bill Type</th>
				<th>Bill amount</th>
                <th>Payment Date</th>
			</tr>
		</thead>
		<tbody>
			{
           this.state.bills.map(
                    bill => 
                    <tr key = {bill.billId}>
                         <td> {bill.wallet.walletId}</td> 
                         <td> {bill.wallet.balance}</td>     
                         <td> {bill.billtype}</td>
                         <td> {bill.amount}</td>
                         <td> {bill.paymentDate}</td>
                </tr>
            )}
		</tbody>
	</table>
</div>
<Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
</div>
    )
  }
}

export default ViewBillPayment