import axios from "axios";
const API_URL='http://localhost:8080'

class BillPaymentService{

    AddBillPayment(BillPayment){
        return axios.post(API_URL+'/AddBillPayment',BillPayment)
    }

    viewBillPayment(BillId){
    return axios.get(API_URL+'/viewBillPayment/'+BillId)
    }

}

export default new BillPaymentService()