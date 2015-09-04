'use strict';

//  Simple example

var arr = [1,2,3];
var odds  = arr.map(e => e + 1);

function arrowThis() {
	this.fives = new Array();
	this.nums = [5,6,10,12,20];

	this.nums.forEach((v) => {
    if (v % 5 === 0)
      this.fives.push(v)
	});

	return this.fives;
};