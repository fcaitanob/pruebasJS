//////////////////////////////////////////////////////////////////////////////////////////
// ejercicio 04
//////////////////////////////////////////////////////////////////////////////////////////
function fEj04Salida() {
    let entrada1Nro = document.getElementById("pNum").value
    let entrada1ArrayString = document.getElementById("pArray").value

    let obj = new Rana(entrada1ArrayString, entrada1Nro) 
    obj.pasarLaRana()
    document.getElementById("pEj04").innerText = obj.toString() 
}



//////////////////////////////////////////////////////////////////////////////////////////
//hereda de EjercicioJS que esta en pruebasJSSC.js, se incluye en el html
class Rana extends EjercicioJS { 
    constructor(arrayAStr, nroA) {
      super(arrayAStr, nroA)
    }

    ////////////////////////////////////////
    toString() {
        return super.toString() + 
            ` salida: ${this.pasarLaRana().toString()}`
    }

    ////////////////////////////////////////
    pasarLaRana() {
        let X = super.arrayA()[0]
        let Y = super.arrayA()[1]
        let D = super.arrayA()[2]

        let distancia = Y - X
        let cntSaltosFloat = distancia / D
        let cntSaltosInt = Math.trunc(cntSaltosFloat)
        
        if (cntSaltosFloat > cntSaltosInt) {
            cntSaltosInt++
        }
        return cntSaltosInt
    }
    ////////////////////////////////////////

} // fin de clase







