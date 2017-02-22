import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {

  @Input() text: string;

  @Input() timer: number;

  @Input() initiateCD: boolean;

  constructor() { }

  ngOnInit() {
    if (this.initiateCD) {
      this.countdown();
    }

  }

  changeTimer(change: boolean): void {
    if (change) {
      this.timer++;
    } else {
      this.timer--;
    }
  }

  countdown() {
    let event = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(event);
      }
    }, 1000);
  }

}
