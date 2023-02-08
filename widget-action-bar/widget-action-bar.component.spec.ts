import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetActionBarComponent } from './widget-action-bar.component';

describe('WidgetActionBarComponent', () => {
  let component: WidgetActionBarComponent;
  let fixture: ComponentFixture<WidgetActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetActionBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
