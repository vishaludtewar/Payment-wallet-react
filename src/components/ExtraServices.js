import React from 'react'
import '../components/css/Wallet.css'
import { Link } from 'react-router-dom'

function ExtraServices() {
  return (
    <div className='wallet-main'>
    <p className='wallet-title'>Welcome To Wallet</p>
    <p className='extra'>Extra Services</p>
    <Link to='/wallet/extra/bank' id='bt8' className='btn btn-info btn-lg'>Bank Account Service</Link>
    <Link to='/wallet/extra/billpayment' id='bt9' className='btn btn-info btn-lg'>Bill Payment Service</Link>
    <Link to='/wallet/extra/transaction' id='bt10' className='btn btn-info btn-lg'>Transaction Service</Link>
    <Link to='/wallet/extra/beneficiary' id='bt11' className='btn btn-info btn-lg'>Beneficiary Service</Link>
    <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet'>BACK</Link>
    </div>
  )
}

export default ExtraServices