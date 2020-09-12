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