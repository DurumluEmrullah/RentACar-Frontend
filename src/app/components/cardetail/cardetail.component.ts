import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: CarDto;
  carImages: CarImage[];
  dataLoaded: boolean = false;
  currentImage: CarImage;
  rental: Rental = {
    carId: 0,
    customerId: 0,
    returnDate: new Date(),
    rentDate: new Date(),
  };
  rentDate: Date;
  returnDate: Date;
  customerId: number;
  isRented: boolean = false;
 

  constructor(
    private carService: CarService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getCarById(param['carId']);
      this.getCarImages(param['carId']);
    });
  }

  createRental() {
    this.rental.carId = this.car.id;
    this.rental.returnDate = this.returnDate;
    this.rental.rentDate = this.rentDate;
    this.rental.customerId = this.customerId;

    localStorage.setItem("rentDetail",JSON.stringify(this.rental));
    localStorage.setItem("rental",JSON.stringify(this.car));
 
  }

  getCarById(carId: number) {
    this.carService.getCarDtoById(carId).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.carImages = response.data;
      this.currentImage = this.carImages[0];
    });
  }

  getCarImageClass(carImage: CarImage) {
    if (this.currentImage == carImage) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

}
