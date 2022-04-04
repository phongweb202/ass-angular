import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhuKienComponent } from './phu-kien.component';

describe('PhuKienComponent', () => {
  let component: PhuKienComponent;
  let fixture: ComponentFixture<PhuKienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhuKienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhuKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
