const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
  
    new winston.transports.File({ filename: './errores/error.log', level: 'error' }),
    //new winston.transports.File({ filename: './errores/combined.log' }),
  ],
});

const array = ['Palo', 'Arco', 'Bola']

const funcion = (inside) => {
    if(array.includes(inside)){
        return `${array} incluye ${inside}`
    }
    throw new Error(`${array} no incluye ${inside}`)
}

const algo = 'Palos';

try {
    console.log(funcion(algo));
} catch (error) {
    logger.error(error);
    console.log(error);
}
