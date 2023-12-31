import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit{
  
  public valor: boolean = true;
  public heightPx: string = '20px';
  public backgroundColor: string = 'red';
  public nome: string = "";
  public list: Array<{nome: string}> = [{nome: "Lucas Gauto"}];
  public date: Date = new Date();
  
  ngOnInit(): void {
    setInterval(()=>{
      if(this.valor === true){
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.heightPx === '20px'){
        this.heightPx = '40px';
        this.backgroundColor = 'blue';
      } else {
        this.heightPx = '20px';
        this.backgroundColor = 'red'
      }
    },1000)
  }

  public salvar(){
    this.list.push({ nome: this.nome });
    this.nome = "";
  }

  
}
