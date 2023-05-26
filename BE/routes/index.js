const express = require('express');
const router = express.Router();
router.use(express.json())


const employeeRoutes = require("./employee/routing.employee");

router.use('/employee', employeeRoutes);


module.exports = router;