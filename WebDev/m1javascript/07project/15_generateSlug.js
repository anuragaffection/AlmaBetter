module.exports = { generateSlug };

function generateSlug(title) {
   
    return title.toLowerCase().split(' ').join('-') + ".com";

}



console.log(generateSlug("AlmaBetter Web Dev"));
// Output: "almabetter-web-dev.com"




/*
   explanation 

   time complexity  = linear 
   space complexity = linear 


*/