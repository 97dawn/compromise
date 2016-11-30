'use strict';
const Result = require('../../index');
const Date = require('./date');

class Dates extends Result {
  constructor(list) {
    super(list);
    this.list = this.find().list
    return this
  }
  find() {
    let dates = this.match('#Date+');
    dates.list = dates.list.map((ts) => {
      return new Date(ts.terms, ts.context)
    })
    return dates
  }
  parse() {
    return this.list.map((ts) => ts.parse())
  }
}

module.exports = Dates;