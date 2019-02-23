(function(exports){
  var assert = {
      isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
          throw new Error ("YOUR TEST IS FAILING")
        }
      }
  }

  function instantiatesSingleNoteView(){
    var stringForNote = 'This is Thomas first note'
    var note = new Note(stringForNote)
    var singleNoteView = new SingleNoteView(note)
    assert.isTrue(singleNoteView.note === stringForNote)
  }

  function returnsHtmlForNoteModel() {
    var stringForNote = 'This is Thomas first note'
    var note = new Note(stringForNote)
    var singleNoteView = new SingleNoteView(note)
    assert.isTrue(singleNoteView.toHtml() === ('<div><ul><li>' + stringForNote + '</li></ul></div>'))

  }

  // console.log(returnsHtmlForNoteModel())
  // console.log(instantiatesSingleNoteView())

})(this)
