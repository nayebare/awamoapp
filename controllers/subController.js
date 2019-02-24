"use strict"
var Model = require('../models/addModel.js');
class addController {
    /**
       * This handles all the functions in addition action
       * @param {Object} req - client request Object
       * @param {Object} res - Server response Object
       * @returns {Object} Success or failure message
       */
    static getSub(req, res) {

        //check if payload has three paramenters
        var count = Object.keys(req.body).length;
        if (count != 3) {
            res.status(404).json('expects three paramenters');
        } else {
            if (req.body.opd1 == " " || req.body.opd2 == " " || req.body.opn == "") {
                res.status(400).json("Empty paramenters");
            }
            else {
                var result = (parseInt(req.body.opd1) - parseInt(req.body.opd2));
                res.status(200).json(result);
            }
        }
    }
}

module.exports = addController;