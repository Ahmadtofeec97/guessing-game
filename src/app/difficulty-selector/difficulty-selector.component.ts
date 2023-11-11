import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss']
})
export class DifficultySelectorComponent implements OnInit {
  constructor(private router: Router) { }

  startGame(difficulty: string) {
    this.router.navigate(['/game', difficulty]);
  }
  ngOnInit(): void {
    
  }
 

}
