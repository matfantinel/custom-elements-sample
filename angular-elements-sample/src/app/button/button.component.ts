import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @Input() label = 'Default Label';
  private clicksCount: number = 0;

  htmlElement: HTMLElement;

  constructor(public hostElement: ElementRef) {
    this.htmlElement = (this.hostElement.nativeElement as HTMLElement);
  }

  ngOnInit() {
  } 

  handleClick = () => {
    this.clicksCount++;
    let action = new CustomEvent('action', {
      detail: {
        clicksCount: this.clicksCount
      }
    });
    this.htmlElement.dispatchEvent(action);
  }

}
