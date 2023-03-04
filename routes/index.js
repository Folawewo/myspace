const express = require('express');
const router = express.Router();

const {
  getUser,
  createUser,
  followUser,
  unfollowUser,
} = require('../controllers/users');

const {
  createPost,
  getPostsByUser,
  getPostsByFollowing,
} = require('../controllers/posts');

const { authenticate } = require('../middlewares/auth');

router.get('/users/:id', getUser);
router.post('/users', createUser);
router.post('/users/:id/follow', authenticate, followUser);
router.post('/users/:id/unfollow', authenticate, unfollowUser);

router.post('/posts', authenticate, createPost);
router.get('/posts/user/:id', getPostsByUser);
router.get('/posts/following/:id', getPostsByFollowing);

module.exports = router;
