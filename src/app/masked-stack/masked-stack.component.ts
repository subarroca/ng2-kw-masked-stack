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
  @Input() width: number = 100;
  @Input() height: number = 100;

  @Input() bgColor: string = 'transparent';
  @Input() frontColor: string = 'transparent';

  @Input() from: string = 'bottom'; // top, bottom, left, right
  @Input() goal: number = 100;
  @Input() value: number;

  @Input() animationSecs: number = 0.5;


  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }


  get position() {
    let str: string;

    switch (this.from) {
      case 'top':
        str = `translateY(${-this.height * (1 -this.value / this.goal)}px)`;
        break;

      case 'bottom':
        str = `translateY(${this.height * (1 - this.value / this.goal)}px)`;
        break;

      case 'left':
        str = `translateX(${-this.width * (1 - this.value / this.goal)}px)`;
        break;

      case 'right':
        str = `translateX(${this.width * (1 - this.value / this.goal)}px)`;
        break;
    }
    return this.sanitizer.bypassSecurityTrustStyle(str);
  }

}
