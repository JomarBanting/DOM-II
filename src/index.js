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

function boldText(element) {
    element.style.fontWeight = "bold";
    element.style.color = "purple";
}

function unboldText(element) {
    element.style.fontWeight = "normal";
    element.style.color = "black";
}

let home = document.querySelector(".home");
home.addEventListener("mouseover", (event) => {
    boldText(event.target);
});
home.addEventListener("mouseout", (event) => {
    unboldText(event.target);
});

let contentSelection = document.querySelector(".home");
contentSelection.addEventListener("mouseover", (event) => {
    boldText(event.target);
});
contentSelection.addEventListener("mouseout", (event) => {
    unboldText(event.target);
});

