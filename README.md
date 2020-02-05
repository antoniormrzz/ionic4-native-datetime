# ionic4-native-datetime
[![HitCount](http://hits.dwyl.io/antoniormrzz/ionic4-native-datetime.svg)](http://hits.dwyl.io/antoniormrzz/ionic4-native-datetime)

> Ionic 4 Angular native datetime picker

Are you tired of the terrible animations in ion-datetime? Do you need something more reliable? welcome to the club!
I tried to follow properties of ion-datetime and its ouput.

uses [date-fns](https://date-fns.org/) and [skwas-cordova-plugin-datetimepicker](https://github.com/skwasjer/skwas-cordova-plugin-datetimepicker) 

## Install

  1. cordova plugin add skwas-cordova-plugin-datetimepicker
      > do not add via `ionic cordova ...`
  1. npm install date-fns
  1. copy datetime folder in your components
  1. feel free to modify whatever you need
  1. don't forget to import `DatepickerModule` in your modules
  1. use `<ar-datepicker></ar-datepicker>`
  
## Usage

```html
  <ar-datepicker></ar-datepicker>

  <!-- extensive usage (format follows date-fns) -->
  <ar-datepicker displayFormat="d/M/yyyy" [(dateModel)]="invoiceDate" cancelText="cancel"
    doneText="select"></ar-datepicker>

  <!-- minimum and maximum (parsable date time format) -->
  <ar-datepicker max="2120-10-31" min="2020-10-31"></ar-datepicker>

  <!-- modes (defaults to date) -->
  <ar-datepicker mode="date"></ar-datepicker>
  <ar-datepicker mode="time"></ar-datepicker>
  <ar-datepicker mode="datetime"></ar-datepicker>

  <!-- event and binding -->
  <ar-datepicker (dateModelChange)="invoiceDateChange($event)" [dateModel]="invoiceDate" displayFormat="d M-yy"></ar-datepicker>
```

### Properties

this should be an easy drop-in replacement for ion-datetime, you can set defaults by changing component.ts.

| Name          | Format        | Default |
| ------------- |:-------------:| -------:|
| displayFormat | any valid date-fns format **note:** might vary from ionic format | iso |
| mode | 'date', 'time', 'datetime'     |    'date' |
| hasIcon      |  boolean      |   true |
| iconName | ionicons icon name    |    'calendar' |
| iconColor     | ionic color, 'primary', 'secondary', etc (doesn't support css or hex colors)   |   'secondary' |
| color | background color, css color name or hex  |    'white' |
| textColor     | displayed date text color, css color name or hex    |   'black' |
| readonly | -   |    false |
| max     | parsable datetime     |   - |
| min | parsable datetime     |    - |
| doneText     | text for done button     |   - |
| cancelText | text for cancel button     |    - |
| dateModel      | binding for date, [dateModel], [(dateModel)]  |   click date/time |

## License
Copyright (c) 2019 Antonio Ramirez sepehralizade@live.com, MIT License
