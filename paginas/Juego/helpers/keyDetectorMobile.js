import {
  canva,
  ctx,
  dibujarCirculo,
  dibujarLineas,
} from "../../Juego/helpers/canvas.js";
import { palabrasJuego } from "../../agregarPalabra/agregarPalabra.js";

const inputInvisible = document.querySelector(".inputInvisible");
const child = document.getElementsByClassName("seteoInput");
let keyDetectorMobile;
let palabrasErradas = document.getElementById("letrasIngresadas");
let cantidad = palabrasJuego.length;
let aleatorio = Math.floor(Math.random() * cantidad);
let palabraActualJuego = palabrasJuego[aleatorio];

const inputMobileListener = inputInvisible.addEventListener(
  "input",
  function keyDetectorMobile(e) {
    let letraEnMayus = e.data.toUpperCase();
    const pattern2 = /^[A-Z]+$/i;
    if (
      pattern2.test(letraEnMayus) &&
      palabrasErradas.value.length < 9 &&
      !palabraActualJuego.includes(letraEnMayus) &&
      !palabrasErradas.value.includes(letraEnMayus)
    ) {
      palabrasErradas.value += letraEnMayus;
      switch (palabrasErradas.value.length) {
        case 1:
          canva.style.backgroundImage = "none";
          dibujarLineas(80, 500, 80, 20, "black"); //LINEA1
          break;
        case 2:
          dibujarLineas(80, 23, 220, 23, "black"); //LINEA2
          break;
        case 3:
          dibujarLineas(220, 20, 220, 100, "black"); //LINEA3
          break;
        case 4:
          dibujarCirculo(); //CIRCULO
          break;
        case 5:
          dibujarLineas(220, 160, 220, 260, "black"); //LINEA4
          break;
        case 6:
          dibujarLineas(220, 180, 250, 220, "black"); //BRAZO DERECHA
          break;
        case 7:
          dibujarLineas(220, 180, 190, 220, "black"); //BRAZO IZQUIERDA
          break;
        case 8:
          dibujarLineas(220, 260, 250, 310, "black"); //PIERNA DERECHA
          break;
        case 9:
          dibujarLineas(220, 260, 190, 310, "black"); //PIERNA IZQUIERDA
          canva.style.filter = "blur(8px)";
          dibujarLineas(0, 0, 300, 500, "red"); //LINEA CRUZ1
          dibujarLineas(0, 500, 300, 0, "red"); //LINEA CRUZ2
          swal(
            "!PERDISTE!",
            `La palabra era: ⇒${palabraActualJuego}⇐`,
            "error"
          );
          document.removeEventListener("input", keyDetectorMobile, false);
          let loseSound = new Audio("../../Sonidos/Lose.mp3");
          loseSound.play();
          inputInvisible.style.display = "none";
          break;
      }
    } else if (palabraActualJuego.includes(letraEnMayus)) {
      let splitPalabraActualJuego = palabraActualJuego.split("");
      let tieneLetra = 0;
      splitPalabraActualJuego.filter((letra, posicion) => {
        letra.indexOf(letraEnMayus) !== -1 &&
          (child[posicion].value = letraEnMayus);
        child[posicion].value.length == 1 && tieneLetra++;
        if (tieneLetra == splitPalabraActualJuego.length) {
          document.removeEventListener("input", keyDetectorMobile, false);
          inputInvisible.style.display = "none";
          let winSound = new Audio("../../Sonidos/Win.mp3");
          winSound.play();
          canva.style.filter = "blur(1px)";
          canva.width = canva.width;
          dibujarLineas(0, 457, 300, 457, "black");
          canva.style.background =
            "url(../../imagenes/baileGanador.gif) no-repeat bottom";
          canva.style.backgroundSize = "250px 250px";
        }
      });
    }
  }
);

export {
  inputMobileListener,
  keyDetectorMobile,
  inputInvisible,
  palabraActualJuego,
  palabrasErradas,
  child
};
