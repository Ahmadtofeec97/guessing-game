import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifficultySelectorComponent } from './difficulty-selector/difficulty-selector.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/difficulty-selector', pathMatch: 'full' },
  { path: 'difficulty-selector', component: DifficultySelectorComponent },
  { path: 'game/:difficulty', component: GameComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
