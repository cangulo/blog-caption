"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useDocusaurusContext2 = _interopRequireDefault(require("@docusaurus/useDocusaurusContext"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ShareDocusaurus(_ref) {
  var slug = _ref.slug,
      title = _ref.title,
      tags = _ref.tags;

  var _useDocusaurusContext = (0, _useDocusaurusContext2["default"])(),
      siteConfig = _useDocusaurusContext.siteConfig;

  var fullUrl = "".concat(siteConfig.url, "/").concat(slug);
  return /*#__PURE__*/_react["default"].createElement(_.ShareComponent, {
    title: title,
    link: fullUrl,
    tags: tags
  });
}

ShareDocusaurus.propTypes = {
  slug: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  tags: _propTypes["default"].array.isRequired
};
var _default = ShareDocusaurus;
exports["default"] = _default;