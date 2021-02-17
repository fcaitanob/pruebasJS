//////////////////////////////////////////////////////////////////////////////////////////
// Superclass
//////////////////////////////////////////////////////////////////////////////////////////
class EjercicioJS { 
    constructor(arrayAStr, nroA) {
      let arrayA = []
      arrayA = arrayAStr.split(",") // convierto la cadena ingresada en array
      this.Aoriginal = arrayA
      this.A  =  arrayA.map((x) => x) // duplico el array 
      this.Nro = nroA
      this.largo = arrayA.length
    }

    arrayA() {return this.A}

    //.................................
    toString() {
        return `Ingreso: ${this.Nro} y ${this.Aoriginal.toString()} `
    }

    //.................................

} // fin de clase








