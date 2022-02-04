//FUNCTIONS
function north() {
    console.log("North");
}

function east() {
    console.log("East");
}

function south() {
    console.log("Sout");
}

function west() {
    console.log("West");
}

//CODE

if (confirm("Hello, Traveler. You have Clicked on the SuperRoobot RPG. Press OK  to continue.")) {
} else {
    return;
}

let NAME = prompt("What would you like your name to be?", "Name");

let DIRECTION = prompt("Hello " + NAME + ", would you like to go North, East, South, or West? [N/E/S/W]");
if (DIRECTION == 'N') {
    north();
} else if (DIRECTION == 'E') {
    east();
} else if (DIRECTION == 'S') {
    south();
} else if (DIRECTION == 'W') {
    west();
} else {
    alert("Invalid Direction");
    return;
}