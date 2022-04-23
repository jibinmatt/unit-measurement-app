let inpMeters = document.getElementById("inp-meters");
let outFeet = document.getElementById("out-feet");
let inpFeet = document.getElementById("inp-feet");
let outMeters = document.getElementById("out-meters");

let inpLiters = document.getElementById("inp-liters");
let outGallons = document.getElementById("out-gallons");
let inpGallons = document.getElementById("inp-gallons");
let outLiters = document.getElementById("out-liters");

let inpKilos = document.getElementById("inp-kilos");
let outPounds = document.getElementById("out-pounds");
let inpPounds = document.getElementById("inp-pounds");
let outKilos = document.getElementById("out-kilos");

let input = document.getElementById("textbox");

function convert() {
  if (input.value == 0) {
    alert("Please input valid values");
  }

  inpMeters.textContent = parseInt(input.value);
  outFeet.textContent = Math.round(3.28084 * input.value * 1000) / 1000;
  inpFeet.textContent = parseInt(input.value);
  outMeters.textContent = Math.round(0.3048 * input.value * 1000) / 1000;
  inpLiters.textContent = parseInt(input.value);
  outGallons.textContent = Math.round(0.264172 * input.value * 1000) / 1000;
  inpGallons.textContent = parseInt(input.value);
  outLiters.textContent = Math.round(3.78541 * input.value * 1000) / 1000;
  inpKilos.textContent = parseInt(input.value);
  outPounds.textContent = Math.round(2.20462 * input.value * 1000) / 1000;
  inpPounds.textContent = parseInt(input.value);
  outKilos.textContent = Math.round(0.453592 * input.value * 1000) / 1000;
}

function reset() {
  input.value =
    inpMeters.textContent =
    outFeet.textContent =
    inpFeet.textContent =
    outMeters.textContent =
    inpLiters.textContent =
    outGallons.textContent =
    inpGallons.textContent =
    outLiters.textContent =
    inpKilos.textContent =
    outPounds.textContent =
    inpPounds.textContent =
    outKilos.textContent =
      0;
}

document.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    convert();
  }
});

document.onloadstart(reset());
