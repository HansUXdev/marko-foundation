// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    default_template = marko_loadTemplate(require.resolve("../layouts/default.marko")),
    app_header_template = marko_loadTemplate(require.resolve("../components/app-header/template.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_header_tag = marko_loadTag(app_header_template),
    app_hello_tag = marko_loadTag(require("../components/app-hello/renderer")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marketing_footer_template = marko_loadTemplate(require.resolve("../components/marketing-footer/template.marko")),
    marketing_footer_tag = marko_loadTag(marketing_footer_template),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  {
  	var title = "Welcome to Foundation with Marko";
    var colors = [
      'red',
      'blue',
      'green'
    ]
  };

  include_tag({
      _target: default_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"row\"><div class=\"large-12 columns\">");

            app_header_tag({
                title: title
              }, out);

            out.w("</div></div> <div class=\"row\"><div class=\"large-12 columns\"><div class=\"callout\"><h3>We&rsquo;re stoked you want to try MarkoJS! </h3><p>");

            app_hello_tag({
                name: data.name
              }, out);

            out.w(" You have " +
              marko_escapeXml(data.count) +
              " new messages!</p>");

            if (colors && colors.length) {
              out.w("<ul>");

              marko_forEach(colors, function(color) {
                out.w("<li style=\"color: " +
                  marko_escapeXmlAttr(color) +
                  "\">" +
                  marko_escapeXml(color) +
                  "</li>");
              });

              out.w("</ul>");
            } else {
              out.w("<div>No colors!</div>");
            }

            out.w("<p>Once you've exhausted the fun in this document, you should check out:</p><div class=\"row\"><div class=\"large-4 medium-4 columns\"><p><a href=\"http://foundation.zurb.com/docs\">Foundation Documentation</a><br>Everything you need to know about using the framework.</p></div><div class=\"large-4 medium-4 columns\"><p><a href=\"http://zurb.com/university/code-skills\">Foundation Code Skills</a><br>These online courses offer you a chance to better understand how Foundation works and how you can master it to create awesome projects.</p></div><div class=\"large-4 medium-4 columns\"><p><a href=\"http://foundation.zurb.com/forum\">Foundation Forum</a><br>Join the Foundation community to ask a question or show off your knowlege.</p></div></div></div></div></div><div class=\"row\"><div class=\"large-8 medium-8 columns\"><h5>Here&rsquo;s your basic grid:</h5><div class=\"row\"><div class=\"large-12 columns\"><div class=\"primary callout\"><p><strong>This is a twelve column section in a row.</strong> Each of these includes a div.callout element so you can see where the columns are - it's not required at all for the grid.</p></div></div></div><div class=\"row\"><div class=\"large-6 medium-6 columns\"><div class=\"primary callout\"><p>Six columns</p></div></div><div class=\"large-6 medium-6 columns\"><div class=\"primary callout\"><p>Six columns</p></div></div></div><div class=\"row\"><div class=\"large-4 medium-4 small-4 columns\"><div class=\"primary callout\"><p>Four columns</p></div></div><div class=\"large-4 medium-4 small-4 columns\"><div class=\"primary callout\"><p>Four columns</p></div></div><div class=\"large-4 medium-4 small-4 columns\"><div class=\"primary callout\"><p>Four columns</p></div></div></div><hr><h5>We bet you&rsquo;ll need a form somewhere:</h5><form><div class=\"row\"><div class=\"large-12 columns\"><label>Input Label</label><input type=\"text\" placeholder=\"large-12.columns\"></div></div><div class=\"row\"><div class=\"large-4 medium-4 columns\"><label>Input Label</label><input type=\"text\" placeholder=\"large-4.columns\"></div><div class=\"large-4 medium-4 columns\"><label>Input Label</label><input type=\"text\" placeholder=\"large-4.columns\"></div><div class=\"large-4 medium-4 columns\"><div class=\"row collapse\"><label>Input Label</label><div class=\"small-9 columns\"><input type=\"text\" placeholder=\"small-9.columns\"></div><div class=\"small-3 columns\"><span class=\"postfix\">.com</span></div></div></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Select Box</label><select><option value=\"husker\">Husker</option><option value=\"starbuck\">Starbuck</option><option value=\"hotdog\">Hot Dog</option><option value=\"apollo\">Apollo</option></select></div></div><div class=\"row\"><div class=\"large-6 medium-6 columns\"><label>Choose Your Favorite</label><input type=\"radio\" name=\"pokemon\" value=\"Red\" id=\"pokemonRed\"><label for=\"pokemonRed\">Radio 1</label><input type=\"radio\" name=\"pokemon\" value=\"Blue\" id=\"pokemonBlue\"><label for=\"pokemonBlue\">Radio 2</label></div><div class=\"large-6 medium-6 columns\"><label>Check these out</label><input id=\"checkbox1\" type=\"checkbox\"><label for=\"checkbox1\">Checkbox 1</label><input id=\"checkbox2\" type=\"checkbox\"><label for=\"checkbox2\">Checkbox 2</label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Textarea Label</label><textarea placeholder=\"small-12.columns\"></textarea></div></div></form></div> <div class=\"large-4 medium-4 columns\"><h5>Try one of these buttons:</h5><p><a href=\"#\" class=\"small button\">Simple Button</a><br> <a href=\"#\" class=\"medium success button\">Success Btn</a><br><a href=\"#\" class=\"medium alert button\">Alert Btn</a><br><a href=\"#\" class=\"medium secondary button\">Secondary Btn</a></p> <div class=\"callout\"><h5>So many components, girl!</h5><p>A whole kitchen sink of goodies comes with Foundation. Check out the docs to see them all, along with details on making them your own.</p><a href=\"http://foundation.zurb.com/docs/\" class=\"small button\">Go to Foundation Docs</a> </div></div></div>");

            marketing_footer_tag({}, out);
          }
        },
      [hasRenderBodyKey]: true
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../layouts/default.marko",
      "../components/app-header/template.marko",
      "../components/app-hello/renderer",
      "../components/marketing-footer/template.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
