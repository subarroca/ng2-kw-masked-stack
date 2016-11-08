/**
 * @category   Module
 * @package    com.kiwity.ng2-kw-maskedStack.maskedStack
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';




// EXTERNAL




// OWN
import { MaskedStackComponent } from './masked-stack.component';





@NgModule({
  declarations: [
    MaskedStackComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [
    MaskedStackComponent
  ],
  exports: [
    MaskedStackComponent
  ]
})
export class MaskedStackModule { }
