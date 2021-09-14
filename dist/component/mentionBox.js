"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _draftJsPluginsEditor = _interopRequireDefault(require("draft-js-plugins-editor"));

var _mention = _interopRequireWildcard(require("@draft-js-plugins/mention"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MentionBox extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      reset: false,
      editorState: this.props.value,
      suggestionOpen: false,
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
        suggestions: (0, _mention.defaultSuggestionsFilter)(value, this.props.suggestionData)
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

    this.mentionPlugin = (0, _mention.default)();
  }

  render() {
    const {
      MentionSuggestions
    } = this.mentionPlugin;
    const plugins = [this.mentionPlugin];
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      style: _objectSpread({
        padding: '10px',
        border: '1px solid rgb(220 220 220)'
      }, this.props.style)
    }, /*#__PURE__*/_react.default.createElement(_draftJsPluginsEditor.default, {
      plugins: plugins,
      editorState: this.props.value,
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement(MentionSuggestions, {
      open: this.state.suggestionOpen,
      onOpenChange: val => this.setState({
        suggestionOpen: val
      }),
      onAddMention: () => {// get the mention object selected
      },
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