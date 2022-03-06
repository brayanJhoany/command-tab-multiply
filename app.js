const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


crearArchivo(argv.base,argv.list,argv.limit)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));