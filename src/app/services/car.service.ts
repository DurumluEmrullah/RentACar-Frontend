import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44328/api/';

  constructor(private httpClient: HttpClient) {}

  add(car:Car):Observable<BaseResponseModel>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<BaseResponseModel>(newPath,car);
  }

  delete(car:Car):Observable<BaseResponseModel>{
    let newPath=this.apiUrl+"cars/delete";
    return this.httpClient.post<BaseResponseModel>(newPath,car);
  }


  getCars():Observable<ListResponseModel<Car>>{
    let newUrl = this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarById(carId:number):Observable<SingleResponseModel<Car>>{
    let newUrl = this.apiUrl+"cars/getbyid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newUrl);
  }

  getCarsDto(): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDtoById(carId:number):Observable<SingleResponseModel<CarDto>>{
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?id='+carId;
    return this.httpClient.get<SingleResponseModel<CarDto>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByFilter(colorId:number,brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getcarsbyfilter?colorId="+colorId+"&brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  updateCar(car:Car):Observable<BaseResponseModel>{
    let newPath=this.apiUrl+"cars/update";
    return this.httpClient.post<BaseResponseModel>(newPath,car);
  }

 
}
