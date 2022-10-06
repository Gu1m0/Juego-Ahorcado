const canva = document.querySelector("#canvas");
const ctx = canva.getContext("2d");

const dibujarLineas = function (x1, y1, x2, y2,color) {
    const canva = document.querySelector("#canvas");
    const ctx = canva.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = `${color}`;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2); //lINEA
    ctx.stroke();
};

const dibujarCirculo = function () {
    const canva = document.querySelector("#canvas");
    const ctx = canva.getContext("2d");
    ctx.beginPath();
    ctx.arc(220, 130, 30, 0, 2 * Math.PI); //CIRCULO
    ctx.stroke();
};

export {canva,ctx,dibujarLineas,dibujarCirculo}
