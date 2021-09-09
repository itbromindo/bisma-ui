import React, { Component } from "react"
import { EditorState, convertToRaw } from "draft-js"
import Editor from 'draft-js-plugins-editor'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'
import editorStyles from './assets/css/editorStyles.module.css'
import 'draft-js-mention-plugin/lib/plugin.css'

class MentionBox extends Component {

    constructor(props) {
        super(props)
        this.mentionPlugin = createMentionPlugin()
    }

    state = {
        editorState: EditorState.createEmpty(),
        suggestions: this.props.data
    }

    onChange = (editorState) => {
        this.setState({editorState})

        setTimeout(() => {
            const raw = this.extractData()
            const mentionedUsers = this.extractMentions()
            this.props.onChange(raw, mentionedUsers)
        }, 500);
    }

    onSearchChange = ({ value }) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, this.props.data)
        })
    }

    extractData = () => {
        const contentState = this.state.editorState.getCurrentContent()
        const raw = convertToRaw(contentState)
        
        return raw
    }

    extractMentions = () => {
        const contentState = this.state.editorState.getCurrentContent()
        const raw = convertToRaw(contentState)
        let mentionedUsers = []
        for (let key in raw.entityMap) {
            const ent = raw.entityMap[key]
            if (ent.type === "mention") mentionedUsers.push(ent.data.mention)
        }

        return mentionedUsers
    }
q
    render() {
        const { MentionSuggestions } = this.mentionPlugin
        const plugins = [this.mentionPlugin]

        return (
            <div>
                <div className={editorStyles.editor}>
                    <Editor
                        plugins={plugins}
                        editorState={this.state.editorState}
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