import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  updateCarForm :FormGroup;
  updateCar:Car;
  id:number;
  brands:Brand[]=[];
  colors:Color[]=[];

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      if(param["carId"]){
        this.id=param["carId"];
        this.getCarById(param["carId"]);
        this.getColors();
        this.getBrands();
        this.createForm();
      }
    })
  }

  createForm()
  {
    this.updateCarForm=this.formBuilder.group({
      brandId:[this.updateCar.brandId,Validators.required],
      colorId:["",Validators.required],
      carName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })

  }

  update(){
    if(this.updateCarForm.valid){
      let carModel = Object.assign({}, this.updateCarForm.value);
      carModel.brandId = parseInt(carModel.brandId);
      carModel.colorId = parseInt(carModel.colorId);
      carModel.id=parseInt(this.id+"")

      this.carService.updateCar(carModel).subscribe(response=>{
        this.toastrService.success(carModel.carName +" Güncellendi","Başarılı")
      },responseError=>{
        if (responseError.error.ValidationErrors.length > 0) {
          for (
            let i = 0;
            i < responseError.error.ValidationErrors.length;
            i++
          ) {
            this.toastrService.error(
              responseError.error.ValidationErrors[i].ErrorMessage,
              'Hata'
            );
          }
        }
      })
      
    }
    

  }

  getColors(){
    this.colorService.getColor().subscribe(response=>{
      this.colors=response.data
    })
  }

  getBrands(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data
    })
  }

  getCarById(id:number){
    this.carService.getCarById(id).subscribe(response=>{
      this.updateCar=response.data
   
    })
  }

}
