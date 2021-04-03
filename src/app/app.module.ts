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
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { UpdateAndDeleteComponent } from './components/update-and-delete/update-and-delete.component';
import { BrandOperationComponent } from './components/brand-operation/brand-operation.component';
import { ColorOperationComponent } from './components/color-operation/color-operation.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SetingsComponent } from './components/setings/setings.component';


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
    AddMenuComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    UpdateAndDeleteComponent,
    BrandOperationComponent,
    ColorOperationComponent,
    CarOperationComponent,
    CarUpdateComponent,
    ProfileComponent,
    SetingsComponent
   
 
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
