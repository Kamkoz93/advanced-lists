import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicApiModel } from '../../models/public-api.model';
import { PublicApiService } from '../../services/public-api.service';

@Component({
  selector: 'app-public-api',
  templateUrl: './public-api.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicApiComponent {
  readonly apiList$: Observable<PublicApiModel[]> = this._publicApiService.getAll();

  constructor(private _publicApiService: PublicApiService) {
  }

  deleteApi(Api: string): void {
    this._publicApiService.delete(Api).subscribe();
  }
}
