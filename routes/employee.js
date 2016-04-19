
var express = require('express');
var router = express.Router();
var EmployeeHandler = require('../handlers/employee');

module.exports = function (models) {
    var handler = new EmployeeHandler(models);

    router.get('/getForProjectDetails', handler.getForProjectDetails);
    router.get('/getForDD', handler.getForDD);
    router.get('/bySales', handler.getBySales);
    router.get('/byDepartment', handler.byDepartment);
    router.get('/exportToXlsx/:filter',handler.exportToXlsx);
    //router.get('/exportToCsv/:filter',handler.exportToCsv);
    router.get('/getYears',handler.getYears);
    router.get('/getByMonth', handler.getSalaryByMonth);
    router.get('/getEmployeesCount', handler.getEmployeesCount);

    return router;
};