import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  trans: Object;

  constructor(translate: TranslateService, private datePipe: DatePipe) {
    // get translate
    translate.get('general.time').subscribe(trans => this.trans = trans);
  }
  
  transform(value: string) {
    // return time ago or date_format set in language.json
    let _value: any;
    let ago = (new Date().getTime() - new Date(value).getTime()) / 1000;
    if (ago > 2592000) _value = this.datePipe.transform(value, this.trans['_date_format']);
    else if (ago < 60 && this.trans['now']) {
      _value = this.trans['now'];
    }
    else if (ago < 3600 && this.trans['minute'] && this.trans['minutes']) {
      _value = Math.floor(ago / 60);
      if (_value < 2) _value += this.trans['minute'];
      else _value += this.trans['minutes'];
    }
    else if (ago < 86400 && this.trans['hour'] && this.trans['hours']) {
      _value = Math.floor(ago / 3600);
      if (_value < 2) _value += this.trans['hour'];
      else _value += this.trans['hours'];
    }
    else if (ago < 2592000 && this.trans['day'] && this.trans['days']) {
      _value = Math.floor(ago / 86400);
      if (_value < 2) _value += this.trans['day'];
      else _value += this.trans['days'];
    }
    return _value;
  }
}
