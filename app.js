console.log("Hello World 2");

var x=1;
//casting right to left
console.log(typeof(x));

x="Kenneth ";
console.log(typeof(x));
console.log(x);

function make1(x, y){
    console.log(x);
}

make1(x+1);

//not paramter-strict

function make2(x, y, z){
    make1(x+1);
    console.log(typeof(x));
    if (x==null){
        console.log("x is null!");
    }

    if (z==null){
        console.log("z is null!");
    }
    console.log(z);
}

make2("x", null);

//research on null and undefined

function make3(fn1){
console.log(fn1);
fn1();
}

function fn1(){
    console.log("Hello World");
}

make3(fn1);
fn1();

str1 = "Apple";
console.log(str1);
str2 = "Orange"
console.log(str1+str2);
//backwards ` same key as ~
str3 = `I like ${str1}`;
console.log(str3);

var x = true;
var yy = false;

if (x){
    console.log("true");
}

if (!yy){
    console.log("false");
}

x = 100;
function make5()
{
    let x = 10;
    console.log(`inside: ${x}`);
}
make5();
console.log(`outside: ${x}`);

//array, doesnt have to be same data type
var fruit = ['Apple', 'Orange','Durian', 1, false];
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);

//insert from behind
fruit.push('pineapple');
console.log(fruit);
//remove from behind
fruit.pop();
console.log(fruit);
//insert from front
fruit.unshift(1);
console.log(fruit);
//remove from front
fruit.shift();
console.log(fruit);

//alphabetical, uppercase then lowercase, (number, string then boolean)
fruit.sort();
console.log(fruit);

var numbers1=[4,6,7];
numbers1.sort(function(a,b){
    console.log("a: " + a);
    console.log("b: "+ b);
    console.log(b-a);
    return b-a;
})
console.log(numbers1);

//combine 2 arrays
numbers2=[1,2,3];
result=numbers1.concat(numbers2);
console.log(result);
result.sort();
console.log(result);


var person = {
    firstname : 'Kenneth',
    lastname : 'Pang',
    age : 18,
    gender : 'M',
    'my house' : 'amk',
    postalCode : 123456
}

console.log(person);
console.log(person.age);
console.log(person['age']);
console.log(person["my house"]);

//overwrite 18
person.age = 40;
console.log(person);

console.log(person.postalCode);
delete person.postalCode;
console.log(person.postalCode);

//runs once, anonymous
// setTimeout(()=>{
//     console.log(1+1);
// }, 5000)

// another way
// setTimeout(function(){
//     console.log(1+1);
// }, 5000)

// another way
function xyz(){
    console.log("timeout"+(1+1));
}
setTimeout(xyz, 5000);

// setInterval(()=>{
//     console.log(5+5);
// }, 5000)

function throwError(){
    throw new Error("This is an error")
}

// try{
//     throwError();
// }catch{
//     console.log(e);
// }finally{
//     console.log("finally");
// }

var x5 =4;

switch(x5){
    case 1: console.log(1);
    break;
    case 2: console.log(2);
    break;
    default:
    console.log("default switch");
}

var yy = 5;
while(yy>2){
    yy--;
    console.log(yy);
}

var t = [1,3,4,5,6,8];
t.forEach((result, index)=>{
    console.log("result" +result);
    console.log("index" +index);
})



for(var i=0; i<t.length; i++){
    console.log(t[i]);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
//index, deletecount, value
//remove 
months.splice(3,2,'June','July');
console.log(months);

//(x,y) keep from xth position, keep total y # of attributes)
copyMonths = months.splice(1,3);
console.log(copyMonths);

function Person2(firstname, lastname, age, gender){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
}

var p2 = new Person2('Kenneth', 'Phang', 42, 'M');
console.log(p2.age);