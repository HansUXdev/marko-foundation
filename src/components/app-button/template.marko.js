// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    marko_attr = marko_helpers.a,
    marko_attrs = marko_helpers.as;

function render(input, out) {
  var data = input;

  function macro_body(out, renderBody) {
    if (input.label) {
      out.w(marko_escapeXml(input.label));
    } else if (input.renderBody) {
      include_tag({
          _target: input.renderBody
        }, out);

      if (input.isDropdown) {
        out.w("&nbsp; <span class=\"caret\"></span>$");
      }
    }
  }

  if (input.type === "link") {
    out.w("<a" +
      marko_attr("href", input.href) +
      marko_attrs(input.rootAttrs) +
      ">");

    macro_body(out, function renderBody(out) {
      component_globals_tag({}, out);

      init_components_tag({}, out);

      await_reorderer_tag({}, out);
    });

    out.w("</a>");
  } else {
    out.w("<button" +
      marko_attrs(input.rootAttrs) +
      ">");

    macro_body(out, function renderBody(out) {
      component_globals_tag({}, out);

      init_components_tag({}, out);

      await_reorderer_tag({}, out);
    });

    out.w("</button>");
  }
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
