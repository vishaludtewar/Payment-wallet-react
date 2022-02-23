import axios from "axios";
const API_URL="http://localhost:8080/wallet"

class WalletService{
 
    showBalance(mobile)
    {
        return axios.get(API_URL+'/balance/'+mobile)
    }

    fundTransfer(source,target,amount)
    {
       return axios.put(API_URL+'/amounttransfer/'+source+'/'+target+'/'+amount)
    }

    depositAmount(mobile,amount)
    {
       return axios.put(API_URL+'/deposit/'+mobile+'/'+amount)
    }

    addMoney(Wallet,amount)
    {
        return axios.put(API_URL+'/addmoney/'+amount,Wallet)
    }

    GetAll()
    {
       return axios.get(API_URL+'/all')
    }

    updateAccount(Customer)
    {
       return axios.put(API_URL+'/update',Customer)
    }

    addWallet(name,mobileNumber,amount)
    {
       return axios.post(API_URL+'/create/'+name+'/'+mobileNumber+'/'+amount)
    }

}

export default new WalletService()
