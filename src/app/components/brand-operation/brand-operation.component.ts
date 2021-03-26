import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-operation',
  templateUrl: './brand-operation.component.html',
  styleUrls: ['./brand-operation.component.css']
})
export class BrandOperationComponent implements OnInit {
  brands:Brand[]=[];
  dataLoaded:boolean=false;
  selectedBrand:Brand;
  brandUpdateForm:FormGroup;


  constructor(private brandService:BrandService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getBrand();
    
  }

  createForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandId:[this.selectedBrand.brandId,Validators.required],
      brandName:["",Validators.required]
    })
  }

  setSelectedBrand(brand:Brand){
    this.selectedBrand=brand;
    this.createForm();
    

  }
  getBrand(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands= response.data;
      this.dataLoaded=true;
    })
  }

  deleteBrand(brand:Brand){
    this.brandService.deleteBrand(brand).subscribe(response=>{
      if(response.success){
        this.toastrService.success("Marka Silindi");
        this.getBrand()
      }
    
    })
  }

  updateBrand(){

    if(this.brandUpdateForm.valid){
      let brandModel=Object.assign({},this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe(response=>{
        this.toastrService.success("Marka Güncellendi","Başarılı");
        this.getBrand();
      },responseError=>{
        this.toastrService.error("Bir Hata Oluştu Daha Sonra Tekrar Deneyiniz","Hata");
      })

    }
    else{
      this.toastrService.warning("Marka ismi boş olamaz","Güncellenemedi")
    }
  }
}
