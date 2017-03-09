import { PomodoroService } from './pomodoro.service';
import { TimerModel } from './models/timer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  timerClock: number = 25;

  breakClock: number = 5;

  currentTimer: number;

  constructor(private service: PomodoroService) { }

  ngOnInit() {
    this.service.setCurrentTimer(this.timerClock);
  }

  executeClockAction(action: string) {
    if (action === 'pause/resume') {
      this.pauseResume();
    } else {
      this.reset();
    }
  }

  pauseResume() {
    this.service.countdown(this.timerClock, this.breakClock);
  }

  reset() {
    this.service.setInitiateCD(false);
    this.service.setCurrentTimer(this.timerClock);
  }


  // /*
  // * Iterate through all the timers and stop the first with the timer > 0 
  // */
  // pauseResume() {

  //   for (let x = 0; x < this.timers.length; x++) {
  //     if (this.timers[x].timer > 0) {
  //       console.log(this.timers);
  //       this.timers[x].initCD = !this.timers[x].initCD;
  //       return;
  //       // console.log(this.timers[x].initCD);
  //     }
  //   }
  //   // if (this.timers['timerObject'].timer)
  // }
}
