import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable, Subject, BehaviorSubject, takeUntil} from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent implements OnInit, OnDestroy {
  beers!: BeerModel[];
  page$ = new BehaviorSubject<number>(1);
  beers$!: Observable<BeerModel[]>;
  destroyed$ = new Subject<void>();

  constructor(private _beersService: BeersService) { }

  ngOnInit() {
    this.beers$ = this.page$.pipe(
        switchMap((page: number) => this._beersService.getPaginatedData(page))
      );
    this.beers$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((beers: BeerModel[]) => this.beers = beers);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  onPageChange(page: number) {
    this.page$.next(page);
  }
}
