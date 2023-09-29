import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;
  public addValue: number = 0;
  
  public getDados: {nome: string, idade: number} | undefined;
  
  constructor(){}

  ngOnInit(): void {}

  public add(): void {
    this.addValue += 1;
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event
  }

}
