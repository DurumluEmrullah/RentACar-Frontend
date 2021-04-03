import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormControl,FormBuilder,Validators,FormGroup} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CustomerInformation } from 'src/app/models/customerInformation';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setings',
  templateUrl: './setings.component.html',
  styleUrls: ['./setings.component.css']
})
export class SetingsComponent implements OnInit {

  userUpdateForm:FormGroup;
  customerUpdateForm:FormGroup;
  userInformation:User;
  customerInformation:CustomerInformation;
  title:string="Şirket Bilgilerini Oluştur";

 

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService,
    private localStorageService:LocalStorageService,
    private customerService:CustomerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  updateCustomer(){
    if(this.customerUpdateForm.valid){
      let customerModel = Object.assign({},this.customerUpdateForm.value);
      this.customerService.updateCustomer(customerModel).subscribe(response=>{
        this.toastrService.success("Şirket bilgileri Güncellendi");
        this.router.navigate(["profile"])
      },responseError=>{
        this.toastrService.error("Şirket Bilgileri Güncelleniken Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyiniz");
      })
    }
    else{
      this.toastrService.info("Şirket Adı Boş olamaz");
    }

  }

  registerCustomer(){
    if(this.customerUpdateForm.valid){
      let customerModel = Object.assign({},this.customerUpdateForm.value);
      console.log("merhaba");
      console.log(customerModel);
      this.customerService.addCustomer(customerModel).subscribe(response=>{
        this.toastrService.success("Müşteri Kayıdı Başarılı");
        this.router.navigate(["profile"])
      },responseError=>{
        this.toastrService.error("Müşteri Kayıt Edilirken Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyiniz.");
      })
    }
    else{
      this.toastrService.info("Şirket Adı Boş olamaz");
    }

  }

  createCustomerForm(){
    this.customerUpdateForm=this.formBuilder.group({
      customerId:[this.userInformation.id,Validators.required],
      companyName:[this.customerInformation?this.customerInformation.companyName:"",Validators.required],
      findex:[1500]
    })
  }

  createForm(){
    this.userUpdateForm=this.formBuilder.group({
      id:[this.userInformation.id,Validators.required],
      firstName:[this.userInformation.firstName,Validators.required],
      lastName:[this.userInformation.lastName,Validators.required],
      email:[this.userInformation.email,Validators.required],
      lastPassword:["",Validators.required],
      newPassword:[,Validators.minLength(6)]
    })
  }

  update(){
    if(this.userUpdateForm.valid){
      let userUpdateModel= Object.assign({}, this.userUpdateForm.value);
      if(userUpdateModel.newPassword==null){
        userUpdateModel.newPassword=userUpdateModel.lastPassword;
      }
      this.authService.update(userUpdateModel).subscribe(response=>{
        this.toastrService.success(response.message);
        this.router.navigate(["profile"]);

      },responseError=>{
        this.toastrService.error(responseError.error)
      })
      
    }
    else{
      console.log("bir hata oldu")
    }
    
  }

  getUser(){
    let email = this.localStorageService.getCurrentUser();
    this.authService.getUser(email).subscribe(response=>{
      this.userInformation = response.data;
      this.getCustomerInformation(this.userInformation.id);
      this.createForm();
    })
  }

  getCustomerInformation(id:number){
    this.customerService.getCustomerInformation(id).subscribe(response=>{
      this.customerInformation =response.data
      this.title="Şirket Bilgilerini Güncelle";
      this.createCustomerForm();
    },responseError=>{
      this.createCustomerForm();
      console.log(responseError)
    })
  }

  isCustomer(){

    if(this.customerInformation){
      return true;
    }
    else {
       return false;
    
    }
  }

}
