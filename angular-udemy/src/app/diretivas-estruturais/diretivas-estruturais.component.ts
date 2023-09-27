import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit{
  
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> = [
    {nome: "Lucas Gauto", idade: 38},
    {nome: "Bruno Gauto", idade: 41},
    {nome: "Solange Correa", idade: 66}
  ];
  public nome: string = '';

  constructor(){}

  ngOnInit(): void {

    setInterval(()=>{
      if (this.condition === true){
        this.condition = false
      } else {
        this.condition = true
      }
    }, 1000)
  }

  public onClick(){
      if (this.conditionClick === true){
        this.conditionClick = false
      } else {
        this.conditionClick = true
      }
  }

  public onClickAddList(){
    this.list.push({nome: "Ibira", idade: 73})
  }

  public onClickEvent(event: number){
    this.list.splice(event, 1)
  }

}
