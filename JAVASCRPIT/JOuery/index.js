$(document).ready(function(){
    $("h1").css("color","red");
});


// $("a").attr("href","https://yahoo.com");

$("button").click( function () {
    $("h1").css("color" ,"yellow");
});


$("h1").on("mouseover" , function(){
    $("h1").css("color" ,"black");
});

/*
introduction 
document.querySelector("some element"); ➡️ jQuery("some element"); ➡️ $("some element");

Selecting Elements with jQuery👇
$("some element");
$(#someid some-element);
$("some-element.someclass");


Manipulating Styles with jQuery 👇
.css("property","value"); // only property then getting the value 
// property and value then setting the value 

.css({"property1":"value1","property2":"value2"});
// seperating styles from behaviours
$("some element").addClass("css class"); -> add the class
$("some element").removeClass("css class"); -> remove the class
$("some element").hasClass("css class"); -> checks whether css is applied to the element TRUE OR FALSE 


Manipulating Text with jQuery👇
$("some element").text("new text to update");
$("some element").html("new html to update");


Manipulating Attributes with jQuery👇
console.log($("some element").attr("attribute"));  - print the attribute to console 
$("some element").attr("attribute name", "new value");

Adding Event Listeners using jQuery👇
$("h1").on("mouseover" , function(){
    $("h1").css("color" ,"black");
});
$("button").click( function () {
    $("h1").css("color" ,"yellow");
});

https://developer.mozilla.org/en-US/docs/Web/Events

Adding and Removing Elements with jQuery👇
before()
after()
append()
prepend()
Example:
$("h1").before("<p>Paragraph before h1</p>");

remove()
$("some element").remove();

Webiste Animation with jQuery 👇
https://www.w3schools.com/jquery/jquery_ref_effects.asp

toggle
fadeOut
fadeIn
slideIn
slideUp




*/

