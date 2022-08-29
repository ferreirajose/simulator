import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, shareReplay, Subject, switchMap, tap, map, Observable } from 'rxjs';
import { SimulatorService } from './simulator.service';
import { Lending } from './lending';
import { ModalComponent } from '../components/modal/modal.component';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  readonly save$ = new Subject();
  formSimulator!: FormGroup;
  bsModalRef?: BsModalRef;

  response$: Observable<any> = combineLatest(
   this.save$
  ).pipe(
    map((form) =>form
    ),
    tap(val => console.log(val)),
    switchMap(([formSimulator]) => this.simulatorService.calcValue(formSimulator)),
    tap(val => console.log(val)),
    shareReplay(1)
  )

  constructor(
    readonly fb: FormBuilder,
    private simulatorService: SimulatorService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm():void {
    this.formSimulator = this.fb.group({
      name: ['', Validators.required],
      value: [0, Validators.required],
      installments: [0, Validators.required]
    })
  }

  open() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(ModalComponent, initialState);

  }


}
