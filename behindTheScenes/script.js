'use strict';
/*
function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1980 && birthYear <= 1990) {
      var pepsiGen = true;

      const firstName = 'Anna';
      // reassignging outer scope's variable
      output = 'NEW OUTPUT!!';

      const str = `Oh, and you're a pepsi gen, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(pepsiGen);
    //console.log(add(2, 2));

    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Mikhail';
calcAge(1985);

//console.log(age);
//printAge();


//console.log(me);
//console.log(job);
//console.log(year);

const me = 'Karl';
let job = 'teacher';
const year = 2021;

console.log(addDecl(2, 2));
//console.log(addExpr(2, 2));
console.log(addArrow);
//console.log(addArrow(2, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//console.log(this);

const calcAge = function (birthYear) {
  console.log(new Date().getFullYear() - birthYear);
  //console.log(this);
};

calcAge(1985);

const calcAgeArrow = birthYear => {
  console.log(new Date().getFullYear() - birthYear);
  //console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

const mikhail = { year: 1985 };

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

mikhail.calcAge = matilda.calcAge;
mikhail.calcAge();

const f = jonas.calcAge;
f();

var firstName = 'Matilda';

const jonas = {
  firstName: 'Mike',
  year: 1989,
  calcAge: function () {
    //console.log(this);
    console.log(new Date().getFullYear() - this.year);

    // Solution 1
    // const self = this;
    // const isPepsiGen = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isPepsiGen = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isPepsiGen();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
};

jonas.greet();
console.log(this.firstName);
//console.log(jonas.firstName);
jonas.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 2, 3, 3);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 2, 3); */

let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.name = 'Jaja';
friend.age = 66;

console.log(friend);
console.log(me);
