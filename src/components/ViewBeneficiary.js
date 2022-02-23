import React, { Component } from 'react'
import '../components/css/Table.css'
import BeneficiaryService from '../services/BeneficiaryService'
import { Link } from 'react-router-dom'

export class ViewBeneficiary extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         mobileNumber:'',
         beneficiaries:[]
      }
    }

    changeMobile=(event)=>{

        this.setState({
            mobileNumber:event.target.value
        })
       
    }

    ViewBeneficiaryByNumber=(event)=>
    {
        BeneficiaryService.Viewbeneficiary(this.state.mobileNumber).then(response=>response.data).then((data) => {
            this.setState({beneficiaries:data});    
        })
    }
  
    render() {
        return (
            <div>
           <p id="table-title"><b>Beneficiary List</b></p>
           <label id="label1"><b>Wallet Id: </b></label>
            <input type='text' className="inputfield" value={this.state.mobileNumber} onChange={this.changeMobile}/>
            <button className="b1" placeholder='Enter Mobile'  onClick={this.ViewBeneficiaryByNumber}>Fetch</button>
            <div className="container">
            <table>
            <thead>
                <tr>
                    <th>beneficiary Name</th>
                    <th>Mobile Number</th>
                    <th>Wallet ID</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.beneficiaries.map(
                        beneficiary => 
                        <tr key={beneficiary.mobileNumber}>
                             <td> {beneficiary.name}</td> 
                             <td> {beneficiary.mobileNumber}</td> 
                             <td>{beneficiary.wallet.walletId}</td>
                             <td>{beneficiary.wallet.balance}</td>    
                        </tr>
                    )
                    }
            </tbody>
        </table>
    </div>
    <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
    </div>
        )
      }
}

export default ViewBeneficiary