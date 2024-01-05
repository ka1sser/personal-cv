const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/penguin.jpg") {
    myImage.setAttribute("src", "images/penguin-2.jpg");
  } else {
    myImage.setAttribute("src", "images/penguin.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.");
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = `You can hire me now, ${myName}`;
    }   
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `You can hire me now, ${storedName}`;
}

myButton.onclick = function(){
    setUserName();
}