/*
1.write a "for" loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it find "chai".
    Store all teas before `"chai"` in a new array named `Selectedteas`
 */

    let teas = ["green tea", "black tea", "chai", "oolong tea"]
    let Selectedteas = []
    for(let i = 0; i < teas.length; i++){
        if(teas[i] === "chai"){
            break;
        }
        Selectedteas.push(teas[i])
    }
    // console.log(Selectedteas);

/*
2.write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips "Paris".
    Store the other cities in a new array named `visitedCities`
*/

    let cities = ["London", "New York", "Paris", "Berlin"]
    let visitedCities = []
    for (let index = 0; index < cities.length; index++) {
        if(cities[index] === "Paris"){
            continue;
        }
        visitedCities.push(cities[index])
    }
    // console.log(visitedCities);

/*
3.Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
    Store the numbers before 4 in array named `smallNumbers`
*/

    let numbers = [1, 2, 3, 4, 5]
    let smallNumbers = []

    // for (let index = 0; index < numbers.length; index++) {
    //         if(numbers[index] === 4){
    //             break;
    //         }
    //     smallNumbers.push(numbers[index])
    // }


    for (let index of numbers) {
        if(index === 4){
            break;
        }
        smallNumbers.push(index)
    }

    
    // console.log(smallNumbers)

/*
4.Use a `for-of` loop to iterate through the array `["Chai", "green tea", "Herbal tea", "black tea"]` and skip "Herbal tea".
    Store the other teas array named `"preferred teas"`.
*/

    let teaType = ["chai", "Green tea", "Herbal tea", "black tea"]
    let preferredTeas = []

    for (const index of teaType) {
        if(index === "Herbal tea"){
            continue;
        }
        preferredTeas.push(index)
    }
    // console.log(preferredTeas);

/*
5.Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store all previos cities population in a new object named "cityPopulations".

    let citiesPopulation = {
    "London": 8900000,
    "New York: 8400000,
    "Paris": 2200000,
    "Berlin": 350000
    };
*/
     let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 350000
    };

    let cityPopulation = {};

    // console.log(Object.keys(citiesPopulation));
    

    

    

    