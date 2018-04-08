import React from 'react';
import {Editor, EditorState} from 'draft-js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({ editorState });
  }
  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        handleReturn={() => { console.log('Enter pressed.'); return 'handled'; }}
        handleDroppedFiles={() => { console.log('Dropped.'); return 'handled'; }}
      />
    );
  }
}

export default App;
