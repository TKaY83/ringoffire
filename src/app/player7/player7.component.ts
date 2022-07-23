import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player7',
  templateUrl: './player7.component.html',
  styleUrls: ['./player7.component.scss']
})
export class Player7Component implements OnInit {

  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }

}
