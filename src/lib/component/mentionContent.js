import Editor from 'draft-js-plugins-editor'
import 'draft-js-mention-plugin/lib/plugin.css'
import React from "react"
import PropTypes from 'prop-types'

function MentionContent(props) {

    return (
        <Editor editorState={props.content} readOnly={true} onChange={() => { }} />
    )
}

export default MentionContent

MentionContent.propTypes = {
    content: PropTypes.any.isRequired
}