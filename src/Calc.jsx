
function sum(x,y){
    let add = x + y;
    return add;
}

function diff(x,y){
    let diff = x - y;
    return diff;
}

function prod(x,y){
    let multiply = x * y;
    return multiply;
}

function div(x,y){
    let division = x / y;
    return division.toFixed(2);
}

export {sum, diff, prod, div}