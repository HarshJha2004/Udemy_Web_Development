// Object

    let userName = {}; // object created

    // console.log(userName);
    // console.log(typeof userName);

    let userDetails = {
        firstname: "Harsh",
        isLoggedin: true

    };

    // Here we declare the Object to const, but we change the properties of that because it's an primitive type. 
        const schoolDetails = {
            schoolName: "sunrise Vidhyalay",
            sRegNo: 25

        };

    // we can access any properties of the object using (.)    
    // console.log(userDetails.firstname);
    userDetails.firstname = "Parth";
    userDetails.lastname = "Jha" //Adding new value also in Object
    // console.log(userDetails);

    //another way to access the properties
    const bikeInformation = {
        "Bike Name": "ZX10R",
        bikeModelNumber: 253901
    };

    // console.log(bikeInformation["Bike Name"]);

    //other way to create Object
    const date = new Date();
    // console.log(date);

// Array

    let anotherUser = ["hitesh", "choudhary", true, []];

    let demoArray = [true, "Harsh"];
    // console.log(demoArray);

// Typeconversion

    // Implicit Conversion
        // console.log(2 + '1'); 

        let isValue = true;
        // console.log(isValue + 1); // in JS the implicit conversion is really really odd, means implicit conversion in JS is not the best, infact it's not best in any language so that reason many people uses typescript because it's focuses so much on datatype

    // Explicit Conversion
        let anotherValue = true;
        console.log(Number(anotherValue) + 4);

        let portfolioNumber = "2abc";
        console.log(Number(portfolioNumber)); //NaN

