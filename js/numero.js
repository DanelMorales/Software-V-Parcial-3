function invertir() {
  const num = document.getElementById("valor").value;
  const resu = document.getElementById("resultado");
  let numIn = "";

  if (isNaN(num)) {
    resu.textContent = "Error, Ingrese valores validos";
    return;
  }
  for (let i = num.length - 1; i >= 0; i--) {
    numIn += num[i];
  }

  resu.textContent = `El numero invertido es ${numIn}`;
}