import debug from 'debug';
import pool from './database';

const Debug = debug('http');
/**
  * @function query
  * @description queries the db with the specified string
  * @param {string} queryString - the query string
  * @returns {*} nothing
  */
const query = async (queryString) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    Debug('Connected to database');
    connection.query(queryString, (error) => {
      connection.release();
      if (error) throw error;
    });
  });
};

export default query;
