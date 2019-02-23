(function(exports){

  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck){
        throw new Error('YOU HAVE FAILED THE TEST')
      }
    }
  }

  function instantiatesWithEmptyArray() {
    var noteList = new NoteListModel();
    assert.isTrue(Array.isArray(noteList.lists))
    assert.isTrue(noteList.lists.length === 0)
  }

  function returnsArrayOfNotes() {
    var noteList = new NoteListModel()
    assert.isTrue(Array.isArray(noteList.returnsNotes()))
    assert.isTrue(noteList.returnsNotes().length === 0)
  }

  // function createsNewNote() {
  //     var testText = 'hello there'
  //     var noteList = new NoteListModel()
  //     var control = new Note(testText)
  //     assert.isTrue(noteList.createNote(testText).noteContent === control.noteContent)
  // }

  // function storesNewNote(){
  //   var noteList = new NoteListModel()
  //   var testText = 'hello there'
  //   noteList.createNote(testText)
  //   assert.isTrue(noteList.lists.includes(testText))
  // }


  console.log(instantiatesWithEmptyArray());
  console.log(returnsArrayOfNotes());
  // console.log(createsNewNote());
  // console.log(storesNewNote());


})(this);
