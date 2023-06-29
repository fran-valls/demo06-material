import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
