/**
 * @category   Component
 * @package    com.kiwity.ng2-kw-maskedStack.maskedStack
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';




// EXTERNAL
import { Observable } from 'rxjs/Rx';





// OWN






@Component({
  selector: 'ng2-kw-masked-stack',
  templateUrl: './masked-stack.component.html',
  styleUrls: ['./masked-stack.component.scss']
})
export class MaskedStackComponent implements OnInit {
  @Input() maskWidth: number = 100;
  @Input() maskHeight: number = 100;

  @Input() bgColor: string = 'transparent';
  @Input() frontColor: string = 'transparent';

  @Input() from: string = 'bottom'; // top, bottom, left, right
  @Input() goal: number = 100;

  @Input()
  set value(value: number) {
    this._value = value;

    Observable.timer(0)
      .first()
      .subscribe(() => this.valueLoaded = true);
  }

  _value: number;

  @Input() animationSecs: number = 0.5;


  // TODO: this sucks but I still haven't found a way to get component unique Id
  @Input() uniqueId: string;

  valueLoaded: boolean = false;



  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }


  get position() {
    let str: string;

    switch (this.from) {
      case 'top':
        str = `translateY(${
          this.valueLoaded
            ? (-this.maskHeight * (1 - this._value / this.goal))
            : -this.maskHeight
          }px)`;
        break;

      case 'bottom':
        str = `translateY(${
          this.valueLoaded
            ? this.maskHeight * (1 - this._value / this.goal)
            : this.maskHeight
          }px)`;
        break;

      case 'left':
        str = `translateX(${
          this.valueLoaded
            ? -this.maskWidth * (1 - this._value / this.goal)
            : -this.maskWidth
          }px)`;
        break;

      case 'right':
        str = `translateX(${
          this.valueLoaded
            ? this.maskWidth * (1 - this._value / this.goal)
            : this.maskWidth
          }px)`;
        break;
    }
    return this.sanitizer.bypassSecurityTrustStyle(str);
  }

}
