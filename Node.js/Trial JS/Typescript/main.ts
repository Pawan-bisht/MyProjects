 export{}
let my:boolean = true;
let x = false;
let f:void = null;
f= undefined;
let n0:number  = null;
let n1: string = "pawan";
n1  = undefined;

//console.log(arr);
let myvar:unknown =100;
let b :number|boolean|string;
b = "Pawan";
b =true;
console.log(b.valueOf);
let y:number = 2;
var fucn = function(num1:number,num2:number):number{
    return num1+num2;
}

interface Person{
    first:string;
    last:string;
}

function fullName(person:Person):string{
    return `${person.first} ${person.last}`;
}

let person ={
    first:"pawan",
    last:"bisht"
};

console.log(fullName(person));

class Employee{
    private name:string;
    constructor(name:string)
    {
        this.name = name;
    }
};
class manager extends Employee{
    constructor(mname:string){
        super(mname);
    }
}
let e1 = new Employee("pawan");
let m1 = new manager("bisht");
console.log(e1);
console.log(m1);