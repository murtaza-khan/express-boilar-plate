const STATUS_CODES = {
  SUCCESS: 200,
  INVALID: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  CONFLICT: 409
}

/**
 * Common (response) = {success: false | true, message: string, data?: object }
 */
let response = { success: false, message: '', statusCode: 500 };

class Response {

  /**
   * will be triggered only in case of successful response
   * @param {Response} res
   * @param {String} message 
   * @param {Object} data 
   * @returns 
   */
  static Success(res, message, data) {
    response.success = true;
    response.message = message;
    response.statusCode = STATUS_CODES.SUCCESS;

    if (data) {
      response.data = data;
    }

    return res.status(STATUS_CODES.SUCCESS).json(response);
  }

  /**
   * Will be triggered in case entity is not found
   * @param {Response} res 
   * @param {String} message 
   * @returns 
   */
  static NotFound(res, message) {
    response.message = message;
    response.statusCode = STATUS_CODES.NOT_FOUND;
    return res.status(STATUS_CODES.NOT_FOUND).json(response);
  }

  /**
   * Will be called in case of invalid request body
   * @param {Response} res 
   * @param {String} message 
   * @returns 
   */
  static InValid(res, message) {
    response.message = message;
    response.statusCode = STATUS_CODES.INVALID;
    return res.status(STATUS_CODES.INVALID).json(response);
  }

  /**
   * Will be called in case of invalid request body
   * @param {Response} res 
   * @param {String} message 
   * @returns 
   */
  static UnAuthenticated(res, message) {
    response.message = message;
    response.statusCode = STATUS_CODES.UNAUTHORIZED;
    return res.status(STATUS_CODES.UNAUTHORIZED).json(response);
  }

  /**
   * Will be called in case of invalid request body
   * @param {Response} res
   * @param {String} message
   * @returns
   */
  static Conflict(res, message) {
    response.message = message;
    response.statusCode = STATUS_CODES.CONFLICT;
    return res.status(STATUS_CODES.CONFLICT).json(response);
  }

  /**
   * Will be called in case of server error
   * @param {Response} res
   * @param {String} message
   * @param {Error} error
   * @returns
   */
  static InternalServerError(res, message, error) {
    response.message = message;
    response.statusCode = STATUS_CODES.SERVER_ERROR;
    response.data = {
      error
    };
    return res.status(STATUS_CODES.SERVER_ERROR).json(response);
  }
}

module.exports = Response;