import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {VentanaDialogoComponent} from "./components/ventana-dialogo/ventana-dialogo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialogo: MatDialog) {

  }
  public mostrarDialogo() {
    this.dialogo.open(VentanaDialogoComponent,{
      width: '250px',
    });
  }

  public cerrarDialogo(){
  }

  protected readonly VentanaDialogoComponent = VentanaDialogoComponent;
}
