import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ModalComponent } from './../components/modal/modal.component';

registerLocaleData(localePt, 'pt');
import { ReactiveFormsModule } from '@angular/forms';
import { CURRENCY_MASK_CONFIG, CurrencyMaskModule } from 'ng2-currency-mask';

import { CustomCurrencyMaskConfig } from '../util/util';
import { SimulatorRoutingModule } from './simulator-routing.module';
import { SimulatorComponent } from './simulator.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    SimulatorComponent,
    ModalComponent
  ],
  imports: [
  CommonModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SimulatorRoutingModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
],
})
export class SimulatorModule { }
