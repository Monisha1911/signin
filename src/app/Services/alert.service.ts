import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  success(arg0: string, arg1: boolean) {
    throw new Error('Method not implemented.');
  }
  error(error: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
