import logo from './logo.svg';
import './App.css';
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
import Routes1 from './Routes1';

function App() {

  return (
    <div>
      <Routes1/>

      
    </div>
  );
}

export default App;
