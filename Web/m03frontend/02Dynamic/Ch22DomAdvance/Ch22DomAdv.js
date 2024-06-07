// .classList = to add some value to class = from (previous session )







/* 
   
   02. Node types 
   --- comment node 

*/

// finding parent 
let commentParent = document.getElementById('comment_parent');

// creating comment 
let commentCustom = document.createComment('this comment is created through the predefined function .createComment');

// appendign comment to parent
commentParent.appendChild(commentCustom);

// removing the created comment 
commentParent.removeChild(commentCustom);







// accessing comment 

/* 
   let commentAll = document.querySelectorAll("<!--");

   above one is wrong method, we will not get comment like this
   -- also querySelectorAll() == takes css slectors & we can not select comment 

*/


// Get all nodes in the document
// we are selecting everything form document
// is * = a tag 
const allNodes = document.getElementsByTagName("*");


// .nodeType
// .COMMENT_NODE


// Filter out comment nodes
// by using predefined type like = .nodeType  && .COMMENT_NODE
const commentNodes = [];
for (const node of allNodes) {
    if (node.nodeType === Node.COMMENT_NODE) {
        commentNodes.push(node);
    }
}

// this is showing of length = 0
// problem here 
console.log(commentNodes);
















/**
 *  practical implementation part 01 
 * 
 *  == also check explanation of given in webiste
 *  == also hadn written notes dom in depth 
 * 
 * 
 *  document node vs document type node 
 *  HTML vs html
 *  attribute vs properties 
 * 
 * 
 * 
 * 
 *    .createComment
      .createTextNode
      .createProcessingInstruction


     
      .tagName
      .nodeName

      .parentNode
      .fistChild
      .nextSibling


      .textContent 
      .documentElement
      .doctype
      .publicId

      .insertBefore
      .appendChild() 


      .type
      .target

 * 
 * 
*/






// .tagName
// .nodeName

// .textContent 
// .documentElement

const title = document.getElementById('title');
console.log(title.tagName);
console.log(title.nodeName);
console.log(title.textContent);




// .createComment
// .createTextNode
// .createProcessingInstruction

const textNode = document.createTextNode("this is dynamic text created using .createTextNode ");


// appending in title 
title.appendChild(textNode);


const commentNode = document.createComment("This is a dynamically created comment node using createComment");
title.parentNode.insertBefore(commentNode, title.nextSibling);


// recalling setAttribute & getAttribute 
title.setAttribute('data-custom-attribute', 'custom attribute value');
console.log(title.getAttribute('data-custom-attribute'));


// accessing document node
console.log(document.nodeName); // document
console.log(document.tagName);  // undefined 
console.log(document.documentElement.nodeName); // HTML


// accessing document type node 
console.log(document.doctype.nodeName); // html = comming form (<!DOCTYPE html>)
console.log(document.doctype.publicId); // null 



// adding css file through javascript 
const piNode = document.createProcessingInstruction("xml-stylesheet", ' href="Ch22DomAdv.css" type="text/css" ');

// this added before the starting of html doucment 
document.insertBefore(piNode, document.firstChild);
// revise again


const paraElement = document.querySelector('p');
paraElement.innerHTML = "This para is modified using javascript";

















/*

   event listeners vs event handlers vs event 

   


   synatax of event Listeners 

   element.addEventListeners(event, eventHandler, capture);
   element.addEventListener(eventType, listenerFunction, options);


   element = is called as target 
           = we are targeting that element to perfomr activity 
           = 

   event = also, written as eventType 
         = some event or eventType are 
         -- click, mouseover, mouseout, mouseup, mousedown
         -- keypress, keyup, keydown, 
         -- submit, change, input, 
         -- focus, blur
         -- touchstart, touchend, touchmove, touchcancel
         -- load, size, scroll, unload


   eventHandler = it take some event as parameters
                = also, called ListenerFunction
                = we can use anonymous function here
                = we can also use callback function 
                = this is our simple javascript function, we will be creating according to use

    
   capture = true or false
           = by default it is set to false 

           = when false = then bubbling  = child to parent 
           = when true = then capturing  = parent to child 


*/


let myBtn1 = document.getElementById("myBtn1");

// anonymous function 
myBtn1.addEventListener("click", (example1) => {
    alert("first execution ");

})





let myBtn2 = document.getElementById("myBtn2");

myBtn2.addEventListener('click', example2)

function example2() {
    alert("second excution");
}





// we can remove event listeners 

let myBtnRemove = document.getElementById("myBtnRemove");

myBtnRemove.addEventListener("click", remove);

function remove() {
    myBtn2.removeEventListener('click', example2);
    alert("remove click event")
}
// this is a callback function that will be executed when the button is clicked







// javascript travel in two ways 
// 01. bubbling (is by default )
// 02. capturing 


/*
   element.addEventListener('eventtype', listenerFunction, false); 
   // Event bubbling phase (default)

   element.addEventListener('eventype', listenerFunction, true); 
   // Event capturing phase

*/


