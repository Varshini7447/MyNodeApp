const errorHandler = (err, req, res, next) => {
  console.error(" ERROR:", err.message);
  res.status(500).send(`Internal Server Error: ${err.message}`);

};

module.exports = errorHandler;
