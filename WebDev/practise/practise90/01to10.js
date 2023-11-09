{
    // 01.
    // concept of relative speed
}






{
    // 02.
    // Dynamic Programming 
    // climbing stair problem
}





{
    // 03.
    // prime number clear 
}






{
    // 04. 
    // type = hard 
    // sort fruits 


    // way 01 
    {
        function sortFruitsByFrequency(fruits) {
            // Create a map to store the frequency of each fruit
            const fruitFrequency = new Map();

            // Count the frequency of each fruit
            for (const fruit of fruits) {
                if (fruitFrequency.has(fruit)) {
                    fruitFrequency.set(fruit, fruitFrequency.get(fruit) + 1);
                } else {
                    fruitFrequency.set(fruit, 1);
                }
            }

            // Sort the array based on frequency and fruit order
            // here it will take the duplicate also 
            const sortedFruits = fruits.slice().sort((a, b) => {
                if (fruitFrequency.get(a) !== fruitFrequency.get(b)) {
                    return fruitFrequency.get(b) - fruitFrequency.get(a);
                } else {
                    return fruits.indexOf(a) - fruits.indexOf(b);
                }
            });

            // Create a set to track unique fruits
            const uniqueFruits = new Set();

            // Filter and keep unique fruits in order
            const uniqueSortedFruits = sortedFruits.filter(fruit => {
                if (!uniqueFruits.has(fruit)) {
                    uniqueFruits.add(fruit);
                    return true;
                }
                return false;
            });

            return uniqueSortedFruits;
        }

        const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];
        const result = sortFruitsByFrequency(fruits);
        console.log(result); // Output: ['cherry', 'banana', 'apple']

    }





    // way 02 

    {

        function sortFruitsByFrequency(fruits) {
            const fruitFrequency = new Map();

            // Count the frequency of each fruit
            fruits.forEach(fruit => {
                fruitFrequency.set(fruit, (fruitFrequency.get(fruit) || 0) + 1);
            });

            // Sort the fruits based on frequency and order
            const sortedFruits = fruits.slice().sort((a, b) => {
                if (fruitFrequency.get(a) !== fruitFrequency.get(b)) {
                    return fruitFrequency.get(b) - fruitFrequency.get(a);
                } else {
                    return fruits.indexOf(a) - fruits.indexOf(b);
                }
            });

            // Create an array to store unique fruits
            const uniqueFruits = [];

            // Iterate through the sorted fruits and add unique fruits to the array
            sortedFruits.forEach(fruit => {
                if (!uniqueFruits.includes(fruit)) {
                    uniqueFruits.push(fruit);
                }
            });

            return uniqueFruits;
        }

        const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];
        const result = sortFruitsByFrequency(fruits);
        console.log(result); // Output: ['cherry', 'banana', 'apple']

    }





    {
        // this one is easy to undestand 
        
        function printFruitsByFrequency(fruits) {
            const frequency = {}; // Object to store the frequency of each fruit

            // Loop through each fruit in the array
            for (let i = 0; i < fruits.length; i++) {
                // Increase the frequency count for the current fruit
                frequency[fruits[i]] = (frequency[fruits[i]] || 0) + 1;
            }

            // Get an array of fruit names and sort them
            const sortedFruits = Object.keys(frequency).sort((a, b) => {
                if (frequency[b] === frequency[a]) {
                    // If frequency is the same, sort based on their index in the original array
                    return fruits.indexOf(a) - fruits.indexOf(b);
                }
                // Sort based on frequency in descending order
                return frequency[b] - frequency[a];
            });

            return sortedFruits; // Return the sorted array of fruits
        }

    }


    


    {
        function sortFruitsByFrequency(fruits) {
            const fruitFrequency = {};

            // Count the frequency of each fruit
            fruits.forEach(fruit => {
                fruitFrequency[fruit] = (fruitFrequency[fruit] || 0) + 1;
            });

            // Sort the fruits based on frequency and order
            const sortedFruits = fruits.slice().sort((a, b) => {
                if (fruitFrequency[a] !== fruitFrequency[b]) {
                    return fruitFrequency[b] - fruitFrequency[a];
                } else {
                    return fruits.indexOf(a) - fruits.indexOf(b);
                }
            });

            // Create an array to store unique fruits
            const uniqueFruits = [];

            // Iterate through the sorted fruits and add unique fruits to the array
            sortedFruits.forEach(fruit => {
                if (!uniqueFruits.includes(fruit)) {
                    uniqueFruits.push(fruit);
                }
            });

            return uniqueFruits;
        }

        const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];
        const result = sortFruitsByFrequency(fruits);
        console.log(result); // Output: ['cherry', 'banana', 'apple']

    }



}