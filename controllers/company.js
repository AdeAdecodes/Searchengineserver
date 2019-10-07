import db from '../migration/database';

/**
 * @class customerController
 *
 * @description Specifies which method handles a given request for a specific endpoint
 *
 * @exports customerController
 */

class customerController {
  /**
   * get customer
   * @param {object} request express request query
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof customerController
   */

  static async getCompany(request, response) {
    const { customerId } = request.query;
    if (typeof customerId === 'undefined') {
      const text = 'SELECT * FROM company';
      await db.query(text, (err, result) => {
        if (err) {
          response.status(400).json({
            status: 400,
            data: err.sqlMessage,
          });
        } else {
          response.status(200).json({
            status: 200,
            data: result,
          });
        }
      });
    } else {
      const text = `SELECT * FROM company WHERE customerId=${customerId}`;
      await db.query(text, (err, result) => {
        if (err) {
          response.status(400).json({
            status: 400,
            data: err.sqlMessage,
          });
        }
        if (result[0] === undefined) {
          response.status(400).json({
            status: 400,
            message: 'customer not found',
          });
        } else {
          response.status(200).json({
            status: 200,
            data: result[0],
          });
        }
      });
    }
  }
}

export default customerController;
