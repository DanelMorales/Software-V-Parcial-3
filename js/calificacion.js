function calcuCal() {
    const par1 = parseInt(document.getElementById("parcial1").value);
    const par2 = parseInt(document.getElementById("parcial2").value);
    const par3 = parseInt(document.getElementById("parcial3").value);
    const resu = document.getElementById("resultado");
    let sem;
    let totP;
    let temS;
    if(isNaN(par1)||par1>100||par1<0||isNaN(par2)||par2>100||par2<0||isNaN(par3)||par3>100||par3<0){
        resu.textContent = "Error, Ingrese numeros validos";
        return;
    }
    totP = (par1+par2+par3)/3;
    temS = totP*0.60;
    resu.textContent = `Su nota final momentania es de: ${temS.toFixed(2)} Para pasar con D necesita: ${(61-temS).toFixed(2)}\n
    Para pasar con C necesita: ${(71-temS).toFixed(2)}\n Para pasar con B necesita: ${(81-temS).toFixed(2)}\n Para Pasar con A necesita: ${(91-temS).toFixed(2)}`;
}
