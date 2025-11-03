function cambiarEscena(escena) {
  const personaje = document.getElementById("personaje");
  switch (escena) {
    case 1:
      personaje.src = "power-up-1.png";
      document.body.style.backgroundColor = "#4a00e0";
      break;
    case 2:
      personaje.src = "power-up-2.png";
      document.body.style.backgroundColor = "#ff0000";
      break;
    case 3:
      personaje.src = "power-up-3.jpg";
      document.body.style.backgroundColor = "#0000ff";
      break;
    case 4:
      personaje.src = "power-up-4.png";
      document.body.style.backgroundColor = "#8b0000";
      break;
  }
}
