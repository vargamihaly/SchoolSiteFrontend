import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtkezesComponent } from './etkezes.component';

describe('EtkezesComponent', () => {
  let component: EtkezesComponent;
  let fixture: ComponentFixture<EtkezesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtkezesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtkezesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
