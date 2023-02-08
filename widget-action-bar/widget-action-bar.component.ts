import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-action-bar',
  templateUrl: './widget-action-bar.component.html',
  styleUrls: ['./widget-action-bar.component.scss']
})
export class WidgetActionBarComponent {

  counter: number = 0;
  @Input() step: number = 1;
  
  decrease() {
    if (this.counter-this.step >= 0){
      this.counter = this.counter-this.step;
    }
  }

  increase() {
    if (this.counter+this.step <= 100){
      this.counter = this.counter+this.step;
    }
  }
}
