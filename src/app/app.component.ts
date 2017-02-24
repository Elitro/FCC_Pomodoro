import { TimerModel } from './models/timer.model';
import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {


  timers: Array<TimerModel> =  new Array<TimerModel>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.timers.push(new TimerModel(false, 5, 'Timer'));
    this.timers.push(new TimerModel(false, 5, 'Break'));
  }

  ngOnChanges() {
    this.changeDetectorRef.detectChanges();
  }

  startOtherTimer(value: boolean, i: number) {
    console.log('i:', i);
    
    //First we check if there is another timer ahead, and then we start it
    if (this.timers.length > i+1) {
      this.timers[i+1].initCD = !this.timers[i+1].initCD;
    } 
    // If not, we reset the previous timers
    else {
      for (let x = 0; x < this.timers.length; x++) {
        if (this.timers[x].timer === 0) {
          this.timers[x].timer = this.timers[x].ghostTimer;
        }
      }
      // Start the countdown in the first timer
      this.timers[0].initCD = true;
    }
  }


  /*
  * Iterate through all the timers and stop the first with the timer > 0 
  */
  pauseResume() {

    for (let x = 0; x < this.timers.length; x++) {
      if (this.timers[x].timer > 0) {
        console.log(this.timers);
        this.timers[x].initCD = !this.timers[x].initCD;
        return;
        // console.log(this.timers[x].initCD);
      }
    }
    // if (this.timers['timerObject'].timer)
  }
}
