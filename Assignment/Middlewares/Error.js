const errorHandler = (err, req, res, next) => {
  console.error(" ERROR:", err.message);
  res.status(500).send("Something went wrong!");
};

module.exports = errorHandler;
