function fPrueba() {
    document.getElementById("pEj01").innerText = 'Resultado ejercicio 01'
}

//////////////////////////////////////////////////////////////////////////////////////////
// ejercicio 03
//////////////////////////////////////////////////////////////////////////////////////////
function fEj03Salida() {
    let entrada1Nro = document.getElementById("pNum").value
    let entrada1ArrayString = document.getElementById("pArray").value
    let entrada1Array = []
    entrada1Array = entrada1ArrayString.split(",") // convierto la cadena ingresada en array
    // creo un nuevo array para pasar como param y 
    // que la funcion no pase x arriba los valores ya
    // que se pasa a la funcion x referencia
    entrada1ArrayNuevo = entrada1Array.map((x) => x)

    let obj = new ArrayDesparejo(entrada1Array, entrada1Nro) 
    obj.elementoDiferente()
    document.getElementById("pEj03").innerText = obj.toString() 
}

//////////////////////////////////////////////////////////////////////////////////////////
class ArrayDesparejo {
    constructor(arrayA, nroA) {
      this.Aoriginal = arrayA
      this.A  =  arrayA.map((x) => x) // duplico el array 
      this.Nro = nroA
      this.largo = arrayA.length
      this.arrayElmDiferente = 0
    }

    ////////////////////////////////////////
    toString() {
        return `Ingreso: ${this.Nro} y ${this.Aoriginal.toString()} 
        salida: ${this.arrayElmDiferente.toString()}`
    }

    ////////////////////////////////////////
    elementoDiferente() {
        // si tiene un solo elemento lo devuelvo
        if (this.largo==1) { return this.A[0] }

        // ordeno el array
        this.A.sort()

        //console.log(`ordenado: ${A}`)
        // identifico el diferente
        for (let j=0; j<this.largo-1; j=j+2) {
            if (this.A[j] != this.A[j+1]) {
                this.arrayElmDiferente = this.A[j]
                return this.arrayElmDiferente
            }
        }
        // si llega hasta aca el diferente es el ultimo
        this.arrayElmDiferente = this.A[this.largo-1]
        return this.arrayElmDiferente
    }
    ////////////////////////////////////////

} // fin de clase







