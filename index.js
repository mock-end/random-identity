'use strict';

var clamp         = require('clamp');
var toLength      = require('to-length');
var randomNatural = require('random-natural');

var previous = [];

function gen(length) {
  var date  = (new Date()).getTime();
  var parts = ('' + date).split('').reverse();
  var count = parts.length;

  var id = '';

  for (var i = 0; i < length; ++i) {
    var index = randomNatural(0, count - 1);
    id += parts[index];
  }

  return id;
}

module.exports = function (length) {

  length = length ? toLength(length) : 8;
  length = clamp(length, 8, 32);

  var id;

  while (!id || previous.indexOf(id) >= 0) {
    id = gen(length);
  }

  return id;
};
