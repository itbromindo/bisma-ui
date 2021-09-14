"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _draftJs = require("draft-js");

function MentionText() {
  const emptyContentState = (0, _draftJs.convertFromRaw)({
    entityMap: {},
    blocks: [{
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: []
    }]
  });
  return emptyContentState;
}

var _default = MentionText;
exports.default = _default;