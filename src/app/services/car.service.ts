import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44328/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?id='+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);

  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
