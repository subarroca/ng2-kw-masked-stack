/**
 * @category   Component
 * @package    com.kiwity.ng2-kw-maskedStack.maskedStack
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';




// EXTERNAL





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
  @Input() value: number;

  @Input() animationSecs: number = 0.5;


  // TODO: this sucks but I still haven't found a way to get component unique Id
  @Input() uniqueId: string;



  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }


  get position() {
    let str: string;

    switch (this.from) {
      case 'top':
        str = `translateY(${-this.maskHeight * (1 -this.value / this.goal)}px)`;
        break;

      case 'bottom':
        str = `translateY(${this.maskHeight * (1 - this.value / this.goal)}px)`;
        break;

      case 'left':
        str = `translateX(${-this.maskWidth * (1 - this.value / this.goal)}px)`;
        break;

      case 'right':
        str = `translateX(${this.maskWidth * (1 - this.value / this.goal)}px)`;
        break;
    }
    return this.sanitizer.bypassSecurityTrustStyle(str);
  }

}
