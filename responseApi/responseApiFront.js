/**
 * @desc    This file contain Success and Error response for sending to client / user
 * @author  Ariel Bailón
 * @since   2022
 */

/**
 * @desc    Send any success response
 *
 * @param   {number} code
 * @param   {string} status
 * @param   {string} message
 * @param   {object | array} data
 */
 exports.success = (statusCode, data, status = "OK", message = "Transacción realizada correctamente") => {
  return {
    code: statusCode,
    status,
		message,
    data
  };
};

/**
 * @desc    Send any error response
 *
 * @param   {number} statusCode
 * @param   {string} status
 * @param   {string} message
 */
 exports.error = (statusCode, message, status = "ERROR") => {
  return {
    code: statusCode,
    status,
		message,
  };
};

/**
 * @desc    Send any validation response
 *
 * @param   {object | array} errors
 */
 exports.validation = (statusCode, message = "Error de validación", status = "ERROR") => {
  return {
    code: statusCode,
    status,
		message,
  };
};