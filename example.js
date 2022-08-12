// <-------------- first problem ------------->

function radianToDegree(radian) {
    const PI = 3.14159;
    const Degree = radian * (180/PI);
    return Degree.toFixed(2);
}


// <-------------- second problem ------------->

function isJavaScriptFile (String) {
    let n = String.length;

    let partial = String.slice(n-3, n);
    if(partial=='.js'){
        return true;
    }
    else{
        return false;
    }
}

// <-------------- Third problem ------------->


function oilPrice(diesel, petrol, octane) {
    const dieselPrice = 114 ;
    const petrolPrice = 130 ;
    const octanePrice = 135 ;

    const total_price = (diesel*dieselPrice) + (petrol*petrolPrice) + (octane*octanePrice);
    return total_price;
}


// <-------------- fourth problem ------------->


function publicBusFare (peoples) {

        const bus = peoples % 50 ;
        const micro_bus = bus % 11 ;

        const totalPrice = 250 * micro_bus;
        return totalPrice;
}



// <-------------- fifth problem ------------->


function isBestFriend(object1, object2) {
    if(object1.name == object2.friend && object1.friend == object2.name)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}
