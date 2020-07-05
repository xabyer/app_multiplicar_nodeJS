const argv = require("./config/yargs.js").argv;
const colors = require("colors");

const { crearArchivo, listarTablar } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTablar(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => {
                console.log(err)
            });
        break;

    default:

        console.log("Comando no reconocido");
}


// console.log(argv);
/* let parametro = argv[2];
let base = parametro.split("=")[1]; */

/*  */