import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalService } from 'ngx-bootstrap/modal';

import { SimulatorComponent } from './simulator.component';
import { SimulatorService } from './simulator.service';

describe('SimulatorComponent', () => {
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ SimulatorComponent ],
      providers: [ BsModalService, SimulatorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be call method initForm inside Lifecycle hooks  ngOnInit', () => {
    spyOn<SimulatorComponent>(component, 'initForm' as never).and.callThrough();
    setTimeout(function() {
      fixture.detectChanges();
      expect(component.ngOnInit).toHaveBeenCalled();
    },500)
  });
});
