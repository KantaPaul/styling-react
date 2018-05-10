console.log('utility.js is running');

let square = (x) => {
    return x * x;
}

let add = (a, b) => {
    return a + b
}

let sub = (a, b) => a -b;

// export single item
// export { square }
// export multipile item
export { square, add, sub as default }