"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var my = true;
var x = false;
var f = null;
f = undefined;
var n0 = null;
var n1 = "pawan";
n1 = undefined;
//console.log(arr);
var myvar = 100;
var b;
b = "Pawan";
b = true;
console.log(b.valueOf);
var y = 2;
var fucn = function (num1, num2) {
    return num1 + num2;
};
function fullName(person) {
    return person.first + " " + person.last;
}
var person = {
    first: "pawan",
    last: "bisht"
};
console.log(fullName(person));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
;
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(mname) {
        return _super.call(this, mname) || this;
    }
    return manager;
}(Employee));
var e1 = new Employee("pawan");
var m1 = new manager("bisht");
console.log(e1);
console.log(m1);
