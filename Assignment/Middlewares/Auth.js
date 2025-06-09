const auth = (req, res, next) => {
  const token = req.headers['validtoken'];

  if (token !== 'varshi123') {
    return res.status(401).send("Unauthorized: Token missing or invalid");
  }

  next(); 
};

module.exports = auth;
