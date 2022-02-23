import React, { Component } from 'react'
import WalletService from '../services/WalletService';
import '../components/css/Table.css'
import { Link } from 'react-router-dom'

export class GetAll extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         customers:[]
      }
    }
    componentDidMount(){
        WalletService.GetAll().then(response=>response.data).then((data) => {
            this.setState({customers:data});    
        });
    }
    render() {
    return (
        <div>
        <p id="table-title"><b>Customers List</b></p>
        <div className="container">
	<table>
		<thead>
			<tr>
				<th>Customer Name</th>
				<th>Mobile Number</th>
				<th>Password</th>
				<th>Wallet ID</th>
				<th>Balance</th>
			</tr>
		</thead>
		<tbody>
			{
                this.state.customers.map(
                    customer => 
                    <tr key = {customer.mobileNumber}>
                         <td> {customer.name}</td> 
                         <td> {customer.mobileNumber}</td>     
                         <td> {customer.password}</td>
                         <td> {customer.wallet.walletId}</td>
                         <td> {customer.wallet.balance}</td>
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

export default GetAll