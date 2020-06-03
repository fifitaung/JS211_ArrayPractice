
let cars = ["Ford","Honda", "Mustang", "Chevy"];
console.log("Cars array: ");
console.log(cars.length);

let moreCars = ["Audi", "Toyota", "Infinity", "Honda"];
console.log("moreCars array: ");
console.log(moreCars);

let totalCars = cars.concat(moreCars);
console.log("Total Cars: ");
console.log(totalCars) ;

console.log(totalCars.indexOf("Honda"));

console.log(totalCars.lastIndexOf("Ford"));

let stringOfCars = totalCars.join();
console.log(stringOfCars);

let allTotalCars = stringOfCars.split();
console.log(allTotalCars);

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

let prediCars = carsInReverse.sort();
console.log(prediCars);
// alert(carsInReverse.indexOf("Audi"));

let removedCars = prediCars.slice(1,7);
console.log(removedCars);

 let splicedCars = prediCars.splice(1,2,"Ford", "Honda");
console.log(splicedCars);
console.log(prediCars);

let joinedCars = prediCars.push('Toyoya', 'Audi');
console.log(joinedCars);
console.log(prediCars)

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

console.log(carsInReverse.unshift('BMW'));
console.log(carsInReverse);

let numbers = [23, 45, 0 , 2];
function addTwo(item) {
    console.log(item + 2);
}
numbers.forEach(addTwo)




