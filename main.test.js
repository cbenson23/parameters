/*

Your code goes below.

*/

let x=3;
let y=10;
let z=5;
let name="Chris";
let greeting="HEY";


function multiply(num) {
  x=x*num;}

function modYBy(num){
  y=y%num}

function opposite(num){
  z=num*(-1)
}

function makeFullName(str){
name += ' ' + str;
}

function yellAt(str){
greeting += ', ' + str + '!'
}
/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof x === 'undefined') {
  x = undefined;
}

if (typeof y === 'undefined') {
  y = undefined;
}

if (typeof z === 'undefined') {
  z = undefined;
}

if (typeof name === 'undefined') {
  name = undefined;
}

if (typeof greeting === 'undefined') {
  greeting = undefined;
}


if (typeof multiply === 'undefined') {
  multiply = undefined;
}

if (typeof modYBy === 'undefined') {
  modYBy = undefined;
}

if (typeof opposite === 'undefined') {
  opposite = undefined;
}

if (typeof makeFullName === 'undefined') {
  makeFullName = undefined;
}

if (typeof yellAt === 'undefined') {
  yellAt = undefined;
}

if (typeof fullName === 'undefined') {
  fullName = undefined;
}

if (typeof phoneCall === 'undefined') {
  phoneCall = undefined;
}


describe('multiply', () => {
  it(`multiplies x by the given parameter'`, () => {
    multiply(15);
    multiply(3);
    expect(x).toBe(135)
  })
});

describe('modYBy', () => {
  it(`runs a modulus operation on y`, () => {
    modYBy(4);
    expect(y).toEqual(2);
  })
});

describe('opposite', () => {
  it(`sets z to the opposite of the given parameter`, () => {
    opposite(3);
    expect(z).toBe(-3);
  })
});

describe('makeFullName', () => {
  it(`adds a space and the parameter to name`, () => {
    let oldName = name;
    makeFullName('Jaffe')
    expect(name).toBe(oldName + ' Jaffe');
  })
});

describe('yellAt', () => {
  it(`makes greeting into a string that yells the greeting at someone`, () => {
    yellAt('Colin');
    expect(greeting).toEqual(`HEY, Colin!`);
  })
});
