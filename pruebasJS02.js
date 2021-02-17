
//////////////////////////////////////////////////////////////////////////////////////////
// ejercicio 02
//////////////////////////////////////////////////////////////////////////////////////////
function fEj02Salida() {
    let entrada1Nro = document.getElementById("pNum").value
    let entrada1ArrayString = document.getElementById("pArray").value
    let entrada1Array = []
    entrada1Array = entrada1ArrayString.split(",") // convierto la cadena ingresada en array
    // creo un nuevo array para pasar como param y 
    // que la funcion no pase x arriba los valores ya
    // que se pasa a la funcion x referencia
    entrada1ArrayNuevo = entrada1Array.map((x) => x); 
    let salida1 = fEj02(entrada1ArrayNuevo, parseInt(entrada1Nro))
    document.getElementById("pEj02").innerText = `Ingreso: ${entrada1Nro} y ${entrada1Array.toString()} 
                        salida: ${salida1.toString()}` 
}

function fEj02(A, K) {
        // write your code in JavaScript (Node.js 8.9.4)
    
        if (A == [] || K <=0) {
             return A
        }
    
        let arrayNew = []
        let largo = A.length
        // hago el corrimiento K veces
        for (let j=0; j<K; j++) {
            // copio todos menos el ultimo
            for (let i=0; i<largo-1; i++) {
                arrayNew[i+1] = A[i]
            }
            // copio el ultimo al primer elemento
            arrayNew[0] = A[largo-1]
            //Copio nuevamente al array original
            for (let m=0; m<largo; m++) {
                 A[m] = arrayNew[m]
            }
        }
        return A
}
    
    





