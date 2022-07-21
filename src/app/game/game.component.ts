import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimaton = false;
  game: Game;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  newGame(){
    this.game = new Game();
  }

  takeCard(){
    this.pickCardAnimaton = true;
  }

}
