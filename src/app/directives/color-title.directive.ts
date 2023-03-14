import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorTitle]',
  standalone: true
})
export class ColorTitleDirective implements OnInit{

  constructor( private elementRef:ElementRef) { }
  ngOnInit(): void {
   this.elementRef.nativeElement.style.color='red'
  }

}
