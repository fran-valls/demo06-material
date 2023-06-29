import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialogo: MatDialog) {

  }
  public mostrarDialogo() {
    this.dialogo.open(AppComponent,{
      width: '250px',
    });
  }
}
