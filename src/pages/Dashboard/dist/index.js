"use strict";
exports.__esModule = true;
exports.Dasboard = void 0;
var react_1 = require("react");
var style_1 = require("./style");
var logo_svg_1 = require("../../assets/logo.svg");
exports.Dasboard = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "Logo da aplica\u00E7\u00E3o" }),
        react_1["default"].createElement(style_1.Title, null, "Cat\u00E1logo de reposit\u00F3rios do Github"),
        react_1["default"].createElement(style_1.Form, null,
            react_1["default"].createElement("input", { placeholder: "username/repository_name" }),
            react_1["default"].createElement("button", { type: "submit" }, "Buscar"))));
};
