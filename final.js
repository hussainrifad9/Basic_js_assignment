// first probelm 

function radianToDegree(radian) {
    const check = typeof(8);
    const paraType = typeof(radian);
    
    if( paraType == check){

    const PI = 3.14159;
    const Degree = radian * (180/PI);
    return Degree.toFixed(2);
    
    }
    else
    {
        return "Enter valid input Please! ";
    }
}



// second problem

function isJavaScriptFile (String) {
    let n = String.length;

    const check = typeof(String);
    const paraType = typeof('A');

    if(check == paraType) {
        let partial = String.slice(n-3, n);
        if(partial=='.js'){
        return true;
    }
    else {
        return false;
    }
    }
    else {
        return "Enter valid input Please! ";
    }
    
    
}



// third problem 

function oilPrice(diesel, petrol, octane) {
    const check1 = typeof(diesel);
    const check2 = typeof(diesel);  
    const check3 = typeof(diesel);

    const paraType = typeof(1);
    if( check1 == paraType && check2 == paraType && check3 == paraType) {

        const dieselPrice = 114 ;
        const petrolPrice = 130 ;
        const octanePrice = 135 ;

        const total_price = (diesel*dieselPrice) + (petrol*petrolPrice) + (octane*octanePrice);
        return total_price;
    }
    else {
        return "Enter valid input Please! ";
    }
    
}




// fourth problem 

function publicBusFare (peoples) {

    const check = typeof (peoples);
    const paraType = typeof(1);

    if(check == paraType) {

        const bus = peoples % 50 ;
        const micro_bus = bus % 11 ;
    
        const totalPrice = 250 * micro_bus;
        return totalPrice;
    }
    else {
        return "Enter valid input Please! ";
    }
   
}




// fifth problem 

function isBestFriend(object1, object2) {

    const check1 = typeof (object1);
    const check2 = typeof (object2);

    let person = {name:'John', friend:'anwar'};
    const paraType = typeof(person);

    if (check1 == paraType && check2 == paraType) {

        if(object1.name == object2.friend && object1.friend == object2.name)
    {
        return true;
    }
    else
    {
        return false;
    }
    }

    else {
        return "Enter valid input Please! ";
    }
}
