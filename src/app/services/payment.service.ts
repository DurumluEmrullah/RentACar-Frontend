import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { CreditCard } from '../models/creditCard';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl= "https://localhost:44328/api/";
  constructor(private httpClient : HttpClient) { }

  buy(creditCard:CreditCard):Observable<BaseResponseModel>{
    let newUrl=this.apiUrl+"creditcards/buy"
    return  this.httpClient.post<BaseResponseModel>(newUrl,creditCard);
  }

  refund(creditCard:CreditCard):Observable<BaseResponseModel>{
    let newUrl=this.apiUrl+"creditcards/refund";
    return this.httpClient.post<BaseResponseModel>(newUrl,creditCard);
  }

}
