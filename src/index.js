import './less/index.less'

// Your code goes here!


document.addEventListener("keydown", (event) => {
    if (event.ctrlKey){
          document.body.style.background = "#" + 
          ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
          // random color generator that i got from stackoverflow.
          // https://stackoverflow.com/questions/1484506/random-color-generator
        }
    })
let introTest = document.querySelector(".home .intro h2");
let headerTag = document.querySelector("header");
console.log(introTest);
    
window.addEventListener("load", () => {
    console.log("The page is fulled loaded"); 
});

function boldText(element) {
    element.style.fontWeight = "bold";
    element.style.color = "purple";
}

function unboldText(element) {
    element.style.fontWeight = "normal";
    element.style.color = "black";
}

const btnFocus = document.createElement("button");
btnFocus.innerText = "Enter Your Name";
let navContainer = document.querySelector(".nav-container");
if (navContainer){
    navContainer.appendChild(btnFocus);
}
let introH2Tag = document.querySelector(".intro h2");
btnFocus.addEventListener("click", (event) => {
    if (focusInputBox.value === ""){
        event.preventDefault();
        console.log("The Input Box is Empty!")
    }
    else {
        introH2Tag.innerHTML = `Welcome To Fun Bus ${focusInputBox.value}!`;
        introH2Tag.style.color = "red";
    }
})

let contentSelection = document.querySelector(".home");
if (contentSelection){
    contentSelection.addEventListener("mouseover", (event) => {
        boldText(event.target);
    });
    contentSelection.addEventListener("mouseout", (event) => {
        unboldText(event.target);
    });
}


const wheelDetection = document.createElement("p");
window.addEventListener("wheel", (event) => {
    const mouseWheel= event.textContent = "mouse wheel use deteted!";
    headerTag.appendChild(wheelDetection);
    wheelDetection.textContent = mouseWheel;
})

let scrollCounter = 0;
const scrollCounterText = document.createElement("p");
if (scrollCounterText){
    if (introH2Tag){
        headerTag.appendChild(scrollCounterText);
    }

window.addEventListener("scroll", (event) => {
    
    const window = event.currentTarget;
    const scrollcounter = window.scrollY;
    if (scrollcounter )
    {
        scrollCounter+= 1;
    }
    scrollCounterText.textContent = `Scroll Counter: ${scrollCounter}`;
    headerTag.appendChild(scrollCounterText);
})
}

const focusInputBox = document.createElement("input");
focusInputBox.setAttribute("id", "form");
focusInputBox.type = "text";
focusInputBox.innerText = "Enter your name"
if (navContainer)
{
    navContainer.appendChild(focusInputBox);
}


focusInputBox.addEventListener("focusin", (event) => {
    event.target.style.background = "pink";
  });
  
  focusInputBox.addEventListener("focusout", (event) => {
    event.target.style.background = "";
  });




