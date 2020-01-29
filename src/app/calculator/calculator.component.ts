import { Component, OnInit } from "@angular/core";
import { Key } from "protractor";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  show: string ;
  history : string ;
  _his : boolean ;  
 

  constructor() {}

  ngOnInit() {
    this.show = "";
    this.history ="";
    this._his = false ;
    
  }

  number(item) {
   

    if( (item == '+' ||
    item == '*' ||
    item == '/' ||
    item == '%') && this.show == ""
     ){
      return ;

    }
     this.show = this.show + item;
  }

  
  Percent(){
    this.show = this.show.substring(0,this.show.length -1);  /// substring[เริ่มจาก 0]   show.length เริ่มจาก 1
   
  }

  total(){
    this.history = this.show ;
    this._his = true ;
    
    this.show = eval(this.show.toString());
    
  }

  del(){
    this.show = "";
    this.history ="";
    
  }


}
