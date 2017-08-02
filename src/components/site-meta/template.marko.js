// Compiled using marko@4.4.21 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_str = marko_helpers.s;

function render(input, out) {
  var data = input;

  out.w("<meta charset=\"utf-8\"><meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>" +
    marko_str(input.title) +
    "</title><meta name=\"description\" content=\"" +
    marko_str(input.description) +
    "\"><meta name=\"keywords\" content=\"" +
    marko_str(input.keywords) +
    "\"><meta name=\"author\" content=\"" +
    marko_str(input.author) +
    "\">");
}

marko_template._ = render;

marko_template.meta = {};
