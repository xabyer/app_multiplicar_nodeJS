//Required
const fs = require('fs');
const { resolve } = require('path');

let listarTablar = (base, limite = 10) => {

    console.log('=============================================='.red);
    console.log(`Tabla del ${base} hasta el ${limite}`.yellow);
    console.log('=============================================='.red);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i }\n`);
    }
}


let crearArchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {
        if (isNaN(base)) {
            reject(`El valor de ${base} no es un numero`);
            return;
        }

        let data = "";
        for (let i = 0; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i }\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}_hasta_${limite}.txt`, data, (err) => {
            if (err)
                reject(err)

            else
                resolve(`tabla-${base}_hasta_${limite}`.green)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTablar
}