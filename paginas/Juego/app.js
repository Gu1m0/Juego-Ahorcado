import { canva, ctx, dibujarLineas,} from "./helpers/canvas.js";
import {
  inputInvisible,
  inputMobileListener,
  palabraActualJuego,
} from "./helpers/keyDetectorMobile.js";

inputInvisible.addEventListener("focus", inputMobileListener);
document.addEventListener("keypress", (e)=>inputInvisible.focus())

const divInputs = document.querySelector(".letraCorrecta");

(function cantidadLetrasPalabra() {
  let contador = 0;
  while (contador < palabraActualJuego.length) {
    divInputs.innerHTML += `<div class="seteoDiv">
    <input type="text" class="seteoInput" maxlength="1" readonly></div>`;
    contador++;
  }
})();
dibujarLineas(0, 497, 300, 497, "black");