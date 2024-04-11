
// Select all job elements (adjust the selector as needed)
const jobElements = document.querySelectorAll(".job-card-list__element");
console.log(jobElements)

jobElements.forEach(jobElement => {
    // Check for "Easy Apply" button (adjust the selector as needed)
    const easyApplyButton = jobElement.querySelector(".easy-apply-button");

    if (easyApplyButton) {
        // Hide the job element if it has an Easy Apply button
        jobElement.style.display = "none";
    }
});







// // content.js

// // Example: Read the title of the page
// const pageTitle = document.title;
// console.log('Page title:', pageTitle);

// // Example: Read specific data from the page
// const element = document.querySelector('.some-selector');
// if (element) {
//     const data = element.textContent;
//     console.log('Data from the page:', data);
// } else {
//     console.log('Element not found');
// }


// // Select all job card containers
// const jobCards = document.querySelectorAll('.job-card-container__apply-method');

// // Filter job cards that have Easy Apply feature
// const easyApplyJobs = Array.from(jobCards).filter(jobCard => {
//     const textContent = jobCard.textContent.trim(); // Get the text content of the job card
//     return textContent.includes('Easy Apply'); // Check if the text content includes 'Easy Apply'
// });

// // Now easyApplyJobs contains all the job cards with Easy Apply feature
// console.log(easyApplyJobs);

