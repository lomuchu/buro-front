import { Component } from '@angular/core';
import { OperacionesService } from './services/operaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id: string  = "";
  numero1: string  = "";
  numero2: string  = "";
  operacion: string = "suma";
  metodo: number = 1;
  resultado: string = "";

  constructor(private service: OperacionesService){

  }

  exect() {

      let operaciones = {
        id: this.id,
        numero_1: this.numero1,
        numero_2: this.numero2,
        operacion: this.operacion
      }

console.log(operaciones)

if(this.metodo == 1){
      this.service.post(operaciones).subscribe((res: any) => {
        console.log(res)
        this.resultado = res.resultado;
      }, err => {
          console.log(err)
      })
    }else if(this.metodo == 2){
      this.service.get(operaciones).subscribe((res: any) => {
        console.log(res)
        this.resultado = res.resultado;
      }, err => {
          console.log(err)
      })
    }
  }
}
