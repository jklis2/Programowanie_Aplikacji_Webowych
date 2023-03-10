import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumListComponent } from './medium-list.component';

describe('MediumListComponent', () => {
  let component: MediumListComponent;
  let fixture: ComponentFixture<MediumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
