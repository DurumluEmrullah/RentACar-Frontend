import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { CreditCard } from 'src/app/models/creditCard';
import { CreditCardResponse } from 'src/app/models/creditCardResponse';
import { RegisterCreditCardModel } from 'src/app/models/registerCreditCardModel';
import { Rental } from 'src/app/models/rental';
import { CreditcardService } from 'src/app/services/creditcard.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rental:Rental;
  car:CarDto;
  countOfRentDay:number;
  operationResult:string;
  routerLink:string;
  creditCard:CreditCard={creditCardNumber:"",mounthOfExpirationDate:"",yearOfExpirationDate:"",amount:0,securityNumber:""};
  yearOfExpirationDate:string;
  mounthOfExpirationDate:string;
  securityNumber:string;
  cardNumber:string;
  registerCreditCard:RegisterCreditCardModel={cardNumber:"",mounthOfExpirationDate:"",yearOfExpirationDate:"",customerId:0,securityNumber:""};;
  isSuccess:boolean=false;
  creditCardsResponse:CreditCardResponse[];
  haveCreditCard:boolean=false;
  selectedCard:CreditCardResponse;
  
  

  constructor(private rentalService:RentalService,
    private toastrService:ToastrService,
    private paymentService:PaymentService,
    private creditcardService:CreditcardService) { }


  ngOnInit(): void {
    var rent = localStorage.getItem("rentDetail");
    var rentedCar =localStorage.getItem("rental");
    this.car=JSON.parse(rentedCar||'{}');
    this.rental=JSON.parse(rent||'{}');
    var rentDate = new Date(this.rental.rentDate);
    var returnDate= new Date(this.rental.returnDate);

    this.countOfRentDay= Math.abs(returnDate.getTime()-rentDate.getTime());
    this.countOfRentDay=Math.ceil(this.countOfRentDay/(1000*3600*24));
    this.getCreditCard();
    
  }

  doRentOperations(){
    console.log(this.creditCard)
    this.creditCard.creditCardNumber=this.cardNumber;
    this.creditCard.mounthOfExpirationDate=this.mounthOfExpirationDate;
    this.creditCard.yearOfExpirationDate=this.yearOfExpirationDate;
    this.creditCard.securityNumber=this.securityNumber;
    this.creditCard.amount= this.countOfRentDay*this.car.dailyPrice;
    this.paymentOperation(this.creditCard);
  }

  refundMoney(creditCard:CreditCard){
    this.paymentService.refund(creditCard).subscribe(response=>{
      if(response.success){
        this.toastrService.success("Paranız İade Edilmiştir","Başarılı");
      }
      else{
        this.toastrService.error("Bir hata oluştu paranız yakın zamanda iade edilecektir","Hata");
      }
    })
  }

  getCardInformation(creditCard:CreditCardResponse){
    console.log(this.selectedCard)
    this.cardNumber=creditCard.cardNumber;
    this.securityNumber=creditCard.securityNumber;
    this.mounthOfExpirationDate=creditCard.mounthOfExpirationDate;
    this.yearOfExpirationDate=creditCard.yearOfExpirationDate;
    console.log("merhabaaaaa")
  }

  registerCardInformation(){
    this.registerCreditCard.customerId=this.rental.customerId;
    this.registerCreditCard.cardNumber=this.cardNumber;
    this.registerCreditCard.securityNumber=this.securityNumber;
    this.registerCreditCard.yearOfExpirationDate=this.yearOfExpirationDate;
    this.registerCreditCard.mounthOfExpirationDate=this.mounthOfExpirationDate;
  
    this.creditcardService.registerCreditCard(this.registerCreditCard).subscribe(response=>{
      this.toastrService.info("kart bilgileri kayıt edildi");
      this.isSuccess=false;
    })
  }

  getCreditCard(){
    this.creditcardService.getCreditCardByCustomerId(this.rental.customerId).subscribe(response=>{
      console.log(response);

      if(response.data.length>0){
        this.haveCreditCard=true;
      }
      this.creditCardsResponse=response.data
      console.log("Merhaba dünya" +this.haveCreditCard)
    })
  }

  // paymentControl(){
  //   let isPay=localStorage.getItem("isPay");
  //   isPay=JSON.parse(isPay || "");
  //   console.log(isPay);
  //   if(isPay=="true"){
  //     if(this.createRental()){
  //       this.toastrService.success("Araç Kiralama İşlemi Tamamlandı","Başarılı");
  //       localStorage.clear
       
  //     }
  //     else{
  //       this.toastrService.error("Araç Zaten Kiralanmış Durumda Paranız İade Ediliyor...","Başarısız");
  //       this.refundMoney(this.creditCard);
  //       localStorage.clear
      
  //     }
  //   }
  //   else{
  //     this.toastrService.info("Ödeme işlemi ile ilgili bir hata oluştu","Hata");
     
  //   }
  // }

  paymentOperation(creditCard:CreditCard){
    this.paymentService.buy(this.creditCard).subscribe(response=>{
      this.toastrService.success("Ödemi İşlemi Başarı ile Gerçekleştirilmiştir","Ödeme Tamamlandı")
      this.createRental();
      this.isSuccess=true;
      
    },responseError=>{
      console.log(responseError)
      if(responseError.error){
      
          this.toastrService.error(responseError.error,"Hata")
          
        
      }

    })
    
  }

  createRental() {
    this.rentalService.addRental(this.rental).subscribe(
      (data) => {
        this.toastrService.success(
          'Araç Şuan Kiralanmaya Hazır Durumda Kart Bilgileriniz Kontrol Ediliyor..',
          'Başarılı'
        );
        
        
      },
      (responseError) => {
        console.log(responseError);
        this.toastrService.error(
          responseError.error
        );
        this.refundMoney(this.creditCard);
     
      }
    );
    
  }

}
