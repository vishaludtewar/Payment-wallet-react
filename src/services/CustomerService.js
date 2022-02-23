import axios from "axios";
const API_URL='http://localhost:8080/customer'

class CustomerService{

    addCustomer(Customer){
        return axios.post(API_URL+'/add',Customer)
    }

    validateCustomer(mobile,password){
        return axios.get(API_URL+'/validate?mno='+mobile+'&pass='+password)
    }

}

export default new CustomerService()