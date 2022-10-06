let btnGuarYEmp= document.querySelector(".boton1")
let palabrasJuego = [
      "PEDRO",
      "HARINA",
      "JUGUETE",
      "TECLADO",
      "ALGODON",
      "ESPEJO",
      "PANADERO",
      "EDIFICIO",
      "TETERA",
      "SALAME",
      "EJERCITO",
      "TORNILLO",
      "TOMATE",
      "CHUPETE",
      "ZAPATO",
      "YOGURT",
      "TORTILLA",
      "SOMBRERO",
      "NARANJA",
      "PAYASO",
      "ESCOBA"
    ];
    if (localStorage.palabrasJuego24 == null) {
      localStorage.setItem("palabrasJuego24", JSON.stringify(palabrasJuego));
    }
    
    palabrasJuego = JSON.parse(localStorage.getItem("palabrasJuego24"));

const agregarPalabra = ()=> {
    const palabraAgregar = document.getElementById("palabraIngresada");
    if (palabraAgregar.value == "") {
      swal("DEBES AGREGAR UNA PALABRA", "", "error").then(() => {
        palabraAgregar.focus();
      });
    } else {
      palabrasJuego.push(palabraAgregar.value.toUpperCase());
      localStorage.setItem("palabrasJuego24", JSON.stringify(palabrasJuego));
      palabraAgregar.value = "";
      window.location.href = "../Juego/juego.html";
    }
  }
  btnGuarYEmp.addEventListener("click", agregarPalabra)

  export {agregarPalabra,palabrasJuego}