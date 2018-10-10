import React from 'react';
import {Editor, EditorState} from 'draft-js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      status: '',
    };
    this.onChange = (editorState) => this.setState({ editorState });
  }
  render() {
    return (
      <div>
        <h2>How to reproduce the issue:</h2>
        <ol>
          <li>{"Press enter should be handled by handleReturn (handleReturn={()=>'handled'}"}</li>
          <li>Drag a file and drop it</li>
          <li>Drag a file and not drop it</li>
          <li>Press enter will not be handled anymore (bug)</li>
        </ol>
        <div>Current Status of callback: {this.state.status}</div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleReturn={() => { this.setState({ status: 'handleReturn is triggered.' }); return 'handled'; }}
          handleDroppedFiles={() => { this.setState({ status: 'hanldeDroppedFiles is triggered.' }); return 'handled'; }}
        />
      </div>
    );
  }
}

export default App;
