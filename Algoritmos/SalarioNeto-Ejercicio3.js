function calcularSalarioNeto() {
    let price = parseInt(document.getElementById('price').value); 
    let nombre = document.getElementById('nombre');
    let antiguedad = parseInt(document.getElementById('antiguedad').value);
    let horas = parseInt(document.getElementById('horas').value);

    let sueldoBase=price * horas;
    
//si la antiguedad de años supera los diez multiplicamos la antiguedad por $30
    if (antiguedad > 10) {
         sueldoBase += antiguedad * 30;
    }

    //mostramos por pantalla el resultado 
    document.getElementById("sueldoBase").innerHTML = "<h3>$" + sueldoBase.toFixed(2) + "</h3>";
    document.getElementById("nombre").innerHTML = "<h3>$" + nombre.toFixed(2) + "</h3>";
    document.getElementById("antiguedad").innerHTML = "<h3>$" + antiguedad.toFixed(2) + "</h3>";
    document.getElementById("horas").innerHTML = "<h3>$" + horas.toFixed(2) + "</h3>";
}
