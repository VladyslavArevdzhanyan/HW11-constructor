const SIZE_SMALL = {name: 'SIZE_SMALL', price: 50, calories: 20};
const SIZE_MIDDLE = {name: 'SIZE_MIDDLE', price: 75, calories: 30};
const SIZE_LARGE = {name: 'SIZE_LARGE', price: 100, calories: 40};

const STUFF_CHEESE = {name: 'STUFF_CHEESE', price: 10, calories: 20};
const STUFF_SALAD = {name: 'STUFF_SALAD', price: 20, calories: 5};
const STUFF_POTATO = {name: 'STUFF_POTATO', price: 15, calories: 10};
const STUFF_FLAVOR = {name: 'SAUCE_SAUCE', price: 15, calories: 0};
const STUFF_MAYO = {name: 'SAUCE_MAYO', price: 20, calories: 5};

function Hamburger (size, stuffings = []) {
    this.size = size;
    this.stuffing = [...stuffings];
    this.addModifier = function (stuffings) {
        this.stuffing.push(stuffings);
    }
    this.getPrice = function () {
        let price = this.size.price;
        for (let i = 0; i < this.stuffing.length; i++) {
            price += this.stuffing[i].price;
        }
        return price;
    }

    this.getCallories = function() {
        let callories = this.size.calories;
        for (let i = 0; i < this.stuffing.length; i++) {
            callories += this.stuffing[i].calories;
        }
        return callories;
    }
}

let hamburger = new Hamburger(SIZE_SMALL);
console.log(hamburger.getPrice());
console.log(hamburger.getCallories());

//Добавим сыр
hamburger.addModifier(STUFF_CHEESE);
console.log(hamburger.getPrice());
console.log(hamburger.getCallories());

//Добавим еще сыр
hamburger.addModifier(STUFF_CHEESE);
console.log(hamburger.getPrice());
console.log(hamburger.getCallories());

//Добавим еще сыр + приправа + майонез
hamburger.addModifier(STUFF_CHEESE);
hamburger.addModifier(STUFF_FLAVOR);
hamburger.addModifier(STUFF_MAYO);
console.log(hamburger.getPrice());
console.log(hamburger.getCallories());


