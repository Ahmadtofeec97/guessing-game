import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {


  private leaderboard: any[] = [];

  addScore(username: string, attempts: number) {
    const score = 100 / attempts;
    this.leaderboard.push({ username, score });
    this.leaderboard.sort((a, b) => b.score - a.score); 
  }
  getLeaderboard(): any[] {
    return this.leaderboard;
  }
  

  constructor() {
 
  }
  
}
