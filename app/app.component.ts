import { Component } from '@angular/core';
import { SpawnComponent } from './app.spawner';
import { Spawn, Direction } from './models/spawn';

const clouds: Spawn = {
	classname: 'cloud',
	rarity: 0.5,
	direction: Direction.Upper,
	totalclasses: 4,
	ticker: 1.5
};

const islands: Spawn = {
	classname: 'island',
	rarity: 0.3,
	direction: Direction.Lower,
	totalclasses: 5,
	ticker: 4
};

const seagull: Spawn = {
	classname: 'seagull',
	rarity: 0.4,
	direction: Direction.Upper,
	totalclasses: 1,
	ticker: 2
};

const fish: Spawn = {
	classname: 'fish',
	rarity: 0.2,
	direction: Direction.Lower,
	totalclasses: 1,
	ticker: 3
};

var date = new Date().getHours();

@Component({
  selector: 'my-app',
  template: `
  <div id="sun"></div>
  <div id="sky" *ngIf="isNight" style="background: linear-gradient(#B48170 30%, #FD9F23)"></div>
  <div id="sky" *ngIf="!isNight"></div>
  <div id="sea">
  	<div class="ripple duration-1"></div>
  	<div class="ripple duration-2"></div>
  	<div class="ripple duration-3"></div>
  	<div class="ripple duration-4"></div>
  	<div class="ripple duration-5"></div>
  	<div class="ripple duration-6"></div>
  	<div class="ripple duration-7"></div>
  </div>
  <div id="boat">
  	<div id="person"><div id="wave"></div></div>
  </div>
  <div *ngIf="isNight" id="overlay"></div>
  <spawner [spawn]="clouds"></spawner>
  <spawner [spawn]="islands"></spawner>
  <spawner [spawn]="seagull"></spawner>
  <spawner [spawn]="fish"></spawner>
  `,
  directives: [SpawnComponent]
})
export class AppComponent {
	clouds = clouds;
	islands = islands;
	seagull = seagull;
	fish = fish;
	isNight = date > 19 || date < 4;
}