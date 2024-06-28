const partsOfSpeechMap1 = {
    "noun": "dog",
    "noun.": "cat.",
    "adjective": "big",
    "verb": "chased"
};
const partsOfSpeechMap2 = {
    "noun": "horse",
    "noun.": "hill.",
    "verb": "trotted",
    "adjective": "elegant"
};


// Worst Case
function worstframeStory(str) {
    const words = str.split(' ');
    let output = '';
    let partsOfSpeechMap = partsOfSpeechMap1;
    for (const word of words) {
        if (word === 'An') partsOfSpeechMap = partsOfSpeechMap2;
        if (partsOfSpeechMap[word]) {
            output += partsOfSpeechMap[word] + ' ';
        } else {
            output += word + ' ';
        }
    }
    return output;
}


// Best Case
function bestframeStory(str) {
    let partsOfSpeechMap = partsOfSpeechMap1;
    let output = str.split(' ').map(word => {
        if (word === 'An') partsOfSpeechMap = partsOfSpeechMap2;
        return partsOfSpeechMap[word] || word
    }).join(' ');
    return output
}


const input1 = "The noun verb the adjective noun.";
console.log(worstframeStory(input1));
console.log(bestframeStory(input1));
// Output: "The dog chased the big cat."

const input2 = "An adjective noun verb over the adjective noun.";
console.log(worstframeStory(input2));
console.log(bestframeStory(input2));
// Output: "An elegant horse trotted over the green hill."

