# How to reproduce

Use `npm run start` to run the demo. Then do following steps:

1. Type in anything, you should see draft-js in "edit" mode

    By saying "edit" mode, it means `this.setMode('edit')` in `draft-js/src/component/base/DraftEditor.react.js`

2. Press "enter" to confirm it's in "edit" mode.

    `handleReturn` is defined in `src/App.js` in this project. Thus, when it's in "edit" mode, press "enter" will not create newline, but you should see "Enter pressed." in console.

3. Drag any file and drop it in draft-js.

    You should see "Dropped." in console. (Defined in `src/App.js` using `handleDroppedFiles` attribute)

    At this moment, `this._dragCount` should be positive number (defined in `draft-js/src/component/base/DraftEditor.react.js`), as `onDragEnter` increase this number, but there is no `onDragLeave` triggered thus this number is never decreased back to 0.

4. Drag any file onto draft-js, do NOT drop it, and leave.

    Since `this._dragCount` is still positive number in `draft-js/src/component/base/DraftEditor.react.js`, `this.exitCurrentMode()` is not triggered when `onDragLeave` called. Thus it remains in "drag" mode.

5. Press "enter" to confirm it's NOT in "edit" mode.

    You should see newline generated, and nothing output in console.

# Notice

This should be an issue still available in Draft.js v.0.10.5
