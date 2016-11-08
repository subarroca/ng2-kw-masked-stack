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
    width: 30,
    height: 100,
    value: 33,
    from: 'bottom'
  };

  graphTop = {
    bgColor: this.colors.indigo,
    frontColor: this.colors.purple,
    width: 30,
    height: 100,
    value: 33,
    from: 'top'
  };

  graphRight = {
    bgColor: this.colors.indigo,
    frontColor: this.colors.mint,
    width: 100,
    height: 30,
    value: 33,
    from: 'right'
  };

  graphLeft = {
    bgColor: this.colors.indigo,
    frontColor: this.colors.cyan,
    width: 100,
    height: 30,
    value: 33,
    from: 'left'
  };
}
