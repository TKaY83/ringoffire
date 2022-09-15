import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDesktopComponent } from './player-desktop.component';

describe('PlayerDesktopComponent', () => {
  let component: PlayerDesktopComponent;
  let fixture: ComponentFixture<PlayerDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
