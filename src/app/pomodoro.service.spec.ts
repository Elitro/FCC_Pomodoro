/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PomodoroService } from './pomodoro.service';

describe('Service: Pomodoro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PomodoroService]
    });
  });

  it('should ...', inject([PomodoroService], (service: PomodoroService) => {
    expect(service).toBeTruthy();
  }));
});
