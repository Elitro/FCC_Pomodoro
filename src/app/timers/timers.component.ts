import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit, OnChanges {

  @Input() text: string;

  @Input() timer: number;

  @Output() timerChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() initiateCD: boolean;

  @Output() timerFinish: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.timerChange.emit(this.timer);
    if (this.initiateCD) {
      this.countdown();
    }

  }

  reset(){

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
      if (this.timer > 0 && this.initiateCD) {
        this.timer--;
      } else if (this.timer === 0) {
        this.timerFinish.emit(true);
        clearInterval(event);
      }
       else {
        clearInterval(event);
      }
    }, 1000);
  }

}
