import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [FormsModule, IonicModule, CommonModule],
  exports: [DatepickerComponent]
})
export class DatepickerModule {}
