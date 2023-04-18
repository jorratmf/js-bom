let calorias = 0;
let tiempo = 0;
let intervalo;

// Contadores
function empezar() {
  intervalo = setInterval(function () {
    tiempo++;
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    calorias += 0.107; // 192 calorías en 30 minutos es igual a 0.107 calorías por segundo
    document.getElementById("calorias").innerHTML =
      calorias.toFixed(2) + " calorías quemadas";
    document.getElementById(
      "tiempo"
    ).innerHTML = `${minutos} minutos y ${segundos} segundos`;
    if (tiempo == 1800) {
      clearInterval(intervalo);
    }
  }, 1000);

 // Fecha
 setTimeout(function () {
    let fechaActual = new Date().toLocaleDateString();
    document.getElementById("fecha").innerHTML = "Hoy es: " + fechaActual;
  }, 3000);

  // Boton empezar
  document.getElementById("empezar-btn").disabled = true;
  document.getElementById("pausar-btn").disabled = false;
  document.getElementById("reset-btn").disabled = false;
}

  // Boton reset
function pausar() {
  clearInterval(intervalo);
  document.getElementById("empezar-btn").disabled = false;
  document.getElementById("pausar-btn").disabled = true;
  document.getElementById("reset-btn").disabled = false;
}

// Boton reset
function reset() {
  clearInterval(intervalo);
  calorias = 0;
  tiempo = 0;
  document.getElementById("calorias").innerHTML = "0 calorías quemadas";
  document.getElementById("tiempo").innerHTML = "0 minutos y 0 segundos";
  document.getElementById("fecha").innerHTML = "";
  document.getElementById("empezar-btn").disabled = false;
  document.getElementById("pausar-btn").disabled = false;
  document.getElementById("reset-btn").disabled = true;
}