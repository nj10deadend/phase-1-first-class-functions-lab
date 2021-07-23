// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


function returnFirstTwoDrivers() {
    return ['Sally', 'Bob'];
}
const returnLastTwoDrivers = () => ['Freddy', 'Claudia'];


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer; 
    }
}

const fareDoubler = function(createFareMultiplier) {
    return (createFareMultiplier * 2)
}

const fareTripler = createFareMultiplier => (createFareMultiplier * 3);

// arrow function format ----- const fareTripler = function(createFareMultiplier) {
//                                  return (createFareMultiplier * 3)
// }

const selectDifferentDrivers = function(arrayOfDrivers , returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);  
}