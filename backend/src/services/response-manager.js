const { fromEnv } = require("../utils");
const _ = require("lodash");

function sendErrorResponse(response, error) {
  let err = error;
  console.log(error);
  err.message = error.message;
  let responseObject = {}; 
  if (err.name === "AppError") {
    response.status(err.responseCode || 400);
    responseObject = {
      code: err.code || "BAD_REQUEST",
      message: err.message,
      statusCode: err.responseCode || 400,
      data: {},
    };

    if (!_.isEmpty(err.errorInfo)) {
      responseObject.data.info = _.get(err, "errorInfo", null);
    }
  } else {
    response.status(500);
    if (fromEnv("NODE_ENV") === "production") {
      err = "Internal Server Error";
    } else {
      err = "Something went wrong. Our team will look into it.";
    }

    responseObject = {
      code: "INTERNAL_SERVER_ERROR",
      message: err,
      statusCode: 500,
      data: {},
    };
  }

  if (_.isEmpty(responseObject.data)) {
    responseObject.data = undefined;
  }

  response.header("Cache-Control", "no-cache, no-store, must-revalidate");
  response.header("Pragma", "no-cache");
  response.header("Expires", 0);
  response.send(responseObject);
}

function sendSuccessResponse(response, data, message, options = {}) {
  const responseCode = options.responseCode ? options.responseCode : 200;
  response.status(responseCode);

  const responseObject = { 
    code: "OK",
    message: message || "Success",
    statusCode: options.responseCode || 200,
    data,
  };

  response.header("Cache-Control", "no-cache, no-store, must-revalidate");
  response.header("Pragma", "no-cache");
  response.header("Expires", 0);

  let additional_headers = options.headers;
  additional_headers = additional_headers || {};

  for (const header_key in additional_headers) {
    response.header(header_key, additional_headers[header_key]);
  }

  response.send(responseObject); 
}

module.exports = {
  sendErrorResponse,
  sendSuccessResponse,
};
