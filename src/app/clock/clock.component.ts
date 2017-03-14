import { PomodoroService } from './../pomodoro.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  private minutes: number;
  private seconds: string;
  private status: string;

  @Output() clockAction: EventEmitter<string> = new EventEmitter<string>();
  @Input('timer') set timer(totalSeconds: number) {
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = (totalSeconds % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });

  }

  constructor(private service: PomodoroService) { }

  ngOnInit() {
    this.getTimerStatus();
  }

  initiateCD() {
    this.clockAction.emit('pause/resume');
    this.getTimerStatus();
  }

  reset() {
    this.clockAction.emit('reset');
  }

  getTimerStatus(): void {
    this.status = this.service.getInitiateCD() ? 'Stop' : 'Start';
  }

}
