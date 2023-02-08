import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-text-box',
  templateUrl: './widget-text-box.component.html',
  styleUrls: ['./widget-text-box.component.scss']
})
export class WidgetTextBoxComponent {
  
  @Input() placeholder: string = ""
}
