import React, { Component } from 'react'
import { toast } from 'react-toastify'
import BillPaymentService from '../services/BillPaymentService'
import { Link } from 'react-router-dom'

export class AddBillPayment extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         billId:0,
         billtype:'',
         amount:0,
         paymentDate:'',
         walletId:'',
         wallet:{}

      }
    }

    changeBillId=(event)=>
    {
        this.setState({
            billId:event.target.value
        })
    }

    changeBillType=(event)=>
    {
        this.setState({
            billtype:event.target.value
        })
    }

    changeamount=(event)=>
    {
        this.setState({
            amount:event.target.value
        })
    }

    changeDate=(event)=>
    {
        this.setState({
            paymentDate:event.target.value
        })
    }

    changeId=(event)=>
    {
        this.setState({
            walletId:event.target.value
        })
    }

    addBill=(event)=>
    {   
        event.preventDefault();
        let wallet = {walletId:this.state.walletId}
        let BillPayment = {billId:this.state.billId,wallet,billtype:this.state.billtype,amount:this.state.amount,paymentDate:this.state.paymentDate}
        console.log('BillPayment => ' + JSON.stringify(BillPayment));
        BillPaymentService.AddBillPayment(BillPayment).then(res=> {
            toast.configure()
            if(res.status === 200)
            toast.success("Bill Added Successfully")
            else
                Promise.reject()

        }).then(err=> toast.error("Error Occurred"))
    }  
    
    render() {
    return (
        <div>
            <p id="form-title"><b>Add BillPayment</b></p>
            <form id="main-form">
            <table>
                <tbody>
              <tr>
                <td><label>BillId:</label></td>
                <td><input type="number" placeholder="Bill Id"  value={this.state.billId} onChange={this.changeBillId} required/></td>
              </tr>
              <tr>
                <td><label >Bill Type:</label></td>
                <td><input type="text" name="type" placeholder="Bill Type" value={this.state.billtype} onChange={this.changeBillType} required/></td>
              </tr>
              <tr>
                <td><label>amount:</label></td>
                <td><input type="number" name="pass" placeholder='Amount' value={this.state.amount} onChange={this.changeamount} required></input></td>
              </tr>
              <tr>
                <td><label>Date:</label></td>
                <td><input type="date" name="date" value={this.state.paymentDate} onChange={this.changeDate}/></td>
              </tr>
              <tr>
                <td><label>WalletId:</label></td>
                <td><input type="number" name="walletid" placeholder='Wallet Id' value={this.state.walletId} onChange={this.changeId} required></input></td>
              </tr>
              <tr>
                <td colSpan="2"><input className="btn btn-primary" type="submit" value="Register" onClick={this.addBill} /></td>
              </tr>
              </tbody>
            </table>
          </form>
          <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
        </div>
    )
  }
}

export default AddBillPayment