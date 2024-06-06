
// Here are Some JavaScript Alert Question 

// Question-01
// 1. What function in JavaScript is used to display an alert dialog containing a message?

alert('Hello!'); //Alert with Hello message

//Question-02
// 2. How do you create a simple alert box displaying the message "Hello, world!"?

var message = 'Hello World!';
alert(message); //Alert with Stored message in variable

// Question-03
// 3. Can you customize the title of an alert box in JavaScript? If so, how?


// Question-04
// 4. What happens if you use the alert function without providing any message?

alert(); //Alert Box Without any message

//Question-05
// 5. Is it possible to include HTML in an alert message? Why or why not?

// No it's not possible because the alert shows the Html Elements also with the message and does'nt work mean not bold or highlight 

alert('<h1> Alert </h1>');

//Question-06
// 6. How do you capture user input in an alert box?

// Actually, alert boxes in JavaScript are not designed to capture user input. 
//They are primarily used for displaying messages or notifications to the user. 
alert('<input type="text" value="Enter name">');

//Question-07
// 7. Can you change the appearance or styling of an alert box using JavaScript?

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Display the modal
modal.style.display = "block";


//Question-08
//8. Is it possible to have multiple alert boxes displayed consecutively?

alert("First alert"); // Displays first alert
alert("Second alert"); // Displays second alert only after the first one is dismissed
alert("Third alert"); // Displays third alert only after the second one is dismissed

//Question-09
// 9. How do you delay the execution of an alert box in JavaScript?

// Displaying an alert box after a delay of 2000 milliseconds (2 seconds)
setTimeout(function () {
    alert("This alert appears after a delay!");
}, 2000);


//Question-10
// 10. What is the purpose of the 'OK' button in an alert box, and can it be customized?

//The purpose of 'OK' button is to aknowledge the message is considerable or not
// yes It can be costomized by Html Css frameworks like bootstrap or jQuery

alert("We can't customized the Ok Button")