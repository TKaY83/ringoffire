import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allProfilePictures = ['bear.svg', 'hund.svg', 'zebra.svg', 'goat.svg', 'pinguin.svg', 'kuh.svg', 'affe.svg', 'hamter.svg', 'teddy.svg', 'koala.svg', 'ele.svg'];
  // 'lady.png', 'user.png', Anonym User pictures
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  ngOnInit(): void {
  }

}
