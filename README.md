# ng2-kw-masked-stack

Flexible masked-stack graph made with SVG ang Angular2 that can be used as pie chart too.

As seen on Angularbeers http://www.meetup.com/AngularJS-Beers/events/234753624/



## Options:
* maskWidth: number = 100             | mask wiewbox width
* maskHeight: number = 100            | mask wiewbox height
* bgColor: string = 'transparent'     | color of background image
* frontColor: string = 'transparent'  | color of stack
* from: string = 'bottom'             | starting point of the stack. Can be: top, bottom, left, right
* goal: number = 100                  | maximum value allowed
* value: number                       | value to be represented
* animationSecs: number = 0.5         | animation of lines when changing values
* uniqueId: string;



## Installing
ng2-kw-masked-stack is available via npm
`npm install ng2-kw-masked-stack -S`

Import MaskedStackModule in your app
`import { MaskedStackModule } from 'ng2-kw-masked-stack'`

Use `<ng2-kw-masked-stack></ng2-kw-masked-stack>`.
Set a width and height for the masked-stack and it will scale accordingly.