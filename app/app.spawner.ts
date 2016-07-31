import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Spawn, Direction } from './models/spawn';
import { Element } from './models/element';

var w = window.innerWidth;
var h = window.innerHeight;

window.addEventListener('resize', () => {
  w = window.innerWidth;
  h = window.innerHeight;
});

const rand = (start: number, stop: number) => {
  return Math.floor(Math.random() * stop) + start;
}

const convertRange = (value, r1, r2) => { 
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

@Component({
  selector: 'spawner',
  template: `
  <div class="container" *ngFor="let el of elements">
    <div class="{{el.classname}}" [ngStyle]="{'left':el.x, 'top':el.y, 'zoom': el.zoom, '-moz-transform': el.scale, 'z-index': el.zindex}"></div>
  </div>
  `,
  directives: [ NgStyle ]
})
export class SpawnComponent implements OnInit { 
  @Input()
  spawn: Spawn;
  elements: Element[] = [];

  ngOnInit(){
     setInterval(this.generate.bind(this), this.spawn.ticker * 1000);
     window.requestAnimationFrame(this.frame.bind(this));
   }

   private frame(){
     var eliminations: number[] = [];
     this.elements.forEach((el, i) => {
       el.x += (1 * el.velocity);
       if(el.x > w){
         eliminations.push(i);
       }
     });

     eliminations.forEach(i => this.elements.splice(i, 1));
     window.requestAnimationFrame(this.frame.bind(this));
   }

   private generate(){
     if(this.spawn.rarity < Math.random()){
         var r = Math.random();
         var z = convertRange(2 - r, [1, 2], [0.9, 2]);
         var v = convertRange(r + 1, [1, 2], [1, 3]);
         var initpoint = 0;
         if(this.spawn.direction === Direction.Lower){
           initpoint = h/2 - 50;
           v = convertRange(2 - r, [1, 2], [0.4, 6]);
         }
         if (z < 1.4 && z > 1.05){
           z = 1.4;
         }

        this.elements.push({
          classname: `${this.spawn.classname}${rand(1, this.spawn.totalclasses)}`,
          y: initpoint,
          x: -100,
          zoom: z,
          velocity: v, 
          zindex: Math.floor(z*10000)
        });
      }
   }
}