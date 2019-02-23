
"use strict"
var Model = require('../models/addModel.js');
class addController {
    /**
       * This handles all the functions in addition action
       * @param {Object} req - client request Object
       * @param {Object} res - Server response Object
       * @returns {Object} Success or failure message
       */
    static getSum(req, res) {
        if (req.body.opd1 == "" || req.body.opd2 == "") {
            res.status(404).json("sent empty paramenters");
        }
        else {
            var sum = (parseInt(req.body.opd1) + parseInt(req.body.opd2));
             console.log(sum)
            res.status(200).json(sum);
        }
    }
}

module.exports = addController;