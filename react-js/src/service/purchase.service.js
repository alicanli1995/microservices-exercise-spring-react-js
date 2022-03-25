import {BASE_API_URL} from "../common/Constant";
import axios from "axios";
import {authHeader} from "./base.service";

const API_URL = BASE_API_URL + "/gateway/purchase";

class PurchaseService{

    savePurchase(purchase){
        return axios.post(API_URL,purchase, {headers:authHeader()});
    }

    getAllPurchases(){
        return axios.get(API_URL, {headers: authHeader()});
    }
}
export default new PurchaseService();