import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormGroupRowComponent } from './form-group-row/form-group-row.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormRowComponent } from './form-row/form-row.component';
import { FormColComponent } from './form-col/form-col.component';
import { InputComponent } from './component/input/input.component';
import { TextareaComponent } from './component/textarea/textarea.component';
import { BooleanComponent } from './component/boolean/boolean.component';



@NgModule({
  declarations: [
    FormComponent,
    FormGroupRowComponent,
    FormGroupComponent,
    FormRowComponent,
    FormColComponent,
    InputComponent,
    TextareaComponent,
    BooleanComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormComponent,
    FormGroupRowComponent,
    FormGroupComponent,
    FormRowComponent,
    FormColComponent,
    InputComponent,
    TextareaComponent,
    BooleanComponent
  ]
})
export class FormModule { }
