// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_str = marko_helpers.s;

function render(input, out) {
  var data = input;

  out.w("<h1>" +
    marko_str(input.title) +
    "</h1>");
}

marko_template._ = render;

marko_template.meta = {};
