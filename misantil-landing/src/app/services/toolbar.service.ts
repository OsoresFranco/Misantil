import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private toolbar$ = new BehaviorSubject<boolean>(false);
  currentToolbar$ = this.toolbar$.asObservable();

  setToolbar(status:boolean){
   this.toolbar$.next(status);
  }
}
