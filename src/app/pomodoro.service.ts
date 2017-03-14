import { Injectable } from '@angular/core';

@Injectable()
export class PomodoroService {

  private _currentTimer: number;

  private _initiateCD: boolean = false;

  private _clockOrBreak: boolean = false;

  constructor() { }

  setCurrentTimer(value: number): void {
    this._currentTimer = value * 60;
  }

  getCurrentTimer(): number {
    return this._currentTimer;
  }

  setInitiateCD(value: boolean) {
    this._initiateCD = value;
  }

  getInitiateCD(): boolean {
    return this._initiateCD;
  }

  countdown(timer: number, breakTimer: number) {
    this._initiateCD = !this._initiateCD;
    let event = setInterval(() => {
      if (this._currentTimer > 0 && this._initiateCD) {
        this._currentTimer--;
      } else if (this._currentTimer === 0) {
        if (!this._clockOrBreak) {
          this._currentTimer = breakTimer;
        } else {
          this._currentTimer = timer;
        }
        this._clockOrBreak = !this._clockOrBreak;
      } else {
        clearInterval(event);
      }
    }, 1000);
  }

}
