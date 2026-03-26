console.log("Script started");

function start() {
    //console.log("click");

    //Create an h1 heading
    let heading = document.createElement("h1");

    //Setup text and styles
    heading.innerText = "Attendance";
    heading.style.color = "grey";
    heading.style.textDecoration = "underline";

    //Add the h1 to the page
    document.body.appendChild(heading);

    //prompt user for name
    let userName = prompt("What is your name")
    console.log(userName);
}

function addName(newName){
    let h2 = document.createElement("h2");
    
}