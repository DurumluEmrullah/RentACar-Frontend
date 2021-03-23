import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TotalPricePipe } from './pipes/total-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    CarDetailComponent,
    FilterPipePipe,
    FilterComponent,
    PaymentComponent,
    TotalPricePipe,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
