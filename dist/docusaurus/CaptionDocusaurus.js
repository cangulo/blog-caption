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

function CaptionDocusaurus(_ref) {
  var label = _ref.label,
      link = _ref.link,
      linkIsRelative = _ref.linkIsRelative;

  var _useDocusaurusContext = (0, _useDocusaurusContext2["default"])(),
      siteConfig = _useDocusaurusContext.siteConfig;

  var rawGitUrl = siteConfig.customFields.rawGitUrl; // const rawGitUrl = 'https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/'

  var urlToFile = linkIsRelative ? rawGitUrl.concat(link) : link;
  return /*#__PURE__*/_react["default"].createElement(_.CaptionComponent, {
    label: label,
    link: urlToFile
  });
}

CaptionDocusaurus.propTypes = {
  label: _propTypes["default"].string.isRequired,
  link: _propTypes["default"].string.isRequired,
  linkIsRelative: _propTypes["default"].bool.isRequired
};
var _default = CaptionDocusaurus;
exports["default"] = _default;