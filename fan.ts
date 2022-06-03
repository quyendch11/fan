export class Fan {
     speed: number;
     status: boolean;
    radius: number;
    color: string;
    constructor(speed: number, 
        status: boolean,
         radius: number,
         color: string){
             this.speed = speed;
             this.status = status;
             this.radius = radius;
             this.color = color;
         }
         setSpeed (speed){
            this.speed = speed;
         }
         getSpeed(){
             return this.speed;
         }
         setStatus(status){
            this.status = status;
         }
         getStatus(){
             return this.status;
         }
         setRadius (radius){
             this.radius = radius;
         }
         getRadius(){
             return this.radius;
         }
         setColor (color){
             this.color = color;
         }
         getColor(){
             return this.color;
         }
}