import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { CustomerDetail } from '../models/customerDetail';
import { CustomerInformation } from '../models/customerInformation';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44328/api/customers/";

  constructor(private httpClient:HttpClient) { }


  getCustomer():Observable<ListResponseModel<CustomerDetail>>{
    let newUrl = this.apiUrl+"getcustomerdetail"
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newUrl);
  }
  getCustomerInformation(id:number):Observable<SingleResponseModel<CustomerInformation>>{
    let newUrl = this.apiUrl+"getcustomerbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<CustomerInformation>>(newUrl);
  }

  addCustomer(customerInformation:CustomerInformation):Observable<BaseResponseModel>{
    let newUrl = this.apiUrl+"add";
    return this.httpClient.post<BaseResponseModel>(newUrl,customerInformation);
  }

  updateCustomer(customerInformation:CustomerInformation):Observable<BaseResponseModel>{
    let newUrl = this.apiUrl+"update";
    return this.httpClient.post<BaseResponseModel>(newUrl,customerInformation);
  }



  
}
