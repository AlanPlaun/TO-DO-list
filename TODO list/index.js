//pone los elementos ya ingresados
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var hora = new Date(Date.now());
    var txthora = document.createTextNode(hora.getHours() + ":" + hora.getMinutes() + ", " + hora.toDateString());
    var p = document.createElement("p");
    p.className = "hora";
    p.appendChild(txthora);
    myNodelist[i].appendChild(p)

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// borra
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
//cambia estado a checked
var list = document.querySelector('ul');
var horaDeTerminación = new Date(Date.now());
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        txthora = document.createTextNode(horaDeTerminación.getHours() + ":" + horaDeTerminación.getMinutes() + ", " + horaDeTerminación.toDateString());
        p.appendChild(txthora);
        ev.target.appendChild(p)
    }
}, false);

//crea elemento y chequea que se haya ingresado
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Tenes que escribir algo!!!!!!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var hora = new Date(Date.now());
    var txthora = document.createTextNode(hora.getHours() + ":" + hora.getMinutes() + ", " + hora.toDateString());
    var p = document.createElement("p");
    p.className = "hora";
    p.appendChild(txthora);
    li.appendChild(p)

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}