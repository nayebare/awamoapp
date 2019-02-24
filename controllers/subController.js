
"use strict"
var Model = require('../models/addModel.js');
class subController {
    /**
       * This handles all the functions in addition action
       * @param {Object} req - client request Object
       * @param {Object} res - Server response Object
       * @returns {Object} Success or failure message
       */
    static getSub(req, res) {
        if (req.body.opd1 == "" || req.body.opd2 == "") {
            res.status(400).json("Empty paramenters");
        }
        else {
            var sum = (parseInt(req.body.opd1) - parseInt(req.body.opd2));
            res.status(200).json(sum);
        }
    }
}

module.exports = subController;