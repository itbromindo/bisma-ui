import React, { Component } from "react"
import { convertToRaw } from "draft-js"
import Editor from 'draft-js-plugins-editor'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'
import editorStyles from './assets/css/editorStyles.module.css'
import 'draft-js-mention-plugin/lib/plugin.css'
import PropTypes from 'prop-types'

class MentionBox extends Component {

    constructor(props) {
        super(props)
        this.mentionPlugin = createMentionPlugin()
    }

    state = {
        reset: false,
        editorState: this.props.value,
        suggestions: this.props.suggestionData
    }

    onChange = (editorState) => {
        const mentionedUsers = this.extractMentions()
        this.props.onChange(editorState, mentionedUsers)
    }

    onSearchChange = ({ value }) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, this.props.suggestionData)
        })
    }

    extractMentions = () => {
        const contentState = this.props.value.getCurrentContent()
        const raw = convertToRaw(contentState)
        let mentionedUsers = []
        for (let key in raw.entityMap) {
            const ent = raw.entityMap[key]
            if (ent.type === "mention") mentionedUsers.push(ent.data.mention)
        }

        return mentionedUsers
    }

    render() {
        const { MentionSuggestions } = this.mentionPlugin
        const plugins = [this.mentionPlugin]

        return (
            <div>
                <div className={editorStyles.editor}>
                    <Editor
                        plugins={plugins}
                        editorState={this.props.value}
                        onChange={this.onChange}
                    />
                    <MentionSuggestions
                        onSearchChange={this.onSearchChange}
                        suggestions={this.state.suggestions}
                    />
                </div>
            </div>
        )
    }
}

export default MentionBox

MentionBox.propTypes = {
    suggestionData: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
};