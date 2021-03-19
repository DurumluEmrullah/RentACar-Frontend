import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {
  car:Car;
  carImages:CarImage[];
  dataLoaded:boolean=false;
  currentImage: CarImage;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
       this.getCarById (param["carId"]);
       this.getCarImages(param["carId"]);
    
      
    })

  }

  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
      this.car=response.data;
      this.dataLoaded=true
    })
  }

  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe(response=>{
      this.carImages=response.data;
      this.currentImage = this.carImages[0];
    })
  }

  getCarImageClass(carImage: CarImage) {

    if (this.currentImage == carImage) {
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}
