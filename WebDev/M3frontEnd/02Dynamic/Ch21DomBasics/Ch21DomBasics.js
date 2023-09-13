
{


    // 01. Introudction to DOM

}







{


    // 02. Targeting Node with different selectors



    /*
        selecting single element
             
        getElementById()
        --  takes id as string parameters
        --  return null = if no id is found 
        --  id shoud be unique = if we added the same id to multiple places , then it will returns only first id it encounter
             
    
    */
    var intro = document.getElementById('intro');
    intro.innerHTML = "Updated whole content of 1. Introduction ";





    /*
      getElementsByTagName()
    
      -- takes html tag as string parameters
      -- returns collection of html tag 
      -- html collection = nodeList
      -- we can perform iteration here 
      -- returned nodelist work on real time, or live 
      -- it case in-sensitive 
    
    
    
      // this will select all p tag element, 
      // we can target one by one for each
      // indexing will start from 0
    
      // if you want to see each paragraph
      // got to browser console
      // write console.log(tagP)
    
    */

    var tagP = document.getElementsByTagName('p');
    /*

      what will be output if, we write 

      tagP.innerHTML = "Updated all at once , will this happen";

    */
    tagP[0].innerHTML = "Upated paragraph 00";
    tagP[1].textContent = "Upated paragraph 01"


    // by using .innerHTML, we can't write any html tags special characters  like below
    tagP[2].innerHTML = "<p>Updated paragraph 02 with textContent</p>"


    // but in .textContent, everything is allowed 
    tagP[3].textContent = "<p>Updated paragraph 03 with textContent</p>"

    tagP[4].textContent = "<p>Updated paragraph 04 with textContent</p>"

    // check the output in  browser console
    // biggest problem here 



    // by doing one by one 
    // we can use iteration , do the same work

    for (let i = 0; i < tagP.length; i++) {
        console.log(tagP[i].textContent);
        // this will provide, all paragraph content in console
        // keep in mind, of previous updated paragraph 

        // here, we are printing to console
        // semilary we can update to html, web pages 

    }







    /*
    
      getElementsByClassName()
    
      -- non live collection 
      -- static html collection
      -- returns empty collection 
    
      -- it return a collection, not an array 
      -- we can convert to an array, by using = Array.from(), spread synatax [...collection]
    
      -- can use any iteration like = for of, forEach; 
    
    */

    let myClass = document.getElementsByClassName("myClass");

    for (let i of myClass) {
        i.textContent = "Updated Content"
    }





    /*
    
       querySelector ()
       
       -- takes css type selector as parameters 
       -- select only first element found 
       -- return null, if not found 
    
    
    */



    /*
    
      querySelectorAll()
    
      -- select all element found
      -- returns collection or node list 
      -- for iteration = forEach() & for loop
    
    
    */

    let high = document.querySelectorAll('.high');

    high.forEach(function (high) {
        // adding one more class 
        // using = .classList  = to add new class 
        high.classList.add('highLight');

        // to see 
        // check browser console
        // two classes, high & highlight were showing 
    });


}






{



    // 03. DOM Methods 



    // appendChild
    // it appends the specified node as the last child of the target parent node 


    // creating div
    var tagDiv = document.createElement('div');

    // giving content within div 
    tagDiv.textContent = "Dynamic content in div ";

    // giving styling 
    tagDiv.style.backgroundColor = "yellow";

    // appendig, or where to add the created div
    // this will append to within the body tag, last 
    document.body.appendChild(tagDiv);





    /**
     * if a node, we are creating, already exist in document , 
     * then after re - creating , it wil moved to new postion
     * which is the last position or last child of parent 
    */





    /*
     
      why this is giving type error, when we are trying to add the new div in main tag or (any nested tag )
    
      document.main.appendChild(tagDiv);


      because , we have to find the parent element 
      in previous example we directly added to body, and body is directly recognised by document 

    */
    let newDiv = document.createElement('div');

    newDiv.textContent = "Creating new div with some text ";
    newDiv.style.backgroundColor = "aqua";

    let parentDiv = document.getElementById('parentDiv');

    parentDiv.appendChild(newDiv);






    // removeChild

    /**
     *  // removeChild()
     * 
           var elementToRemove = elementsByTagName[0];
           elementToRemove.parentNode.removeChild(elementToRemove);

        // parentNode   --- predifined 
        // removeChild  --- is predifined 

    */

    // finding parent
    var parent03 = document.getElementById("parent03");

    // finding child
    var child03 = document.getElementById('child03');


    // removing child 
    parent03.removeChild(child03);


    // remove()   = predefined
    // removeChild = predefined 

    // both are used to remove 



}




{
    // 04. adding text and html content 

    let hw0 = document.getElementById("hw0");
    let hw1 = document.getElementById("hw1");
    let hw2 = document.getElementById('hw2');
    let hw3 = document.getElementById("hw3");


    hw0.textContent = "Hello World";
    hw1.textContent = "<strong> Hello World </strong>";

    hw2.innerHTML = "Hello World";
    hw3.innerHTML = "<strong> Hello World </strong>";

    // now check the differences

    // textContent = just used to add text
    // innerHTMl = add meaning 

    // be alert in using innerHTML
    // as it will modify innerHTML


    /*

     It's important to note that when using the innerHTML property, 
     
     you should be cautious with untrusted or user-generated content to avoid potential security risks such as cross-site scripting (XSS) attacks. 
     
     If you need to insert dynamic content that includes user input or content from an external source, 
     
     consider using other methods like textContent or sanitizing the HTML before adding it to the DOM.


    */

}



{
    // 05. adding inline style 
}




{
    // 06.  setting the attribute
    var button06 = document.getElementById("button06");
    button06.setAttribute('disabled', 'true');


    // remvoing attribute 
    var button061 = document.getElementById('button061');
    button061.removeAttribute('button061');
}






/**
 * 
 *  attributes vs properties 
 *  
 *  innerHtml vs textContent
 *  dom vs bom 
 *  document vs window
 * 
 * 
 * 
 *   some points 
 *   == window is parent of document 
 *   == can we add class,id, using set attribute = yes 
 *   
 * 
 * 
 *   classList.add('') = will change or update  css class of html tag
 *   className = 
 *   addClass = (only in jquery = keep in mind )
 * 
 * 
 * 
*/





/*

   Attributes vs Properties 

   ----- Attributes and properties are not the same. Attributes are defined in HTML markup, while properties represent the current state of an element in the DOM. Using these attribute-related methods affects the attribute values but may not always reflect changes in the corresponding properties. To update properties, you can directly modify them using dot notation or by using property-specific methods.



*/