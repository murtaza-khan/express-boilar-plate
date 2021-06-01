const Response = require("../shared/utils/responseHandler");
const { JWT_SECRET } = require('../config');


module.exports = function (req, res, next) {
  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      return Response.UnAuthenticated(res, 'Unauthorized');
    }
    req.user = decoded;
    next();
  });
}