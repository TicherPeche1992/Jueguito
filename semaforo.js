let lightIndex = 0;

function changeLight() {
  const redLight = document.getElementById("red");
  const yellowLight = document.getElementById("yellow");
  const greenLight = document.getElementById("green");

  if (lightIndex === 0) {
    redLight.style.backgroundColor = "#ff0000";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "";
  } else if (lightIndex === 1) {
    redLight.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "#ffff00";
    greenLight.style.backgroundColor = "";
  } else {
    redLight.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "#00ff00";
  }

  lightIndex = (lightIndex + 1) % 3;
}
