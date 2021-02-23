// Code your solution in this file!
function distanceFromHqInBlocks(location){
    // substract HQ from current location to find the distance 
    // 50 - 42
    // return location - 42

    if (location < 42){
        return 42 - location
    }
    else {
        return location - 42
    }
}

function distanceFromHqInFeet(location) {
    // substract HQ(42) from current location multiplied by 264 feet (in a block)
    if (location < 42){
        return (42 - location) * 264
    }
    else {
        return (location - 42) * 264
    }
}
/** useful callback function test */
function distanceTravelledInFeet(start, destination){
    // subtract destination from start and multiplies by 264 and returns the number of feet travelled
    
    if (destination < start ) {
        return (start - destination) * 264
    }
    else {
        return (destination - start) * 264 
    }
}
/** rewrite with Math.abs() */

function calculatesFarePrice(start, destination){ 
/**
 * 4 conditions
 * return a fare for the customer where the first 400 feet are free ( less than 400)
 * For a distance between 400 and 2000 feet, the price is 2 cents per foot.
 *  Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
 * Finally, Scuber does not allow any rides over 2500 feet — the function returns 
 * 'cannot travel that far' if a ride over 2500 feet is requested.
 */
    const distance = (distanceTravelledInFeet(start, destination))
    //let price = 400 * .02

    if (distance < 400) {
        return 0
    }

    else if ( distance > 400 && distance < 2000){
        return parseFloat(((distance * 0.02) - 8).toFixed(2))
    }

    else if (distance > 2000 && distance < 2500 ) {
        return 25
    }
    
    else {
        return 'cannot travel that far'
    }
}

/** Math.abs() */