import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  randomNum: number=0;
  score: number = 0;

  generateRandomNumber() {
    this.randomNum = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5
  }

  checkGuess(userGuess: number): string {
    if (userGuess === this.randomNum) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
  getHint(): string {
    return 'This is a hint.';
  }

  
  updateScore(points: number) {
    this.score += points;
  }

  constructor() { }
}
