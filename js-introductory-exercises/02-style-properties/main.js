// function makeRed () {
//     console.log("turn first div red");
//     let sectionEl = document.querySelector("#section1");
//     sectionEl.style.backgroundColor = "red";
// }

// function makeBlue () {
//     console.log("turn 2nd div blue");
//     let sectionEl = document.querySelector("#section2");
//     sectionEl.style.backgroundColor = "Blue";
// }

// function makePink () {
//     console.log("turn 3rd div pink");
//     let sectionEl = document.querySelector("#section3");
//     sectionEl.style.backgroundColor = "Pink";
// }

// function makeOrange () {
//     console.log("turn 4th div orange");
//     let sectionEl = document.querySelector("#section4");
//     sectionEl.style.backgroundColor = "Orange";
// }

function changeBackground(selector,color) {
    let el = document.querySelector(selector);
    el.style.backgroundColor = color;
}

function reset() {
    let section1El = document.querySelector("#section1").style.backgroundColor = "white";
    // sectionEl.style.backgroundColor = "white";
    let section2El = document.querySelector("#section2").style.backgroundColor = "white";
    // sectionEl.style.backgroundColor = "white";
    let section3El = document.querySelector("#section3").style.backgroundColor = "white";
    // sectionEl.style.backgroundColor = "white";
    let section4El = document.querySelector("#section4").style.backgroundColor = "white";
    // sectionEl.style.backgroundColor = "white";
}

