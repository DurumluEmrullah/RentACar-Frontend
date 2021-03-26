import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44328/api/";

  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ListResponseModel<Color>>{
    let newUrl=this.apiUrl+"colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }
  addColor(color:Color):Observable<BaseResponseModel>{
    let newUrl= this.apiUrl+"colors/add";
    return this.httpClient.post<BaseResponseModel>(newUrl,color);
  }

  deleteColor(color:Color):Observable<BaseResponseModel>{
    let newUrl=this.apiUrl+"colors/delete";
    return this.httpClient.post<BaseResponseModel>(newUrl,color);
  }

  updateColor(color:Color):Observable<BaseResponseModel>{
    let newUrl = this.apiUrl+"colors/update";
    return this.httpClient.post<BaseResponseModel>(newUrl,color);
  }

}
