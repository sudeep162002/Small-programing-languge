var f = function () {
    return 1
};
var g = function (a, b) {
    return add(multiply(2, a), b)
};
var h = function (x, y) {
    print("x =", x);
    print("y =", y);
    return g(x, y)
};
var result = h(3, 4);
print("result =", result)
print("f =", f())
print("g(f f) =", g(f(), f()))
function print(...args) {
    console.log(...args);
}

function add(x, y) {
    return x + y;
}

function concat(s1, s2) {
    return s1 + s2;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function modulus(x, y) {
    return x % y;
}

function sqrt(x) {
    return Math.sqrt(x);
}

function pow(x, y) {
    return Math.pow(x, y);
}

function floor(x) {
    return Math.floor(x);
}

function eq(x, y) {
    return x === y;
}

function $if(cond, consequent, alternate) {
    if (cond) {
        return consequent();
    } else {
        return alternate();
    }
}

function or(cond1, cond2) {
    return cond1 || cond2;
}

function at(arrayLike, index) {
    return arrayLike[index];
}

function repeat(string, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function each(arr, fun) {
    arr.forEach(fun);
}