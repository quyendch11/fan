import { Fan } from "./fan";
const SLOW = 1;
const MEDIUM = 2;
const FAST = 3;
let fan1 = new Fan(FAST,true,10,'yellow');
fan1.getColor;
fan1.getRadius;
fan1.getSpeed;
fan1.getStatus;
console.log(fan1);
let fan2 = new Fan(1,true,10,'yellow');
fan2.setColor('blue');
fan2.getColor();
fan2.setRadius(5);
fan2.getRadius();
fan2.setSpeed(MEDIUM);
fan2.getSpeed();
fan2.setStatus(false);
fan2.getStatus();
console.log(fan2);