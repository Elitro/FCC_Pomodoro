import { TimerModel } from './models/timer.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timerObject = new TimerModel(false, 25);
  breakObject = new TimerModel(false, 5);

  constructor() { }

  startOtherTimer(value: boolean) {
    if (value) {
      this.timerObject.initCD = !this.timerObject.initCD;
      this.breakObject.initCD = !this.breakObject.initCD;
    }
  }
}
