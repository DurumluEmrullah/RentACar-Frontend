import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';
import { UserForUpdateDto } from '../models/userForUpdateDto';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44328/api/";
  constructor(private httpClient:HttpClient,
    private LocalStorageService:LocalStorageService) { }


  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let newUrl=this.apiUrl+"auth/login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newUrl,loginModel)
  }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    let newUrl= this.apiUrl+"auth/register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newUrl,registerModel);

  }

  getUser(email:string):Observable<SingleResponseModel<User>>{
    let newUrl=this.apiUrl+"auth/getuserbyemail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newUrl);
  }

  update(userForUpdateDto:UserForUpdateDto):Observable<SingleResponseModel<User>>{
    let newUrl = this.apiUrl+"auth/update";
    return this.httpClient.post<SingleResponseModel<User>>(newUrl,userForUpdateDto);
  }

  
  isAuthenticated(){
    if(this.LocalStorageService.getToken()){
      return true;
    }
    else{
      return false;
    }
  }
}
