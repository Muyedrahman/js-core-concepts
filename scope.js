const name = 'Tom Hamks'

if(true){
    const data = 58;
    console.log('inside the if block', data, name);
    doMath(44, 999)
}
// console.log(data)

// function scope or local scope
function doMath (a, b){
    console.log(a,b)
    const sum = a + b;
    const total = sum + 10;
    function doubleIt (x) {
        return x * 2;
    }
    console.log('calling double It ', doubleIt(450))
}