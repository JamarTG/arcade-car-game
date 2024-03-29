﻿import canvas from "./Canvas.js";
export default class ObstacleCar {
    constructor() {
        this.getXCoordinate = () => {
            return this.xCoordinate;
        };
        this.getYCoordinate = () => {
            return this.yCoordinate;
        };
        this.getSpeed = () => {
            return this.speed;
        };
        this.increaseSpeed = () => {
            this.speed += 0.005;
        };
        this.generateRandomCarPosition = () => {
            this.yCoordinate = -400;
            this.xCoordinate = Math.ceil(Math.random() * 420);
        };
        this.move = () => {
            this.yCoordinate += this.speed;
        };
        this.xCoordinate = Math.ceil(Math.random() * canvas.width) - 50;
        this.yCoordinate = -400;
        this.speed = 5;
    }
}
ObstacleCar.src = "";
