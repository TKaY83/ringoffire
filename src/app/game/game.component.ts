import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimaton = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  takeCard(){
    this.pickCardAnimaton = true;
  }

}
