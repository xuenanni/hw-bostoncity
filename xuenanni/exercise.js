var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

//exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */
/*
    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;

    for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        }
    }

    return currentMax;
};
*/
/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
};
 */
exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var getEarnings = function(row){
        return Number(row[18]);
    };
    var findMax = function (previous,current){
        if (current > previous){
            previous=current;   
        }
        else{
            previous = previous;
        }
        return previous;
    };
    var earnings = people.map(getEarnings);

    var currentMax = earnings.reduce(findMax, 0);
  
    return currentMax;
};

exercise.earningsAbove = function() {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    //var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data
    var getEarnings = function(row){
        return Number(row[18]);
    };
   
    function above150k(item) {
        var comparison = item>150000;
        return comparison;
    }
    var earnings = people.map(getEarnings);
    var num_salaraies = earnings.filter(above150k);
    return num_salaraies.length;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data; // get handle on data
    var getPayroll = function(row){
        return Number(row[11]);
    };
    var payroll = people.map(getPayroll);
    var totalpayroll = payroll.reduce(function(previous,current){
        return previous + current;
    },0);
    return Math.floor(totalpayroll);
     
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data
    var getEarning = function(row){
        return Number(row[18]);
    };
    var earning = people.map(getEarning);
    var totalEarning = earning.reduce(function(previous,current){
        return previous + current;
    },0);
    return Math.floor(totalEarning);
 
};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var people = exercise.data.data; // get handle on data
    var getZip = function(row){
        return row[19];
    };
    var zip = people.map(getZip);
    // console.log(zip);
    // console.log(zip.length);
    function compare (a,b){
        if (a<b) return -1;
        if (a>b) return 1;
        if (a===b) return 0;
    }
    var zip1 = zip.sort(compare);
    var zip2 = zip1.slice(2,2+(zip1.length-2));
    // console.log(zip1);
    // console.log(zip1.length);
    // console.log(zip2);
    // console.log(zip2.length); 

    var zipCodes = [];

    var zipCodes = zip2.reduce (function(previous, current){
        if (current in previous) {
            previous[current] +=1;
        }
        else{
            previous [current] =1;
        }
        return (previous);
    },{});
    result = Object.keys(zipCodes).length;
    //console.log('result: ' + JSON.stringify(zipCodes));
    return result;
   // return zipCodes.length;
     
};
 