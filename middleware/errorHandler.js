const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                tittle: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                tittle: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No Error");
            break;

    }

};

module.exports = errorHandler;