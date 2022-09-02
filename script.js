const colors = [
  "#D1FAFF",
  "#9BD1E5",
  "#6A8EAE",
  "#F6D4BA",
  "#FEFADC",
  "#F3B391"
];

function handleOnClick() {
  let output = document.querySelector(".output");
  output.style.display = "block";

  let hours = document.getElementById("hours");
  hours.innerHTML = "";

  var opt1 = document.getElementById("hourtime");
  var opt2 = document.getElementById("minutetime");
  var opt3 = document.getElementById("daytime");

  let hour = opt1.options[opt1.selectedIndex].value;
  let minute = opt2.options[opt2.selectedIndex].value;
  let daytime = opt3.options[opt3.selectedIndex].value;

  if (daytime == "PM") {
    hour += 12;
  }

  console.log(hour);
  console.log(minute);
  console.log(daytime);
  
  let now = new Date();
  now.setMinutes(minute);
  now.setHours(hour);

  // calculate sleep cycles!
  for (let i = 1; i <= 6; i++) {
    now.setMinutes(now.getMinutes() + 90);

    let elm = document.createElement("div");
    elm.innerText = 
      now.toLocaleTimeString("en-US", { timeStyle: "short" });
    elm.style.color = colors[i];
      hours.appendChild(elm);
  } 
}