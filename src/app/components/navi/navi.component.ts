import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  repeatPassword: string = '';
  userInformation:User={id:0,firstName:"",lastName:"",email:""};


  //Kullanıcı bilgilerini çek 

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
    private localStorageService:LocalStorageService
  ) {
    if(this.isAuthenticated()==true){
     
      let email = localStorageService.getCurrentUser();
      console.log(email)
      this.getUser(email);
    }
    else{
        console.log("merhaba")
    }
   
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'başarılı');
          this.localStorageService.setToken(response.data);
          this.localStorageService.setCurrentUser(loginModel.email);
          this.getUser(loginModel.email);
          
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    } else {
      this.toastrService.info("Kullanıcı adı ve şifre girmelisiniz.")
    }
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.minLength(6)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  register() {
   
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      if (registerModel.password == this.repeatPassword) {
        this.authService.register(registerModel).subscribe(response=>{
          this.toastrService.success("Kayıt Yapıldı.");
          this.localStorageService.setToken(response.data);
          this.localStorageService.setCurrentUser(registerModel.email);
          this.getUser(registerModel.email);
        },
        responseError=>{
          this.toastrService.error(responseError.error.Message);
        })
      } 
      else {
        this.toastrService.error('Girdiğiniz Parolalar Birbirleri ile Eşleşmiyor');
      }
    }
    else{
      
      this.toastrService.info("Tüm Alanları Doldurmalısınız ve Parolanız en az 6 haneli olmalıdır")
      // validasyondan geçemedi
    }
  }

  isAuthenticated():boolean{
    
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
      return false;
    }
  }

  logOut(){
    this.localStorageService.removeToken();
    this.localStorageService.removeCurrentUser();
  }

  getUser(email:string){
   
    this.authService.getUser(email).subscribe(response=>{
     this.userInformation=response.data

    })
  }
}
