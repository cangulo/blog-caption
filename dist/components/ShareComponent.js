"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ShareComponent(_ref) {
  var title = _ref.title,
      link = _ref.link,
      tags = _ref.tags;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Did you like it? Share It!"), /*#__PURE__*/_react["default"].createElement(_reactShare.LinkedinShareButton, {
    url: link,
    title: title
  }, /*#__PURE__*/_react["default"].createElement(_reactShare.LinkedinIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react["default"].createElement(_reactShare.TwitterShareButton, {
    url: link,
    title: title,
    via: "AnguloMascarell",
    hashtags: tags !== null && tags !== void 0 ? tags : ""
  }, /*#__PURE__*/_react["default"].createElement(_reactShare.TwitterIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react["default"].createElement(_reactShare.EmailShareButton, {
    subject: "Check this post about ".concat(title),
    body: "Hi there, check the next post: ".concat(title, " \n\n"),
    url: link
  }, /*#__PURE__*/_react["default"].createElement(_reactShare.EmailIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react["default"].createElement(_reactShare.WhatsappShareButton, {
    url: link,
    title: title
  }, /*#__PURE__*/_react["default"].createElement(_reactShare.WhatsappIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react["default"].createElement(_reactShare.TelegramShareButton, {
    title: title,
    url: link
  }, /*#__PURE__*/_react["default"].createElement(_reactShare.TelegramIcon, {
    size: 32,
    round: true
  })), /*#__PURE__*/_react["default"].createElement("br", {
    style: {
      marginBottom: "15px"
    }
  }));
}

ShareComponent.propTypes = {
  title: _propTypes["default"].string.isRequired,
  link: _propTypes["default"].string.isRequired,
  tags: _propTypes["default"].array.isRequired
};
var _default = ShareComponent;
exports["default"] = _default;