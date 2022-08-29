import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmeComponent } from './page-confirme.component';

describe('PageConfirmeComponent', () => {
  let component: PageConfirmeComponent;
  let fixture: ComponentFixture<PageConfirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConfirmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
