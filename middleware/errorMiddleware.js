const errorHandler = (err, req, res, next) => {
  console.log(res.statusCode);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

export default errorHandler;
