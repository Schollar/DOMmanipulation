// Using querySelector to select all p tags and hold it in a variable.
var p_color = document.querySelector('p');
// changing the color of the first p tag we just selected to purple
p_color.style.color = "purple";

// Use quearySelectorAll to select all h1 tags;
var h1_color = document.querySelectorAll('div > h1');
// Loop through and change color to blue
for (var i = 0; i < h1_color.length; i++) {
    h1_color[i].style.color = "blue";
}

// Using getElementById to select a specific ID
var container = document.getElementById("container");
// changing the background of the element to skyblue
container.style.background = "skyblue";


// Using getElementsByClassName to target my wording class
var p_background = document.getElementsByClassName("wording");
// Loop through the results from above and change the background color to pink
var i = 0;
while (i < p_background.length) {
    p_background[i].style.background = "pink"
    i++
}

// Using getElementsByTagName to target div's and change the text
var div_font_size = document.getElementsByTagName("div");
// Loop through and change font size of divs
i = 0;
while (i < div_font_size.length) {

    div_font_size[i].innerHTML = "<h2>I am Injected</h2>";
    i++
}

// Using createElement to create a new p tag using my container div as a parent
var new_p = document.createElement('p');
// we append the child to the parent which is my container variable
container.appendChild(new_p);
// using createTextNode to create a new string
var newtext = document.createTextNode('I was also injected into the page as a paragraph');
// Appending the new text node to the new p tag we created above
new_p.appendChild(newtext);

// Using removeChild we are going to remove the child we just injected
container.removeChild(new_p);
// Inserting it back so i can use this for classlist stuff
container.appendChild(new_p);

// First we are going to use classList add to add a class to the element
new_p.classList.add('new_class');

// Now we are going to toggle and create a new class token
new_p.classList.toggle('second_class');

// Finally we remove the new_class from the tag leaving the toggle token we just made
new_p.classList.remove('new_class');

// Using replace we can replace the toggle class we made with new_class from before
new_p.classList.replace('second_class', 'new_class');


