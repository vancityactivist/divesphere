var express = require('express');
var router = express.Router();

const navItems = [
  {text: 'Home', href: '/'},
  {text: 'Dive Sites', href: '/divesites'},
  {text: 'Charters', href: '/charters'},
  {text: 'Partners', href: '/partners'},
  {text: 'Login', href: '/login'},
  {text: 'Sign Up', href: '/signup'},
  {text: 'About Us', href: '/aboutus'},
  {text: 'Contact', href: '/contact'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DiveSphere', navItems });
});

module.exports = router;
