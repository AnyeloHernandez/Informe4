import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);
// Conexion a la BD
pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;
