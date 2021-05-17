import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Angular-APP';
   data = ['abc','def','ghi','jkl']
   data1=[
     {
       name:'abc',
       age:19,
     },
     {
       name:'def',
       age:20,
     },
     {
       name:'ghi',
       age:21,
     },
     {
       name:'jkl',
       age:22,
     }
   ]
}
