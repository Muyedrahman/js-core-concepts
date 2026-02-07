let a = false;
let b = 0;
let c = "";
let d = null;
let e = undefined;
let f = NaN;

if (!a) console.log("a is falsy"); // a is falsy
if (!b) console.log("b is falsy"); // b is falsy
if (!c) console.log("c is falsy"); // c is falsy
if (!d) console.log("d is falsy"); // d is falsy
if (!e) console.log("e is falsy"); // e is falsy
if (!f) console.log("f is falsy"); // f is falsy


function checkValue(value) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}

checkValue(0);      // 0 is falsy
checkValue("Hi");   // Hi is truthy
checkValue([]);     // [] is truthy
checkValue("");     //  is falsy
