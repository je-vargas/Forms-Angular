import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings>{
    return of(userSettings);
  }


}
