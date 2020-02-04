import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'ar-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() displayFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
  @Input() mode = 'date';
  @Input() hasIcon = true;
  @Input() iconName = 'calendar';
  @Input() iconColor = 'secondary';
  @Input() color = 'white';
  @Input() textColor = 'black';
  @Input() max;
  @Input() min;
  @Input() doneText;
  @Input() cancelText;
  @Input() dateModel;
  @Input() readonly = false;
  @Output() dateModelChange = new EventEmitter<string>();
  inputValue = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    if (this.dateModel) {
      this.inputValue = format(new Date(this.dateModel), this.displayFormat);
    }
  }

  onClick = () => {
    if (!this.readonly) {
      let options: any = {
        mode: this.mode,
        success: newDate => {
          this.dateModelChange.emit(newDate.toISOString());
          this.dateModel = newDate.toISOString();
          this.inputValue = format(new Date(this.dateModel), this.displayFormat);
          this.cdr.detectChanges();
        }
      };

      if (this.dateModel) {
        options.date = new Date(this.dateModel);
      } else {
        options.date = new Date();
      }
      if (this.min) {
        options.minDate = new Date(this.min);
      }
      if (this.max) {
        options.maxDate = new Date(this.max);
      }
      if (this.doneText) {
        options.okText = this.doneText;
      }
      if (this.cancelText) {
        options.cancelText = this.cancelText;
      }
      (window.cordova.plugins as any).DateTimePicker.show(options);
    }
  };
}
