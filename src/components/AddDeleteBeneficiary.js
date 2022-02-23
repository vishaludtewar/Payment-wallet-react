import React, { Component } from 'react'
import BeneficiaryService from '../services/BeneficiaryService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
export class AddDeleteBeneficiary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       mobileNumber:'',
       walletId:0,
       wallet:{},
       Beneficiary:{}
    }
  }
  changeName=(event)=>
    {
        this.setState({
            name:event.target.value
        })
    }

    changeNumber=(event)=> 
    {
        this.setState({
            mobileNumber:event.target.value
        })
    }

    changeWalletId=(event)=> 
    {
        this.setState({
            walletId:event.target.value
        })
    }
  
  
  addbeneficiary=(event)=>{
    event.preventDefault()
    let wallet = {walletId:this.state.walletId}
    this.Beneficiary = {name:this.state.name,mobileNumber:this.state.mobileNumber,wallet}
    console.log('Beneficiary => ' + JSON.stringify(this.Beneficiary));

    BeneficiaryService.addbeneficiary(this.Beneficiary).then(res =>
        {
            toast.configure()
            if (res.status === 201)
            toast.success(('Beneficiary Added SuccessFully'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            else
              Promise.reject()
          }).catch(err => toast.error(('Beneficiary Already Exist'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 }))

}

beneficiarydelete=(event)=>{
    event.preventDefault()
        BeneficiaryService.beneficiaryDelete(this.state.mobileNumber).then(res =>
            {
                toast.configure()
            if (res.status === 200)
            toast.success(('Beneficiary Deleted SuccessFully'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            else
              Promise.reject()
          }).catch(err => toast.error(('Something Went Wrong!'), { position: toast.POSITION.TOP_CENTER, autoClose: 2000 }))

}




render() {
return (
    <div>
    <div className="container"> 
    <h2><b>Beneficiary</b></h2>
    <form name="registration" className="registartion-form" action="">
        <table>
            <tbody>
          <tr>
            <td><label htmlFor='name'>Name:</label></td>
            <td><input type="text" name="name" id="name" placeholder="Name" minLength="5" value={this.state.name} onChange={this.changeName} required/></td>
          </tr>
          <tr>
            <td><label htmlFor='phone'>Phone Number:</label></td>
            <td><input type="number" name="mobileNumber" id="mobileNumber" placeholder="Phone Number" minLength="10" maxLength="10" value={this.state.mobileNumber} onChange={this.changeNumber} required/></td>
          </tr>
    
          <tr>
            <td><label htmlFor='WalletId'>WalletId:</label></td>
            <td><input type="number" name="Wallet" id="wallet"  placeholder='Wallet Id' value={this.state.WalletId} onChange={this.changeWalletId}/></td>
          </tr>
          <tr>
            <td colSpan="2"><input type="submit" className="submit" value="Register" onClick={this.addbeneficiary} /> <input type="submit" className="submit" value="Delete" onClick={this.beneficiarydelete}></input></td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
    </div>
)
}
}

export default AddDeleteBeneficiary