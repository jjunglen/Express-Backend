const errorHandler = (err, req, res, next) => {
    console.log("Error Message:", err.message)

    const errorStatus = err.status || 500;

    res.status(errorStatus).json({
        error: err.message || "Server side issue on our end",
        details: errorStatus,
    })
}

module.exports = errorHandler;