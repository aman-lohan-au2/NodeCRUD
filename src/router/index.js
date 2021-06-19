const express = require('express');

const router = express.Router();

const studentController = require('../controller/student');


router.route('/student').post(studentController.add)     


module.exports = router;