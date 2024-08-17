module.exports = {
  "INVALID_REQUEST_DATA": {
    "code": "BAD_REQUEST",
    "message": "Bad request",
    "statusCode": 400
  },
  "BAD_REQUEST": {
    "code": "BAD_REQUEST",
    "message": "Bad request",
    "statusCode": 400
  },
  "UNAUTHORIZED": {
    "code": "UNAUTHORIZED",
    "message": "You're unauthorized to access this area",
    "statusCode": 401
  },
  "NO_AUTH_HEADER": {
    "code": "NO_AUTH_HEADER",
    "message": "Forbidden",
    "statusCode": 403
  },
  "INVALID_AUTH_HEADER": {
    "code": "INVALID_AUTH_HEADER",
    "message": "Invalid auth header",
    "statusCode": 400
  },
  "ACCESS_TOKEN_EXPIRED": {
    "code": "ACCESS_TOKEN_EXPIRED",
    "message": "Session expired",
    "statusCode": 401
  },
  "INVALID_ACCESS_TOKEN": {
    "code": "INVALID_ACCESS_TOKEN",
    "message": "Invalid access token",
    "statusCode": 401
  },
  "ACCESS_TOKEN_TAMPERED": {
    "code": "ACCESS_TOKEN_TAMPERED",
    "message": "Token tampered",
    "statusCode": 401
  },
  "RESETPASSWORD": {
    "code": "RESETPASSWORD",
    "message": "Password reset required",
    "statusCode": 401
  },
  "INVALID_CREDENTIALS": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid login credentials",
    "statusCode": 400
  },
  "USER_DEACTIVATED": {
    "code": "USER_DEACTIVATED",
    "message": "User is deactivated",
    "statusCode": 400
  },
  "NOT_FOUND": {
    "code": "NOT_FOUND",
    "message": "Not found",
    "statusCode": 404
  },
  "PASSWORD_RESET_REQUIRED": {
    "code": "PASSWORD_RESET_REQUIRED",
    "message": "Password reset required",
    "statusCode": 401
  },
  "TOS_AGREEMENT_REQUIRED": {
    "code": "TOS_AGREEMENT_REQUIRED",
    "message": "Terms of service must be agreed",
    "statusCode": 401
  },
  "INTERNAL_SERVER_ERROR": {
  "code": "INTERNAL_SERVER_ERROR",
    "message": "Some error occurred",
    "statusCode": 500
  },
  "USER_NOT_FOUND": {
    "code": "USER_NOT_FOUND",
    "message": "User not found",
    "statusCode": 400
  },
  "NO_CHANGES_MADE": {
    "code": "NO_CHANGES_MADE",
    "message": "No changes made",
    "statusCode": 400
  },
  "NOT_ALLOWED": {
    "code": "NOT_ALLOWED",
    "message": "Not allowed to perform this action",
    "statusCode": 400
  },
  "TOO_MANY_ATTEMPTS": {
    "code": "TOO_MANY_ATTEMPTS",
    "message": "Too many attempts, try again later",
    "statusCode": 429
  },
  "CONFLICT": {
    "code": "CONFLICT",
    "message": "Entry already exists, please change the payload",
    "statusCode": 409
  },
  "FILE_TYPE_NOT_ALLOWED": {
    "code": "FILE_TYPE_NOT_ALLOWED",
    "message": "File type not allowed.",
    "statusCode": 400
  },
  "REQUEST_CONFLICT": {
    "code": "E_REQUEST_CONFLICT",
    "message": "Can't perform the request",
    "statusCode": 409
  }
}