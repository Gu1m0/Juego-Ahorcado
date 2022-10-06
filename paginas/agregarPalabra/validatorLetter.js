const palabraAgregar = document.getElementById("palabraIngresada");
const validatorLetter= palabraAgregar.addEventListener("input", (e) => {
    const pattern = (/^[A-Z]+$/i);
    if (!pattern.test(e.data)) {
      palabraAgregar.value = palabraAgregar.value.slice(0, -1);
      swal("", "SOLO LETRAS", "warning").then(() => {
        palabraAgregar.focus();
      });
    }
  });