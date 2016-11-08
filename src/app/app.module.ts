/**
 * @category   Module
 * @package    com.kiwity.ng2-kw-maskedStack.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




// EXTERNAL




// OWN
import { AppComponent } from './app.component';
import { MaskedStackModule } from './masked-stack';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaskedStackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
