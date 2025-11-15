/*
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
    let i = 0
    let sum = 0
    while (i <= 5) {
        sum = sum + i
        i++
    }

/*
2.Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
    let countdown = []
    let counts = 5

    while(counts > 0){
        countdown.push(counts)
        counts--
    }
    // console.log(countdown)

/*
3.Write a `do while` loop that prompts a user to enter their favourite tea type until the enter `"stop"`.
    Store each tea type in an array named `teaCollection`.
*/

    // let teaCollection = []
    // let tea

    // do{
    //     tea = prompt(`Enter your favourite tea (type "stop" to finish)`)
        
    //     if(tea !== "stop") {
    //         teaCollection.push(tea)
    //     }
    // } while(tea !== "stop");

/*
4.Write a `do-while` loop that adds number from 1 to 3 and stored the result variable named `total`.
*/
    let total = 0
    let k = 1
    do {
        total = total + k
        k++
        // console.log(total)
    } while (k <= 3);

/*
5.write a `for` loop that multiplies the each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`
 */
    let multipliedNumbers = []
    let multiplyNumbers = [2, 4, 6]

    for (let i = 0; i < multiplyNumbers.length; i++) {
            takeNumbers = multiplyNumbers[i] * 2
            multipliedNumbers.push(takeNumbers)
    }
    // console.log(multipliedNumbers)
/*
6. Write a for loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
    let cities = ["Paris", "New York", "Tokyo", "London"]
    let cityList = []

    for(let i = 0; i < cities.length; i++){
       cityList.unshift(cities[i])
    }
    console.log(removeElement)
