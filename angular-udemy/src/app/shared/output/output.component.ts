import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{
  
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: 'Lucas', idade: 38},
    {nome: "Bruno", idade: 41},
    {nome: "Natassia", idade: 33}
  ]

  constructor(){}
  
  ngOnInit(): void {};

  public getDados(event: number){
    this.enviarDados.emit(this.list[event])
    console.log(this.list[event])
  }


}
