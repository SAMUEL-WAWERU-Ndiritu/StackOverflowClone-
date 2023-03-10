import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertpageComponent } from './advertpage.component';

describe('AdvertpageComponent', () => {
  let component: AdvertpageComponent;
  let fixture: ComponentFixture<AdvertpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdvertpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
