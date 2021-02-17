function fPrueba() {
    document.getElementById("pEj01").innerText = 'Resultado ejercicio 01'
}

//////////////////////////////////////////////////////////////////////////////////////////
// ejercicio 01
//////////////////////////////////////////////////////////////////////////////////////////
function fEj01Salida() {
    let entrada1 = document.getElementById("pNum").value
    let salida1 = fEj01(parseInt(entrada1))
    document.getElementById("pEj01").innerText = `Ingreso: ${entrada1} salida: ${salida1}` 
}
function fEj01(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    // paso a binario en un string
    let binarioStr = N.toString(2)
    let cntZero = 0
    let cntZeroMax = 0
    let unoInicial = false
    let largo = binarioStr.length

    for (i=0; i< largo; i++) {
        if (binarioStr[i]=="0") {
            if (unoInicial) {
                cntZero++
            }            
        } else {
            if (unoInicial) {
                if (cntZero > cntZeroMax) {
                    cntZeroMax = cntZero
                }
                cntZero = 0
            }
            unoInicial = true
        }
    }
    // console.log("maximo: " + cntZeroMax)
    // console.log("unoInicial: " + unoInicial)
    // console.log("cntzero: " + cntZero)
    // console.log("binarioStr: " + binarioStr)
    // console.log("binarioStr[1]: " + binarioStr[1])
    // console.log("largo: " + largo)
    return cntZeroMax
}