/**
 *    note third parameters  (true or false === is called as use capture )
 * 
 *   -- in bubbling = useCapture === false ( by defaul false )
 *   -- in capturing = useCapture === true (we have to set )
*/

// bubbling 
document.getElementById("outer").addEventListener("click", function () {
    alert("Outer div clicked (Bubbling phase)");
}, false); // UseCapture set to false (default) for bubbling

document.getElementById("middle").addEventListener("click", function () {
    alert("Middle div clicked (Bubbling phase)");
}, false); // UseCapture set to false (default) for bubbling

document.getElementById("inner").addEventListener("click", function () {
    alert("Inner div clicked (Bubbling phase)");
}, false); // UseCapture set to false (default) for bubbling
// flow = 



// capturing 
document.getElementById("outer").addEventListener("click", function () {
    alert("Outer div clicked (Capturing phase)");
}, true); // UseCapture set to true for capturing

document.getElementById("middle").addEventListener("click", function () {
    alert("Middle div clicked (Capturing phase)");
}, true); // UseCapture set to true for capturing

document.getElementById("inner").addEventListener("click", function () {
    alert("Inner div clicked (Capturing phase)");
}, true); // UseCapture set to true for capturing
// flow =  






/*

  event propagation 
  -- also called as event flow
  -- direction in which each event is working 


  // bubbling vs capturing
  // in bubbling - it goes form child to parent
  // in capturing - here it goes form parent to child 



*/




/*
   practical implemenation 02 
*/

function handleClick(event) {
    console.log("after click = ", event.target.textContent);
}

function handleMouseEnter(event) {
    console.log('after mouse enter = : ', event.target.textContent);
}

function handleMouseLeave(event) {
    console.log('after mouse leave = ', event.target.textContent);
}

let boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick);
    boxes[i].addEventListener('mouseenter', handleMouseEnter);
    boxes[i].addEventListener('mouseleave', handleMouseLeave);
}

// const boxes = document.querySelectorAll('.box');
// boxes.forEach(box => {
//   box.addEventListener('click', handleClick);
//   box.addEventListener('mouseenter', handleMouseEnter);
//   box.addEventListener('mouseleave', handleMouseLeave);
// });



// Event propagation example
const container = document.querySelector('.container');
container.addEventListener('click', event => {
    console.log("Container clicked");
});










/*
   event object = it get created when event handles occurs
                = to check its properties check console



    
    event.details
    event.preventDefault
    event.type
    event.target

    .curentTarget
    .eventPhase
    .timeStamp
    .keyCode
    .key

    .clientX
    .clientY


    .toggle




*/

// we are clicking container 
container.addEventListener('click', function (event) {
    // Access event properties and perform actions
    console.log(event.type); // type of container is = click
    console.log(event.target); // here all things that is present within container
    
});





// .stopPropagation
// --- is used to stop propagation of event bubbling

// .stopImmediatePropagatin()
// --- is used to stop propagation of event & also stop any other eventHandlers to take place 













// prevent default 
// -- is used to prevent or stop the by default nature of element.


// take example of anchor tag
// by default clicking anchor tag will get open in new tab , so can prevent or stop this by using .preventDefault()

let myLink = document.getElementById("myLink")

// function(event) = taking event as parameters 
// here , we can write anthing in place of event 
// here, by default , our event is coming form link "href "
myLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    alert("Link click prevented!");
});


myLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    alert("Link click prevented!");
});

// both are same














// event delagation 
// --- take the example of list, where we were adding event listeners to each list, we cant do delegation to reduce adding event listeners
// --- peventing uncessary event listeners

const list_parent = document.getElementById('list_parent');

list_parent.addEventListener('click', function(event){

    // wirting li = will not work 
    // always  LI = will work
    if (event.target.tagName === 'LI'){
        console.log("clicked =  ", event.target.textContent);
    }
})









/*

  practical implementation 03


*/

const shoppingList = document.getElementById('shopping-list');

shoppingList.addEventListener('click', function(event){

    if (event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
    }
});




const addItemForm = document.getElementById('add-item-form');
const newItemInput = document.getElementById('new-item-input');

addItemForm.addEventListener('submit', function(event){

    event.preventDefault();

    const newValue = newItemInput.value;

    // if newValue = true
    if (newValue){
        const newList = document.createElement('li');
        newList.textContent = newValue;

        shoppingList.appendChild(newList);

        newItemInput.value = '';

    }
})










/* 

   cross browser compatibility 


    attachEvent  -- used in old browser
    addEventListeners --- new way to attach event
    -- both are same


*/



function handleClick2(event){
    // new or modern browser support = event
    // some old unupdate browser = window.event
    event = event || window.event;

    if (event.preventDefault){
        event.preventDefault();
    }
    else {
        event.returnValue = false;
    }

    alert('Button Clicked');
}



const myButton = document.getElementById('myButton');

if (myButton.addEventListener){
    // modern browser = uses = addEventListener
    myButton.addEventListener('click', handleClick2, false);
}
else if (myButton.attachEvent){
    // old browser = uses = attachEvent
    myButton.attachEvent('click', handleClick2);

}





// event.target.tagName == tag name event
// event.target.value == 