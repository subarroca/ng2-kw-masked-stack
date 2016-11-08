/**
 * @category   Component
 * @package    com.kiwity.ng2-kw-maskedStack.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { Component } from '@angular/core';




// EXTERNAL




// OWN





@Component({
  selector: 'ng2-kw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors = {
    indigo: '#14143e',
    pink: '#fd1c49',
    orange: '#ff6e00',
    yellow: '#f0c800',
    mint: '#00efab',
    cyan: '#05d1ff',
    purple: '#841386',
    white: '#fff'
  };


  graphBottom = {
    bgColor: this.colors.indigo,
    frontColor: this.colors.pink,
    maskWidth: 570,
    maskHeight: 570,
    value: 33,
    from: 'bottom',
    uniqueId: 'bottom'
  };

  graphTop = {
    bgColor: this.colors.indigo,
    frontColor: this.colors.purple,
    maskWidth: 571,
    maskHeight: 571,
    value: 33,
    from: 'top',
    uniqueId: 'top'
  };

  graphRight = {
    bgColor: this.colors.indigo,
    frontColor: this.colors.mint,
    maskWidth: 584,
    maskHeight: 584,
    value: 33,
    from: 'right',
    uniqueId: 'right'
  };

  graphLeft = {
    bgColor: this.colors.indigo,
    frontColor: this.colors.cyan,
    maskWidth: 1341,
    maskHeight: 556,
    value: 33,
    from: 'left',
    uniqueId: 'left'
  };
}
