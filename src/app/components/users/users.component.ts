import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  readonly usersList$: Observable<UserModel[]> = this._usersService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<UserModel[]> = this.refresh$.pipe(
    switchMap(data => this._usersService.getAll()));

  constructor(private _usersService: UsersService) {
  }

  deleteUser(id: string): void {
    this._usersService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
