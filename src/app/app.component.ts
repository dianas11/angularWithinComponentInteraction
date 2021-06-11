import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  pageTitle = 'Angular Component Interaction';
  imageUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  userName: string;
  private _customerName: string;
  @ViewChild('nameRef')nameElementRef: ElementRef;

  //if you want to write component initialization code that uses the references injected by the @ViewChild we need to do it inside the afterViewInit lifecycle hook.
  //it is inside that lifecycle hook the references to the DOM element bocome available
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
  


  // getter is a function that returns a private property
  get customerName(): string {
    return this._customerName;
  }
  // setter is a function that accepts a value and assigns the passed in value to the private property
  set customerName(value: string) {
     this._customerName = value;
     if(value === 'Diana') {
      alert('Hola Diana Senpai');
    }
  }
  //getter setter ends


  //eventBinding
  incrementCount() {
    this.count += 1;
  }

  
  
  //split two way binding
  greetDiana(updatedValue) {
    this.userName = updatedValue;
    if(updatedValue === 'Diana') {
      alert('Welcome back Diana');
    }
  }
}
