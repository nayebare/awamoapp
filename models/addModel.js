/**
 * Author Micheal Nayebare 2019
 * Additional model- for data handling
 */

"use strict"

class addModel {
   
    constructor(opd1,opd2)
    {
        this.opd1 = opd1;
        this.opd2 = opd2;
    }

    getOpd1()
    {
        return this.opd1;
    }

    setOpd1(opd1)
    {
        return this.opd1=opd1;
    }

    getOpd2()
    {
        return this.opd2;
    }

    setOpd2(opd2)
    {
        return this.opd2=opd2;
    }

    toString() {
        return `${this.opd1}, ${this.opd2}`;
    }
}

module.exports = addModel;



