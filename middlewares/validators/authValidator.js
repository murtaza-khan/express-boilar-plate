const register = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Name does not exist in request body'
    });
  }

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email does not exist in request body'
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      message: 'Password does not exist in the request body'
    });
  }

  if (!confirmPassword) {
    return res.status(400).json({
      success: false,
      message: 'Confirm Password does not exist in the request body'
    });
  }

  next();
}


const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email does not exist in request body'
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      message: 'Password does not exist in the request body'
    });
  }

  next();
}

const logout = (req, res, next) => {
  // const { token } = req.body;
  // if (!token) {
  //   return res.status(400).json({
  //     success: false,
  //     message: 'Token not found in the request body'
  //   })
  // }
  next();
};

module.exports = {
  register,
  login,
  logout
}
