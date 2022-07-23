import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player7Component } from './player7.component';

describe('Player7Component', () => {
  let component: Player7Component;
  let fixture: ComponentFixture<Player7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
