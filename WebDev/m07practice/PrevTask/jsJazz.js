
// Mean === Mode Problem 

function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    console.log(meanEqualsMode(arr));
}

function meanEqualsMode(arr) {
    // find mean
    // find mode 
    // if both are equal then return 1 , else 0

    let sum = 0;

    let modeCount = 0; // frequency of each unique number
    let modeObj = {}; // empty object 

    let mode = 0; // our mode 

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];

        // let mO = modeObj[arr[i]];
        // this was reupdating the modeObj with undefined value

        modeObj[arr[i]] = modeObj[arr[i]] ? modeObj[arr[i]] + 1 : 1;
        // using ternary operator to check
        // whether array element is added or not
        // we are accessing value using key in object

        if (modeObj[arr[i]] > modeCount){
            modeCount = modeObj[arr[i]];
            mode = arr[i];
        }

    }

    let mean = sum / arr.length;

    return mode === mean ? 1 : 0;

}