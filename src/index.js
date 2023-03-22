import './less/index.less'

// Your code goes here!


document.addEventListener("keydown", (event) => {
    if (event.ctrlKey){
          document.body.style.background = "#" + 
          ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        }
    })

// let intro = document.querySelector(".intro");
// intro.addEventListener("mouseover", (event) => {
//     let standard = intro.style.fontWeight;
//     if (event.type ==="mouseover") {
//         intro.style.fontWeight = "bold";
//     }
//     if (event.type !== "mouseover"){
//         intro.style.fontWeight = "thin";
//     }
// })