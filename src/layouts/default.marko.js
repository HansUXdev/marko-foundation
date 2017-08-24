// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    site_meta_template = marko_loadTemplate(require.resolve("../components/site-meta/template.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    site_meta_tag = marko_loadTag(site_meta_template),
    marko_escapeXmlAttr = marko_helpers.xa,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  var root = '../public/assets';

  out.w("<!doctype html><html class=\"no-js\" lang=\"en\"><head>");

  site_meta_tag({
      title: "Foundation for Sites",
      keyword: "HTML,CSS,XML,JavaScript",
      author: "John Doe"
    }, out);

  out.w("<link rel=\"icon\" href=\"public/assets/img/favicon.ico\"><link rel=\"stylesheet\" href=\"" +
    marko_escapeXmlAttr(root) +
    "/css/app.css\"></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: input.body
    }, out);

  out.w("<script src=\"" +
    marko_escapeXmlAttr(root) +
    "/js/app.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../components/site-meta/template.marko",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
