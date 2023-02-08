import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTextBoxComponent } from './widget-text-box.component';

describe('WidgetTextBoxComponent', () => {
  let component: WidgetTextBoxComponent;
  let fixture: ComponentFixture<WidgetTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
