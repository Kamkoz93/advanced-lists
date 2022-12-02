import { NgModule } from '@angular/core';
import { PublicApiComponent } from './public-api.component';
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        MatListModule,
        NgForOf,
        AsyncPipe,
        MatCardModule,
        MatButtonModule
    ],
  declarations: [PublicApiComponent],
  providers: [],
  exports: [PublicApiComponent]
})
export class PublicApiComponentModule {
}
