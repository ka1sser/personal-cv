const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/penguin.jpg") {
    myImage.setAttribute("src", "images/penguin-2.jpg");
  } else {
    myImage.setAttribute("src", "images/penguin.jpg");
  }
};