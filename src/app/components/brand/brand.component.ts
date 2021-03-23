import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[]=[];
  dataLoaded = false;
  currentBrand:Brand={brandId:0,brandName:""}
  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrand().subscribe(response =>{
      this.brands=response.data;
      this.dataLoaded=true;
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item bg-secondary text-white selected";
    }
    else{
      return "list-group-item";
    }
  }

  resetCurrentBrand(){
    this.currentBrand={brandId:0,brandName:""}
  }

  getAllBrandClass(){
    if(this.currentBrand.brandId==0){
      return "list-group-item bg-secondary text-white selected";
    }
    else{
      return "list-group-item";
    }
  }

  
}
