import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {

  @Input() text: string;

  @Input() timer: number;

  @Output() timerChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  emitValue(value: number) {
    this.timerChange.emit(value);
  }

  changeTimer(change: boolean): void {
    if (change) {
      this.timer++;
      this.timerChange.emit(this.timer);
    } else {
      this.timer--;
      this.timerChange.emit(this.timer);
    }
  }

}
