import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BeerListComponent } from './beer-list.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [
    MatTableModule,
    NgIf,
    AsyncPipe,
    MatPaginatorModule,
    CommonModule
  ],
  declarations: [BeerListComponent],
  providers: [],
  exports: [BeerListComponent]
})
export class BeerListComponentModule {
}
