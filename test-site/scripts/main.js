let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tamerlane-pic.jpeg') {
      myImage.setAttribute ('src','images/giraffe-pic.png');
    } else {
      myImage.setAttribute ('src','images/tamerlane-pic.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
let myName = prompt('Please enter your name.');
if(!myName) {
setUserName();
} else {
localStorage.setItem('name', myName);
myHeading.innerHTML = 'Tamerlane is cool, ' + myName;
}
}
if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.innerHTML = 'Tamerlance is cool, ' + storedName;
}
myButton.onclick = function() {
setUserName();
}
