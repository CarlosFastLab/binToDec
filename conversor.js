function numCheck(event) {
    var n = event.keyCode || event.which;
    if((n != 48) && (n != 49) && (n != 13)) {
        event.preventDefault();
        window.alert("Por favor use apenas os digitos 1 e 0 para este campo")
        return false
    } else {
        return true
    }
}


function binToDec(bin) {
    bin = document.getElementById("campoBin").value;
    let dec = 0;
    console.log("Elemento capturado");
    
    for (let i = bin.length-1; i >= 0; i--) {
        dec += parseInt(bin[i]) * Math.pow(2, bin.length-1-i);     
    }

    document.getElementById("result").value = dec;
    return dec;
}