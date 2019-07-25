

/*
for dynamic type in typescript we use any as type-annotation 
 */
let some : any = ['pawan','bisht',3345,true];
// See no error
/**
 * for dynamic array we use array as type-annotation
 */
let arr:string[] =['pawan','bisht','is','a','good boy'];
let num:number[] = [2,3,4,5,6];
let boolArray:boolean[] = [true,false,true,true,false];

/**
 * the following method is called tupple in tupple [data:annotaion] 
 * in this the order of values are correponding to tupple otherwise it shoes an error
 */
let tuppletest:[string,boolean,number] = ["this is the test string of tupple",true,34];

/**
 * we can enum also in this ts 
 */
enum doorstep{
    closed=10,
    open,
    break
};

console.log(doorstep[10]);
console.log(doorstep.closed);
console.log(doorstep.break);

/**
 * Type aliases 
 */

 type StirngOrNumber = number|string;
 let str : StirngOrNumber = "pawan";
 str = 23453;

/**
 * Union Type : we can make a variable to take multiple type of values;
 */

 let uniontype : string|number|boolean;
 uniontype = 'pawan bisht';
 uniontype = 234;
 uniontype = true;
 console.log(uniontype);


 /**
  * functions
  */

function addNumber(arg1:string,arg2 :string):string
{
    return arg1 + arg2;
}

console.log(addNumber('pawan ','bisht'));