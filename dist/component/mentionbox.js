"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _draftJsPluginsEditor = _interopRequireDefault(require("draft-js-plugins-editor"));

var _draftJsMentionPlugin = _interopRequireWildcard(require("draft-js-mention-plugin"));

var _editorStylesModule = _interopRequireDefault(require("./assets/css/editorStyles.module.css"));

require("draft-js-mention-plugin/lib/plugin.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MentionBox extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      reset: false,
      editorState: this.props.value,
      suggestions: this.props.suggestionData
    });

    _defineProperty(this, "onChange", editorState => {
      const mentionedUsers = this.extractMentions();
      this.props.onChange(editorState, mentionedUsers);
    });

    _defineProperty(this, "onSearchChange", _ref => {
      let {
        value
      } = _ref;
      this.setState({
        suggestions: (0, _draftJsMentionPlugin.defaultSuggestionsFilter)(value, this.props.suggestionData)
      });
    });

    _defineProperty(this, "extractMentions", () => {
      const contentState = this.props.value.getCurrentContent();
      const raw = (0, _draftJs.convertToRaw)(contentState);
      let mentionedUsers = [];

      for (let key in raw.entityMap) {
        const ent = raw.entityMap[key];
        if (ent.type === "mention") mentionedUsers.push(ent.data.mention);
      }

      return mentionedUsers;
    });

    this.mentionPlugin = (0, _draftJsMentionPlugin.default)();
  }

  render() {
    const {
      MentionSuggestions
    } = this.mentionPlugin;
    const plugins = [this.mentionPlugin];
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: _editorStylesModule.default.editor
    }, /*#__PURE__*/_react.default.createElement(_draftJsPluginsEditor.default, {
      plugins: plugins,
      editorState: this.props.value,
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement(MentionSuggestions, {
      onSearchChange: this.onSearchChange,
      suggestions: this.state.suggestions
    })));
  }

}

var _default = MentionBox;
exports.default = _default;
MentionBox.propTypes = {
  suggestionData: _propTypes.default.any.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.any.isRequired
};