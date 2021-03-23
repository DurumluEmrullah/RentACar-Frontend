import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[]
  dataLoaded:boolean=false
  currentColor:Color={colorId:0,colorName:""};

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColor();
  }

  getColor(){
    this.colorService.getColor().subscribe(response=>{
      this.colors=response.data
      this.dataLoaded=true
    })
  }

  getCurrentColorClass(color:Color){
    if(color ===this.currentColor){
      return "list-group-item bg-secondary text-white selected-color";
    }
    else{
      return "list-group-item";
    }

  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }
  resetCurrentColor(){
    this.currentColor={colorId:0,colorName:""}
  }

  getAllColorClass(){
    if(this.currentColor.colorId==0){
      return "list-group-item bg-secondary selected-color";
    }
    else{
      return "list-group-item ";
    }
  }

}
