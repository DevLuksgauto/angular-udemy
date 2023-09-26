import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;

  constructor(){}

  ngOnInit(): void {}
  
  public destruirComponente(){
    this.destruir = false
  }

}
