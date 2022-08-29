import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { combineLatest, shareReplay, Subject, switchMap, tap, map, Observable } from 'rxjs';
import { SimulatorService } from './simulator.service';
import { Lending } from './lending';
import { ModalComponent } from '../components/modal/modal.component';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { SimulatorRes } from './response';
@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  readonly save$ = new Subject();
  formSimulator!: UntypedFormGroup;
  bsModalRef?: BsModalRef;
  private response!: SimulatorRes;

  response$: Observable<any> = combineLatest(
   this.save$
  ).pipe(
    map((form) =>form
    ),
    switchMap(([formSimulator]) => this.simulatorService.calcValue(formSimulator)),
    tap(val => {
      this.response = val
    }),
    shareReplay(1)
  )

  constructor(
    readonly fb: UntypedFormBuilder,
    private simulatorService: SimulatorService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm():void {
    this.formSimulator = this.fb.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      installments: ['', Validators.required]
    })
  }

  open(): void {
    const initialState: ModalOptions = {
      initialState: {
        response: this.response,
        title: 'Confirma Emprestimo'
      },

    };

    this.bsModalRef = this.modalService.show(
      ModalComponent,
      Object.assign(initialState, { class: 'gray modal-lg' })
    );

  }


}
