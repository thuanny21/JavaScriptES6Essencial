function getName() {
    return "Thuanny Marcilia";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);