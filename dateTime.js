const fullBtn = document.getElementById("btnradio1"); // radio buttons for datetime format
const DateBtn = document.getElementById("btnradio2"); // radio buttons for date format
const TimeBtn = document.getElementById("btnradio3"); // radio buttons for output time format
const output = document.getElementById("datetime-output"); // p element for datetime output

let mode = "full";

fullBtn.onclick = bindMode("full"); 
DateBtn.onclick = bindMode("date"); 
TimeBtn.onclick = bindMode("time"); 

update();

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

function update() {
  output.textContent = format(mode);
}

setInterval(update, 1000); // update every second

function format(mode) {
  const now = new Date();
  switch (mode) {
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "time":
      return now.toLocaleTimeString();
    default:
      return now.toLocaleString();
  }
}
