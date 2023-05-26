const Router = require('express');
const employee = require('./main.employee.js');

const router = Router();


router.get('/', employee.returnAllEmployees);
router.get('/:id', employee.returnEmployee);
router.post('/', employee.addEmployee);
router.put('/:id', employee.updateEmployee);
router.delete('/:id', employee.removeEmployee);



module.exports = router;