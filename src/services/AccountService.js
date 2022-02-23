import axios from "axios";
const API_URL="http://localhost:8080"

class AccountService{

    addAccount(BankAccount){
        return axios.post(API_URL+'/addAccount',BankAccount)
    }

    removeAccount(BankAccount){
        return axios.delete(API_URL+'/removeAccount',BankAccount)
    }
    viewAccount(wallet){
        return axios.get(API_URL+'/viewAccount',wallet)
    }
    viewAllAccount(wallet){
        return axios.get(API_URL+'/viewAllAccount',wallet)
    }

}

export default new AccountService()
