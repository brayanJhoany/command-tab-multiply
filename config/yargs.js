const argv = require('yargs')
    .options({
        'base': {
            alias: 'b',
            demandOption: true,
            type: 'number',
            describe: 'Base de la tabla de multiplicar'
        },
        'limit': {
            alias: 'lm',
            default: 12,
            type: 'number',
            describe: 'Limite de la tabla de multiplicar'
        },
        'list': {
            alias: 'l',
            type: 'boolean',
            default: false,
            describe: 'Listar las tablas de multiplicar'
        },
    })
    .check((argv, options) => { 
        if (argv.base < 0 || argv.limit < 0) {
            throw new Error('El numero debe ser positivo');
        }
        if (isNaN(argv.base) || isNaN(argv.limit) ) { 
            throw new Error('El valor no es un numero');
        }
        return true;
    })
    .help()
    .argv;

module.exports = argv