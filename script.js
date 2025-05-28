// Simulación simple de recomendación
const viento = 18;  // nudos
const olas = 1.2;   // metros

let recomendacion = "Revisa las condiciones manualmente";

if (viento > 15) {
  recomendacion = "🌬️ Hoy es un buen día para Kitesurf";
} else if (olas > 1) {
  recomendacion = "🏄‍♂️ Hoy es un buen día para Surf";
} else {
  recomendacion = "🥾 Día ideal para Senderismo";
}

document.addEventListener("DOMContentLoaded", () => {
  const seccion = document.getElementById("recomendacion");
  if (seccion) {
    seccion.querySelector("p").textContent = recomendacion;
  }
});
