import React from 'react'
import Footer from './components/Footer';
import AddCustomer from './components/AddCustomer';
import ValidateCustomer from './components/ValidateCustomer';
import  ShowBalance from './components/ShowBalance';
import MoneyTransfer from './components/MoneyTransfer';
import GetAll from './components/GetAll';
import DepositMoney from './components/DepositMoney';
import UpdateAccount from './components/UpdateAccount';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ViewBeneficiary from './components/ViewBeneficiary';
import AddDeleteBeneficiary from './components/AddDeleteBeneficiary';
import AddAccount from './components/AddAccount';
import ViewAllAccounts from './components/ViewAllAccounts';
import AddTransaction from './components/AddTransaction';
import ListOfTransactionByType from './components/ListOfTransactionByType';
import Header from './components/Header';
import Home from './components/Home';
import ListOfTransactionBetweenDates from './components/ListOfTransactionBetweenDates';
import AddBillPayment from './components/AddBillPayment';
import ViewBillPayment from './components/ViewBillPayment';
import AddWallet from './components/AddWallet';
import ListOfTransactionByWalletId from './components/ListOfTransactionByWalletId';
import WalletComponent from './components/WalletComponent';
import AddMoney from './components/AddMoney';
import Transaction from './components/Transaction';
import WalletService from './services/WalletService';
import ExtraServices from './components/ExtraServices';
import Header1 from './components/Header1';
import BankAccount from './components/BankAccount';
import Beneficiary from './components/Beneficiary';
import BillPayment from './components/BillPayment';

function Routes1() {
  return (
    <div>
       <Router> 
       {window.location.pathname === (("/validate")||('/register')) ? <Header/> : <Header1/>}
       <Routes>
         <Route exact path='/' element={<Home/> }></Route>
         <Route exact path='/validate' element={<ValidateCustomer/>}></Route>
         <Route path='/Register' element={<AddCustomer/>}></Route>
         <Route path='/deposit' element={<DepositMoney/>}></Route>
          <Route path='Transaction' element={<Transaction/>}> </Route>
          <Route exact path='/wallet' element={<WalletComponent/>}></Route>
         <Route path='/wallet/updatewallet' element={<UpdateAccount/>}></Route>
         <Route path='/wallet/addmoney' element={<AddMoney/>}></Route>
         <Route path='/wallet/viewall' element={<GetAll/>}></Route>
         <Route path='/wallet/depositMoney' element={<DepositMoney/>}></Route>
         <Route path='/wallet/transfer' element={<MoneyTransfer/>}></Route> 
         <Route path='/wallet/addwallet' element={<AddWallet/>}></Route>
         <Route path='/wallet/balance' element={<ShowBalance/>}></Route>
         <Route path='/wallet/extra' element={<ExtraServices/>}></Route>
         <Route path='/wallet/extra/bank/viewall' element={<ViewAllAccounts/>}></Route>
         <Route path='/wallet/extra/bank/addaccount' element={<AddAccount/>}></Route>
         <Route path='/wallet/extra/bank' element={<BankAccount/>}></Route>
         <Route path='/wallet/extra/bank/delete' element={<></>}></Route>
         <Route path='/wallet/extra/billpayment' element={<BillPayment/>}></Route>
         <Route path='/wallet/extra/billpayment/add' element={<AddBillPayment/>}></Route>
         <Route path='/wallet/extra/billpayment/view' element={<ViewBillPayment/>}></Route>
         <Route path='/wallet/extra/transaction' element={<Transaction/>}></Route>
         <Route path='/wallet/extra/transaction/Add' element={<AddTransaction/>}></Route>
          <Route path='/wallet/extra/transaction/viewById' element={<ListOfTransactionByWalletId/>}></Route>
          <Route path='/wallet/extra/transaction/viewByType' element={<ListOfTransactionByType/>}></Route>
          <Route path='/wallet/extra/transaction/ViewBetDates' element={<ListOfTransactionBetweenDates/>}></Route>
          <Route path='/wallet/extra/beneficiary' element={<Beneficiary/>}></Route>
          <Route path='/wallet/extra/beneficiary/add-delete' element={<AddDeleteBeneficiary/>}></Route>
          <Route path='/wallet/extra/beneficiary/view' element={<ViewBeneficiary/>}></Route>
          <Route path='/wallet/extra/beneficiary/viewall' element={<></>}></Route>
         <Route></Route>
       </Routes>
       {window.location.pathname !== ("/") ? <Footer/> : '' }
       </Router>

    </div>
  )
}

export default Routes1