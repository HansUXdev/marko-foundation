var template = require('./template.marko');

module.exports = function render(input, context) {

    var rootAttrs = {};

    var classParts = ["button"];

    var type = 'button';

    if (input.href) {
        type = 'link';
        input.variant = "link";
    }

    // The type of button
    if (input.variant) {
        classParts.push(input.variant);
    }

    if (input.size) {
        classParts.push(input.size);
    }

    var splatAttrs = input['*'];
    if (splatAttrs) {
        var className = splatAttrs["class"];
        if (className) {
            delete splatAttrs["class"];
            classParts.push(className);
        }

        for (var splatAttr in splatAttrs) {
            if (splatAttrs.hasOwnProperty(splatAttr)) {
                rootAttrs[splatAttr] = splatAttrs[splatAttr];
            }
        }
    }

    rootAttrs["class"] = classParts.join(" ");

    template.render({
        label: input.label,
        type: type,
        tag: input,
        renderBody: input.renderBody,
        rootAttrs: rootAttrs,
        isDropdown: input.dropdown === true,
        href: input.href
    }, context);
};

