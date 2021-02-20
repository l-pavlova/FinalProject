const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('./middlewares/authMiddleware');
const { globalAdapter } = require('./middlewares/databaseMiddleware')

router.get('/', isAuthenticated, (req, res) => {
    res.send('It`s working bakooooo');
  });

router.use('/auth', globalAdapter, require('./controllers/authApi'))
router.use('/users', isAuthenticated, globalAdapter, require('./controllers/usersApi'));
router.use('/group', isAuthenticated, globalAdapter, require('./controllers/groupApi'));
router.use('/messages', isAuthenticated, globalAdapter, require('./controllers/messagesApi'));

module.exports = router;
