/*
1.Declare an array named 'teaFlavours' that contains the strings `"green tea"`, `"black tea"`, `"oolong tea"`.
    Access the first element of the array and store it in a variable named `firstTea`.
*/

    let teaFlavours = ["green tea", "black tea", "oolong tea"];

     let firstTea = teaFlavours[0];
    // console.log(firstTea);
   
    //another way to declare an array
    // let teaFL = new Array("green tea", "black tea", "oolong tea");

/*
2.Declare an array named `Cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`.
    Access the third element in the array and store it in a variable named `favouriteCity`.
*/

    let Cities = ["London", "Tokyo", "Paris", "New York"];
    let favouriteCity = Cities[2];
    // console.log(favouriteCity);

/*
3. you have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala tea"`.
    Change the second element of the array to "jasmine tea".
*/ 

    let teaTypes = ["herbal tea", "white tea", "masala tea"];
    // console.log(teaTypes);

    let updated =  teaTypes[1] = "jasmine tea";
    // console.log(teaTypes);

/*
4. Declare an array named `cityVisited` containing `"Mumbai"` and `"Sydney"`.
    Add `"Berlin"` to the array using the `push` method.
*/
    let cityVisited = ["Mumbai", "Sydney"]
    cityVisited.push("Berlin");
    // console.log(cityVisited);

/*
5. You have an array named `teaOrders` with `"chai", "iced tea"`, "matcha" and `"earl grey"`.
    Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
 */
    let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
    lastOrder = teaOrders.pop();
    // console.log(lastOrder);

/*
6. You have an array named `popularTeas`containing `"green tea", "oolong tea", "chai"`.
    Create a soft copy of this array named `softCopyTeas`.
*/
    let popularTeas = ["green tea", "oolong tea", "chai"]
    let softCopies = popularTeas;
    
/*

7. You have an array named `topCities` containing `"Berlin", "Singapore", and "New York"`.
    Create a hard copy of this array named `hardCopyCities`.
*/
    // softcopy - Gives direct reference
    //hardcopy - make an duplicate
    let topCities = ["Berlin", "Singapore", "New York"] 
    // let hardCopyCities = [...topCities]; // it creates the actual hardCopy/sperate copy of an array.
        let hardCopyCities = topCities.slice(); //other ways to create a hard copy
    // topCities.pop();
    // console.log(topCities);
    // console.log(hardCopyCities);

/*
8. You have two arrays: `europeanCities` containing "Paris", "Rome", "asianCities" containing "Tokyo" and "Bankok".
    Merge these two arrays into a new array named `worldCities`.
*/
    let europeanCities = ["Paris", "Rome"]
    let asianCities = ["Tokyo", "Bankok"]
    let worldCities = europeanCities.concat(asianCities);
    // console.log(worldCities);

/*
9. You have an array named `teaMenu` containing "masala chai", "oolong tea", "green tea", and "earl tea".
    Find the length of the array and store it in a variable named `menuLength`.
*/
    let teaMenu = ["masala Chai", "Oolong tea", "Green tea"]
    let menuLength = (teaMenu.length);
    // console.log(menuLength);

/*
10. You have an array named cityBucketList containing "Kyoto", "London", "Cape Town", "Vancouver".
    Check if "London" is in the array and store the result in a variable named `isLondonList`.
*/
    let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
    let isLondonList = cityBucketList.includes("London");
    


