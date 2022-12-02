import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { ProductComponent } from './components/product/product.component';
import { PublicApiComponent } from './components/public-api/public-api.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserDetailsServiceModule } from './services/user-details.service-module';
import { BeerListComponentModule } from './components/beer-list/beer-list.component-module';
import { BeersServiceModule } from './services/beers.service-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { PublicApiComponentModule } from './components/public-api/public-api.component-module';
import { PublicApiServiceModule } from './services/public-api.service-module';
import { UsersComponentModule } from './components/users/users.component-module';
import { UsersServiceModule } from './services/users.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'beers', component: BeerListComponent }, { path: 'products', component: ProductComponent }, { path: 'apis', component: PublicApiComponent }, { path: 'refresh-apis', component: PublicApiComponent }, { path: 'users', component: UsersComponent }]), UserDetailsComponentModule, UserDetailsServiceModule, BeerListComponentModule, BeersServiceModule, ProductComponentModule, ProductServiceModule, PublicApiComponentModule, PublicApiServiceModule, UsersComponentModule, UsersServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
