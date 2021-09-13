"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _draftJs = require("draft-js");

function MentionText() {
  return _draftJs.EditorState.createEmpty();
}

var _default = MentionText;
exports.default = _default;