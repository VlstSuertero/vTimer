import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { DigitComponent } from './digit/digit.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DigitComponent
  ],
  exports: [
    DigitComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
