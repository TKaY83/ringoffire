import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-desktop',
  templateUrl: './player-desktop.component.html',
  styleUrls: ['./player-desktop.component.scss']
})
export class PlayerDesktopComponent implements OnInit {
  @Input() image;
  @Input() name;
  @Input() playerActive:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
