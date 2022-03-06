const fs = require('fs');
var colors = require('colors');

multiplicar = (a, b) => a * b;


// const crearArchivo = (base = 5) => { 
    
//     return new Promise((resolve, reject) => { 
//         let tableName= `tabla-${base}`;
//         let salida = "===== Tabla de multiplicar ===== \n";
//         for (let i = 1; i <= 12; i++) {
//             salida += (`${base} x ${i} = ${multiplicar(i, base)} \n`);
//         }
//         fs.writeFileSync(`${tableName}.txt`, salida);
//         resolve(`${tableName}.txt`);

//     })

// }
const crearArchivo = async (base = 5,list=false, limit=12) => { 
    
    try {
        let tableName=  `tabla-${base}.txt`;
        let salida = "===== Tabla de multiplicar ===== \n";
        let consola = "";
        for (let i = 1; i <= limit; i++) {
            consola += (`${base} ${'x'.green} ${i} ${'='.blue} ${multiplicar(i, base)} \n`);
            salida += (`${base} x ${i} = ${multiplicar(i, base)} \n`);
        }
        fs.writeFileSync(`./salida/${tableName}`, salida);
        if (list) { 
            return consola;
        }
        
        return colors.green(`${tableName}`);
    } catch (error) {
        throw error;
    }
 

}


module.exports = {
    crearArchivo
}