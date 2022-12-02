import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    MatButtonModule
  ],
  declarations: [UsersComponent],
  providers: [],
  exports: [UsersComponent]
})
export class UsersComponentModule {
}
