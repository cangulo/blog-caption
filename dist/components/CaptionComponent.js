"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CaptionComponent(_ref) {
  var label = _ref.label,
      link = _ref.link;

  if (link) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: link
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        textAlign: 'center'
      }
    }, label !== null && label !== void 0 ? label : "File Link"));
  } else {
    return /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        textAlign: 'center'
      }
    }, label !== null && label !== void 0 ? label : "");
  }
}

CaptionComponent.propTypes = {
  label: _propTypes["default"].string.isRequired,
  link: _propTypes["default"].string
};
var _default = CaptionComponent;
exports["default"] = _default;