import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandOperationComponent } from './components/brand-operation/brand-operation.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorOperationComponent } from './components/color-operation/color-operation.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RentalComponent } from './components/rental/rental.component';
import { SetingsComponent } from './components/setings/setings.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'rentals', component: RentalComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'cars/list',component: CarOperationComponent },
  { path: 'cars/add',component: CarAddComponent },
  { path: 'cars/update/:carId',component: CarUpdateComponent },
  { path: 'cars/filter/:colorId/:brandId', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/:carId', component: CarDetailComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'colors/add',component: ColorAddComponent },
  { path: 'brands/add',component: BrandAddComponent },
  { path: 'brands',component: BrandOperationComponent },
  { path: 'colors',component: ColorOperationComponent },
  { path: 'profile',component: ProfileComponent },
  { path: 'setings',component: SetingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
