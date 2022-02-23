import axios from "axios";
const API_URL="http://localhost:8080"

class BeneficiaryService{
 
    addbeneficiary(BeneficiaryDetails)
    {
        return axios.post(API_URL+'/addbeneficiary',BeneficiaryDetails)
    }

    beneficiaryDelete(mobileNo)
    {
       return axios.delete(API_URL+'/beneficiarydelete/'+mobileNo)
    }

    viewbeneficiary(mobileNo)
    {
       return axios.get(API_URL+'/viewbeneficiary/'+mobileNo)
    }

    viewallbeneficiary(customer)
    {
        return axios.get(API_URL+'/viewallbeneficiary',customer)
    }



}

export default new BeneficiaryService()