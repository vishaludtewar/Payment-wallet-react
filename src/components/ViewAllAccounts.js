import React, { Component } from 'react'
import AccountService from '../services/AccountService'
import { Link } from 'react-router-dom'

export class ViewAllAccounts extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         walletId:'',
         balance:'',
         accounts:[],
      }
    }

    componentDidMount(){
        AccountService.viewAllAccount().then(response=>response.data).then(data=>{this.setState({
            accounts:data});    
        });
    }

    render() {
    return (
        <div>
        <p id="table-title"><b>Account List</b></p>
        <div className="container">
	<table>
		<thead>
			<tr>
				<th>accountNo</th>
				<th>ifscCode</th>
				<th>bankName</th>
				<th>balance</th>
				<th>walletId</th>
                <th>wallet balance</th>
			</tr>
		</thead>
		<tbody>
			{
                this.state.accounts.map(
                    account => 
                    <tr key = {account.accountNo}>
                        <td>{account.accountNo}</td>
                         <td> {account.ifscCode}</td> 
                         <td> {account.bankName}</td>     
                         <td> {account.balance}</td>
                         <td> {account.wallet.walletId}</td>
                         <td> {account.wallet.balance}</td>
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

export default ViewAllAccounts