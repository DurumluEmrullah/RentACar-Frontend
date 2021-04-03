import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  tokenKey:string="token";
  creditCard:string;
  currentUser:string="currentUser";

  constructor() { }

  getToken(){
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token:TokenModel){
    localStorage.setItem(this.tokenKey,JSON.stringify(token));
  }

  removeToken(){
    localStorage.removeItem(this.tokenKey);
  }
  setCurrentUser(email:string){
    localStorage.setItem(this.currentUser,JSON.stringify(email));
  }
  getCurrentUser(){
    return JSON.parse(localStorage.getItem(this.currentUser) ||'{}');
  }

  removeCurrentUser(){
    localStorage.removeItem(this.currentUser);
  }
}
