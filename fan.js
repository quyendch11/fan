"use strict";
exports.__esModule = true;
exports.Fan = void 0;
var Fan = /** @class */ (function () {
    function Fan(speed, status, radius, color) {
        this.speed = speed;
        this.status = status;
        this.radius = radius;
        this.color = color;
    }
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.setStatus = function (status) {
        this.status = status;
    };
    Fan.prototype.getStatus = function () {
        return this.status;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    return Fan;
}());
exports.Fan = Fan;
