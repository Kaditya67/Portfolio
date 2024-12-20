const User = require('../models/user.models.js');   
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;   
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
     
    const user = await User.findOne({ email });

    if (!user) {
      console.log('No user found!');
      return res.status(404).json({ message: 'User not found!' });
    }
     
    const isMatch = await user.comparePassword(password);

    if (isMatch) {
      console.log('Password is correct!');
       
      const payload = { id: user._id, email: user.email, name: user.name };
 
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      return res.status(200).json({
        message: 'Login successful!',
        user: payload,
        token: token,
      });
    } else {
      console.log('Incorrect password.');
      return res.status(400).json({ message: 'Incorrect password.' });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    return res.status(500).json({ message: 'Server error, please try again later.' });
  }
};

module.exports = loginUser;
