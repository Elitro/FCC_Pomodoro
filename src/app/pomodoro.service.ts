import { Injectable } from '@angular/core';

@Injectable()
export class PomodoroService {

  private _currentTimer: number;

  private _initiateCD: boolean = false;;

  constructor() { }

  setCurrentTimer(value: number): void {
    this._currentTimer = value;
  }

  getCurrentTimer(): number {
    return this._currentTimer;
  }

  countdown() {
    this._initiateCD = !this._initiateCD;
    let event = setInterval(() => {
      if (this._currentTimer > 0 && this._initiateCD) {
        this._currentTimer--;
      } else if (this._currentTimer === 0) {
        clearInterval(event);
      } else {
        clearInterval(event);
      }
    }, 1000);
  }

}
