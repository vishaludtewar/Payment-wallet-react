import axios from "axios";
const API_URL='http://localhost:8080'

class TransactionService{

    addTransaction(Transaction){
        return axios.post(API_URL+'/addtransaction',Transaction)
    }

    getTransactionByType(transactionType){
        return axios.get(API_URL+'/allTransactionsByType/'+transactionType)
    }

    getTransactionByWallet(WalletId){
        return axios.get(API_URL+'/alltransactions/'+WalletId)
    }

    getTransactionBetweenDates(startDate,endDate){

        return axios.get(API_URL+'/transactionByDate/'+startDate+'/'+endDate)

    }    
}

export default new TransactionService()