var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/photo-1609286940885-7d74f0246665.jfif") {
        myImage.setAttribute("src", "images/birch-trees.jpg");
    }
    else {
        myImage.setAttribute("src", "images/photo-1609286940885-7d74f0246665.jfif");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to Quater forest, " + myName;
}

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to Quater forest, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}