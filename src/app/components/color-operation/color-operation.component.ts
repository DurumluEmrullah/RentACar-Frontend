import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-operation',
  templateUrl: './color-operation.component.html',
  styleUrls: ['./color-operation.component.css']
})
export class ColorOperationComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded:boolean=false;
  selectedColor:Color;
  colorUpdateForm:FormGroup;


  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getColors();
    
  }

  createForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorId:[this.selectedColor.colorId,Validators.required],
      colorName:["",Validators.required]
    })
  }

  setSelectedColor(color:Color){
    this.selectedColor=color;
    this.createForm();
    console.log(this.selectedColor)

  }
  getColors(){
    this.colorService.getColor().subscribe(response=>{
      this.colors= response.data;
      this.dataLoaded=true;
    })
  }

  deleteColor(color:Color){
    this.colorService.deleteColor(color).subscribe(response=>{
      if(response.success){
        this.toastrService.success("Renk Silindi");
        this.getColors()
      }
    
    })
  }

  updateColor(){

    if(this.colorUpdateForm.valid){
      let colorModal=Object.assign({},this.colorUpdateForm.value);
      this.colorService.updateColor(colorModal).subscribe(response=>{
        this.toastrService.success("Renk Güncellendi","Başarılı");
        this.getColors();
      },responseError=>{
        this.toastrService.error("Bir Hata Oluştu Daha Sonra Tekrar Deneyiniz","Hata");
      })

    }
    else{
      this.toastrService.warning("Renk ismi boş olamaz","Güncellenemedi")
    }
  }
}
