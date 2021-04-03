import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { CreditCardResponse } from '../models/creditCardResponse';
import { ListResponseModel } from '../models/listResponseModel';
import { RegisterCreditCardModel } from '../models/registerCreditCardModel';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  apiUrl='https://localhost:44328/api/';
  constructor(private httpClient:HttpClient) { }

  registerCreditCard(updatedCreditCard:RegisterCreditCardModel):Observable<BaseResponseModel>{
    let newUrl = this.apiUrl +"creditcards/update"
    return this.httpClient.post<BaseResponseModel>(newUrl,updatedCreditCard);
  }

  getCreditCardByCustomerId(id:number):Observable<ListResponseModel<CreditCardResponse>>{
    let newUrl = this.apiUrl+"creditcards/getcreditcardbycustomerid?id="+id;
    return this.httpClient.get<ListResponseModel<CreditCardResponse>>(newUrl);

  }
}
