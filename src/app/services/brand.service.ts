import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { BaseResponseModel } from '../models/baseResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44328/api/";

  constructor(private httpClient : HttpClient) { }


  
  getBrand():Observable<ListResponseModel<Brand>>{
    let newUrl= this.apiUrl+"brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }

  addBrand(brand:Brand):Observable<BaseResponseModel>{
    let newUrl= this.apiUrl+"brands/add";
    return this.httpClient.post<BaseResponseModel>(newUrl,brand);

  }

  updateBrand(brand:Brand):Observable<BaseResponseModel>{
    let newUrl= this.apiUrl+"brands/update";
    return this.httpClient.post<BaseResponseModel>(newUrl,brand);
  }

  deleteBrand(brand:Brand):Observable<BaseResponseModel>{
    let newUrl= this.apiUrl+"brands/delete";
    return this.httpClient.post<BaseResponseModel>(newUrl,brand);
  }
}
