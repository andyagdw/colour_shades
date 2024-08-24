/////////////////////////
let roundNum = Math.round;
let randomNum = Math.random;

function randomInt(min, max) {  // function used to generate different shades of colours
    min = Math.ceil(70);
    max = Math.floor(255);
    return Math.floor(randomNum()*(max-min+1) + min);
}

const allDivsContainer = document.getElementById("allDivs");

// function that displays the users selected choice (e.g., number of boxes they selected and colour of the boxes)
function displaySelectedNumOfBoxes() {
    // store the value of the number of boxes
    let dropDownValue = document.getElementById("numbers").value;
    // store the colour value
    let colourValue = document.forms[0].elements.colours.value;

if (colourValue === "Red") {
    // Creating and style divs until I get to the selected number of boxes
    for (let i = 0; i < dropDownValue; i++) {
        let newDiv = document.createElement('div');
        allDivsContainer.appendChild(newDiv);
        newDiv.style.border = "1px solid #000";
        newDiv.style.marginTop = "1.5em";
        newDiv.style.height = "5vw";
        newDiv.style.width = "5vw";
        newDiv.style.float = "left";
        newDiv.style.backgroundColor = 'rgb(' + randomInt() + ',' + roundNum(randomNum()*15) + ',' + roundNum(randomNum()*15) + ')';
        newDiv.setAttribute('oncontextmenu', 'shrinkDivWidth(this)');
        newDiv.setAttribute('onclick', 'increaseDivWidth(this)');
    }
} else if (colourValue === "Green") {
    for (let i = 0; i < dropDownValue; i++) {
        let newDiv = document.createElement('div');
        allDivsContainer.appendChild(newDiv);
        newDiv.style.border = "1px solid #000";
        newDiv.style.marginTop = "1.5em";
        newDiv.style.height = "5vw";
        newDiv.style.width = "5vw";
        newDiv.style.float = "left";
        newDiv.style.backgroundColor = 'rgb(' + roundNum(randomNum()*50) + ',' + randomInt() + ',' + roundNum(randomNum()*50) + ')';
        newDiv.setAttribute('oncontextmenu', 'shrinkDivWidth(this)');
        newDiv.setAttribute('onclick', 'increaseDivWidth(this)');        
    } 
} else if (colourValue === "Blue") {
    for (let i = 0; i < dropDownValue; i++) {
        let newDiv = document.createElement('div');
        allDivsContainer.appendChild(newDiv);
        newDiv.style.border = "1px solid #000";
        newDiv.style.marginTop = "1.5em";
        newDiv.style.height = "5vw";
        newDiv.style.width = "5vw";
        newDiv.style.float = "left";
        newDiv.style.backgroundColor = 'rgb(' + roundNum(randomNum()*5) + ',' + roundNum(randomNum()*5) + ',' + randomInt() + ')';
        newDiv.setAttribute('oncontextmenu', 'shrinkDivWidth(this)');
        newDiv.setAttribute('onclick', 'increaseDivWidth(this)');
    }
}
}

const submitButton = document.querySelector(".myButton");
submitButton.addEventListener("click", displaySelectedNumOfBoxes);

/////////////////////////
function shrinkDivWidth(selectedDiv) {  // shrink the width of the div when user right clicks on it
    let currentWidth = selectedDiv.style.width;
    let a2 = currentWidth.replace(/vw/gi, '');  // get rid of measurements to turn current width into a number
    let a3 = a2 / 2;
    let a4 = a3 + "vw";  // Add measurement
    selectedDiv.style.width = a4;
}

function increaseDivWidth(selectedDiv) {  // increase the width of the div when the user clicks on it
    let currentWidth = selectedDiv.style.width;
    let a2 = currentWidth.replace(/vw/gi, '');
    let a3 = a2 * 2;
    let a4 = a3 + "vw";
    selectedDiv.style.width = a4;
}

/////////////////////////
const body = document.getElementById('my-body');

body.addEventListener('keydown', function(event) { // swap two random divs when user presses 's'
    // Check if there are any divs to prevent error
    if (event.code == 'KeyS' && allDivsContainer.childElementCount) {
        let lengthOfDivs = document.getElementById('allDivs').children.length;
        let a1 = Math.floor(randomNum()*lengthOfDivs);
        let a2 = Math.floor(randomNum()*lengthOfDivs);
        let div1 = document.getElementById('allDivs').getElementsByTagName('div')[a1];
        let div2 = document.getElementById('allDivs').getElementsByTagName('div')[a2];
        let div1colour = div1.style.backgroundColor;
        div1.style.backgroundColor = div2.style.backgroundColor;
        div2.style.backgroundColor = div1colour;
    }});

/////////////////////////
// Icons
const moon = '<i class="fa-regular fa-moon"></i>';
const sun = '<i class="fa-regular fa-sun"></i>';
const icons = [sun, moon];

// Elements
const h1 = document.querySelector(".header-h1");
const textInfo = document.querySelector(".info");
const selectLabel = document.querySelector(".select-label");
const btnThemeToggler = document.querySelector(".btn-theme-toggler");

function changeElementColours() {
  if (body.classList.contains("bodyWhite")) {
    body.classList.replace("bodyWhite", "bodyBlack");
    textInfo.classList.replace("blackColour", "whiteColour");
    h1.classList.replace("blackColour", "whiteColour");
    selectLabel.classList.replace("blackColour", "whiteColour");
    btnThemeToggler.innerHTML = icons[0];
  } else {
      body.classList.replace("bodyBlack", "bodyWhite");
      textInfo.classList.replace("whiteColour", "blackColour");
      h1.classList.replace("whiteColour", "blackColour");
      selectLabel.classList.replace("whiteColour", "blackColour");
      btnThemeToggler.innerHTML = icons[1];
  }
}

const buttonThemeToggler = document.querySelector(".btn-theme-toggler");
buttonThemeToggler.addEventListener("click", changeElementColours);

/////////////////////////
const form = document.getElementById("my-form");
form.addEventListener("submit", e => {  // prevent form from refreshing on submit
    e.preventDefault();
})