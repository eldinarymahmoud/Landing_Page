/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/*****************************************************************************************************************************************/
/**
 * Segment duty:
 *  - Define global variables  
*/
const sectionNodeList = document.querySelectorAll('section'); // get all sections and save it in NodeList
const sectionUl = document.getElementById("navbar__list"); // Saving the unordered list element in a variable to be used globally
const documentFragment = document.createDocumentFragment(); // creating document fragment for appending and removing from the original document
/**
 * Function duty:
 *  -   Creates list items inside the unordered list with event listeners to the click
 *  -   Creates a elements inside each item with the text inside
 *  -   Adding classes according to CSS sheets
*/
function buildUlContent(element,index){
    let listItem = document.createElement('li');
    let listItemLink = document.createElement('a');
    
    listItemLink.classList.add("menu__link");
    listItem.classList.add("navbar__menu");

    listItemLink.append("Section " + (index+1));
    listItem.appendChild(listItemLink);
    documentFragment.appendChild(listItem);

    listItemLink.addEventListener('click',function(){
        element.scrollIntoView({behavior: "smooth",});
    });
}
    
/**
 * Function duty:
 *  -   Looping on the nodeList sections using for loop (Alt. uing forEach)
 *  -   Invoking the buildUlContent function for each section
 *  -   Adding class name to the unordered list relating to the CSS sheet
 *  -   Appending the document fragmenet contect at once to the original document
*/
function scrollToSection(){
    for(let i = 0; i<sectionNodeList.length; i++){
        buildUlContent(sectionNodeList[i], i);
    }

    sectionUl.classList.add("navbar__menu");
    sectionUl.appendChild(documentFragment);
}

/**
 * Function duty:
 *  -   Adding event listener to the whole window for scrolling
 *  -   Looping on the UL items when scrolling
 *  -   Getting the section top dimensions using getBoundingClientRect();
 *  -   Looping again on every section to remove the class name and allow only one section to be active
 *  -   Adding an id for the active item of the unordered list (navbar)
*/
function sectionAtView(){
    let listItemNodeList= document.querySelectorAll('a');

    window.addEventListener('scroll', function(){
        for(let i = 0; i<sectionNodeList.length; i++){
        const sectionRect = sectionNodeList[i].getBoundingClientRect();
        
        if (sectionRect.top > 0 && sectionRect.top < 300){
            for(let j = 0; j<sectionNodeList.length; j++){
                sectionNodeList[j].classList.remove("your-active-class");
                listItemNodeList[j].removeAttribute("id","highlight_navbar");
            }
            sectionNodeList[i].classList.add("your-active-class");
            listItemNodeList[i].setAttribute('id',"highlight_navbar");
        }
    }
    });
    
}
//Addition for learning reference, this function can be called from the html
function myFunction(){
    alert("HELLO");
}
/**
 * Segment duty:
 *  - Invoking functions  
*/
scrollToSection();
sectionAtView();

