import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44328/api/rentals"

  constructor(private httpClient : HttpClient) { }

  getRental():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl+"/getrentaldetails");
  }
  addRental(rental:Rental):Observable<BaseResponseModel>{
    return this.httpClient.post<BaseResponseModel>(this.apiUrl+"/add",rental);
  }
}
