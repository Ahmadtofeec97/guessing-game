import { Component, OnInit} from '@angular/core';
import { LeaderboardService } from '../services/leaderboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit{
  users: any[] = [];
  leaderboard: any[] = [];

  constructor(private leaderboardService: LeaderboardService, private router: Router) { }
  
  goToDifficultySelector() {
    this.router.navigate(['/difficulty-selector']);
  }
  ngOnInit() {
    this.users = this.leaderboardService.getLeaderboard();
    console.log(this.users) // Assign the data to users
  }
  

}
