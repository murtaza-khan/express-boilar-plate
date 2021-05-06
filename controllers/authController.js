const { User } = require('../database');

module.exports = {

  createUser: async (req, res) => {

    const { email, name, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'confirm password do not match the password',
      })
    }

    const exist = await User.findOne({
      where: {
        email
      }
    });

    if (exist) {
      return res.status(409).json({
        success: false,
        message: 'User is already registered with the email',
      })
    }

    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      return res.status(200).json({
        success: true,
        message: 'user created successfully',
        user
      })
    }

    return res.status(400).json({
      success: false,
      message: 'there was a problem while creating the user',
    });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email, password } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email or password is incorrect",
      })
    }

    return res.status(200).json({
      success: true,
      message: 'User logged in successfully',
    });
  }
}