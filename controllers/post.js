const Post = require('../models/post');
const User = require('../models/user');

exports.createPost = (req, res) => {
  const { text } = req.body;
  const post = new Post({ text, user: req.user._id });
  post.save((err, post) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      User.findByIdAndUpdate(
        req.user._id,
        { $addToSet: { following: req.user._id } },
        { new: true },
        (err, user) => {
          if (err) {
            res.status(500).json({ error: err });
          } else {
            res.json(post);
          }
        }
      );
    }
  });
};

exports.getPostsByUser = (req, res) => {
  Post.find({ user: req.params.id })
    .populate('user', 'username')
    .exec((err, posts) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(posts);
      }
    });
};

exports.getPostsByFollowing = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      Post.find({ user: { $in: user.following } })
        .populate('user', 'username')
        .exec((err, posts) => {
          if (err) {
            res.status(500).json({ error: err });
          } else {
            res.json(posts);
          }
        });
    }
  });
};
