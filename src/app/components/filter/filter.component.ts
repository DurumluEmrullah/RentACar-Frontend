import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  brands:Brand[]=[];
  colors:Color[]=[];
  selectedBrand:number;
  selectedColor:number;

  constructor(private colorService:ColorService,private brandService :BrandService) { }

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    
  }


  getColors(){
    this.colorService.getColor().subscribe(response=>{
      this.colors=response.data;
    })
  }

  getBrands(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data;
    })
  }



}
