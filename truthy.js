let a = false;
let b = 0;
let c = "";
let d = null;
let e = undefined;
let f = NaN;

if (!a) console.log("a is falsy"); // a is falsy
if (!b) console.log("b is falsy"); // b is falsy



function checkValue(value) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}

