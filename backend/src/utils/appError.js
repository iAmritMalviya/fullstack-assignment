function MyError(code,message, responseCode, errorInfo ={}) {
    this.name = 'AppError';
    this.message = message;
    this.code = code;
    this.responseCode = responseCode;
    this.errorInfo = errorInfo;
    this.stack = (new Error()).stack;
}
MyError.prototype = new Error; 

module.exports = MyError
