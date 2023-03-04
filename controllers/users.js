const User = require('../models/user');

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .populate('following', 'username')
    .populate('following', 'username')
    .exec((err, user) => {
      if (err) {
        res.status(500).json({ error: err });
      } else if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    });
};
