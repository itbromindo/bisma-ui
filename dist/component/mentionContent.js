"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _draftJsPluginsEditor = _interopRequireDefault(require("draft-js-plugins-editor"));

require("draft-js-mention-plugin/lib/plugin.css");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MentionContent(props) {
  return /*#__PURE__*/_react.default.createElement(_draftJsPluginsEditor.default, {
    editorState: props.content,
    readOnly: true,
    onChange: () => {}
  });
}

var _default = MentionContent;
exports.default = _default;
MentionContent.propTypes = {
  content: _propTypes.default.any.isRequired
};