import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer: any;

  startTimer(timeInSeconds: number, callback: () => void) {
    this.timer = setInterval(() => {
      timeInSeconds--;
      if (timeInSeconds <= 0) {
        clearInterval(this.timer);
        callback();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }
  

  constructor() { }
}
