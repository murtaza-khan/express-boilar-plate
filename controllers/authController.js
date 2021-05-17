const { models: { User } } = require('../database');
const Response = require('../shared/utils/responseHandler');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, BCRYPT_SALT_ROUNDS } = require('../config');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {

  const { email, name, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return Response.InValid(res, 'confirm password do not match the password');
  }

  try {
    const exist = await User.findOne({
      where: {
        email
      }
    });

    if (exist) {
      return Response.Conflict(res, 'User is already registered with the email');
    }
    const encryptedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword
    });

    if (user) {
      return Response.Success(
        res,
        'user created successfully',
        {
          user
        }
      );
    }
  } catch (error) {
    return Response.InternalServerError(res, 'there was a problem while creating the user', error);
  }
};

const login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return Response.NotFound(res, 'Email or password is invalid');
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return Response.NotFound(res, 'Email or password is invalid');
  }

  const token = jwt.sign(JSON.stringify(user), JWT_SECRET);

  return Response.Success(res, 'Logged in successfully', {
    token,
    user
  });
};

module.exports = {
  createUser,
  login
}