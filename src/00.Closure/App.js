function add(init) {
    let _val = init || 0;
    return function() {
        _val += 1
        return _val
    }
}

const adder1 = add(1000)
const adder2 = add()

console.log(adder1())
console.log(adder1())
console.log(adder1())
console.log(adder1())
console.log(adder1())

console.log(adder2())
console.log(adder2())
console.log(adder2())
console.log(adder2())
console.log(adder2())