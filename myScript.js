"use strict";


//tablice

let myArray = [3, 6, 9, 12];

let result = 0;

for (let i=0; i < myArray.length; i++) {
    console.log(i + ". element tablicy: " + myArray[i]);
    result += myArray[i];
}

console.log("Suma wszystkich elementów tablicy myArray to: "+ result);

myArray.push(15);

result = 0;

let i=0;
for (let element of myArray) {
    console.log(i + ". element tablicy: " + element);
    i++;
    result += element;
}

console.log("Suma wszystkich elementów tablicy myArray to: "+ result);


// obiekty

let myCar = {brand: "BMW", model: "m140i", stockPower: 340};

console.log(myCar.brand, myCar["brand"]);

myCar.prodYear = 2017;

for (let myProperty in myCar) {
    console.log(myProperty, myCar[myProperty]);
}


// tablica obiektów

let myCars = [
    {brand: "BMW", model: "m140i", year: 2017, power: 340},
    {brand: "Renault", model: "Megane", year: 2017, power: 205},
    {brand: "Saab", model: "9-3", year: 2011, power: 230},
    {brand: "Audi", model: "A6", year: 2008, power: 300}
]

console.log(myCars);

for (let car of myCars) {

    for (let property in car) {
        console.log(car[property]);
    }
}


let powerSum = 0;               // tworzę zmienną w której zapiszę sumaryczną moc wszystkich aut

for (let car of myCars) {       // tworzę pętlę, która przejdzie przez wszystkie elementy tablicy obiektów i zapisze je do obiektu "car"
    powerSum += car.power;      // do zmiennej dodaję moc każdego auta
}
console.log("Sumaryczna moc wszytkich samochodów, to: " + powerSum + " KM");          // wyświetlam zmienną, która przechowuje sumaryczną moc