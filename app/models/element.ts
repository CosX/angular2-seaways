export class Element {
	classname: string;
	zoom: number;
	zindex: number; 
	velocity: number;
	x: number;
	y: number;
	get scale(): string{
	  return `scale(${this.zoom},${this.zoom})`;
	}
}