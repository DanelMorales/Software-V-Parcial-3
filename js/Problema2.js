function determinarDiaMes() {
    let usuario = parseInt(document.getElementById("valorNum").value);

    if (usuario < 1 || usuario > 365) {
        document.getElementById("resultado").textContent = "No existe un día para este número";
        return;
    }
    if (usuario >= 1 && usuario <= 31) {
        document.getElementById("resultado").textContent =
            "corresponde al " + usuario + " de enero";
        return;
    }

    if (usuario >= 32 && usuario <= 59) {
        let dia = usuario - 31;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de febrero";
        return;
    }
    if (usuario >= 60 && usuario <= 90) {
        let dia = usuario - 59;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de marzo";
        return;
    }
    if (usuario >= 91 && usuario <= 120) {
        let dia = usuario - 90;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de abril";
        return;
    }
    if (usuario >= 121 && usuario <= 151) {
        let dia = usuario - 120;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de mayo";
        return;
    }
    if (usuario >= 152 && usuario <= 181) {
        let dia = usuario - 151;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de junio";
        return;
    }
    if (usuario >= 182 && usuario <= 212) {
        let dia = usuario - 181;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de julio";
        return;
    }
    if (usuario >= 213 && usuario <= 243) {
        let dia = usuario - 212;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de agosto";
        return;
    }
    if (usuario >= 244 && usuario <= 273) {
        let dia = usuario - 243;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de septiembre";
        return;
    }
    if (usuario >= 274 && usuario <= 304) {
        let dia = usuario - 273;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de octubre";
        return;
    }
    if (usuario >= 305 && usuario <= 334) {
        let dia = usuario - 304;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de noviembre";
        return;
    }
    if (usuario >= 335 && usuario <= 365) {
        let dia = usuario - 334;
        document.getElementById("resultado").textContent =
            "corresponde al " + dia + " de diciembre";
        return;
    }
}