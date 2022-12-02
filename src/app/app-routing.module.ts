import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { ProductComponent } from './components/product/product.component';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserDetailsServiceModule } from './services/user-details.service-module';
import { BeerListComponentModule } from './components/beer-list/beer-list.component-module';
import { BeersServiceModule } from './services/beers.service-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'beers', component: BeerListComponent }, { path: 'products', component: ProductComponent }]), UserDetailsComponentModule, UserDetailsServiceModule, BeerListComponentModule, BeersServiceModule, ProductComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
