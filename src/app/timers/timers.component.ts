import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  timer: number;

  constructor() { }

  ngOnInit() {

  }

  changeTimer(change: boolean): void {
    if (change) {
      this.timer++;
    } else {
      this.timer--;
    }
  }

}
