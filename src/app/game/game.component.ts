import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { TimerService } from '../services/timer.service';
import { LeaderboardService } from '../services/leaderboard.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  difficulty: any;
  gameStarted: boolean = false;
  maxAttempts: number = 3;
  attempts: number = 0;
  timeLeft: any;
  userGuess: any;
  hintAvailable: boolean = true;
  hint: any;
  gameWon: boolean = false;
  gameLost: boolean = false;
  private timerInterval: any;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private timerService: TimerService,
    private leaderboardService: LeaderboardService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.difficulty = params['difficulty'];
      if (this.difficulty) {
        this.startGame();
      }
    });
  }

  
  startGame() {
    this.gameStarted = true;
    this.attempts = 0;
  
    if (this.difficulty === 'easy') {
      this.timeLeft = 90;
    } else if (this.difficulty === 'medium') {
      this.timeLeft = 60;
    } else if (this.difficulty === 'hard') {
      this.timeLeft = 30;
    }
  
    this.gameService.generateRandomNumber();
  
    // Start the timer
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.gameLost = true;
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
  submitGuess() {
    this.attempts++;
    const result = this.gameService.checkGuess(this.userGuess);
  
    if (result === 'correct') {
      let scoreMultiplier = 0;
  
      if (this.attempts === 1) {
        scoreMultiplier = 3;
      } else if (this.attempts === 2) {
        scoreMultiplier = 2;
      } else if (this.attempts === 3) {
        scoreMultiplier = 1;
      }
  

      this.leaderboardService.addScore('tofeeq', this.attempts * 10);

  
      this.gameWon = true;
      clearInterval(this.timerInterval);
      this.hintAvailable = false;
    }
  
    if (result === 'incorrect' && this.attempts >= this.maxAttempts) {
      this.gameLost = true;
      clearInterval(this.timerInterval);
    }
  }
  
  
  getHint() {
    this.hint = this.gameService.getHint();
    this.hintAvailable = false;
  }

}
