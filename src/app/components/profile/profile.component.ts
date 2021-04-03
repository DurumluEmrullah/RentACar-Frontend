import { Component, OnInit } from '@angular/core';
import { CustomerInformation } from 'src/app/models/customerInformation';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInformation:User;
  customerInformation:CustomerInformation;

  constructor(private authService:AuthService,
    private localStorageService:LocalStorageService,
    private customerService:CustomerService) { }

  ngOnInit(): void {

    this.getUser();

  }

  getUser(){
    let email = this.localStorageService.getCurrentUser();
    this.authService.getUser(email).subscribe(response=>{
      this.userInformation = response.data;
      this.getCustomerInformation(this.userInformation.id);
    })
  }

  getCustomerInformation(id:number){
    this.customerService.getCustomerInformation(id).subscribe(response=>{
      this.customerInformation =response.data
      console.log("*******************");
      console.log(response)
    },responseError=>{
      
      console.log(responseError)
    })
  }

}
