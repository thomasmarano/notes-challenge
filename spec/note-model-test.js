(function(exports){
  var assert = {
    isTrue: function(assertionToCheck){
      if (!assertionToCheck) {
        throw new Error ('The new assertion: ' + assertionToCheck + ' did not work appropriately')
      }
    }
  }


    function testsInstantiationWorks() {
      var testNote = 'My favorite language is JavaScript'
      var note = new Note(testNote);
      assert.isTrue(note.noteStorer === testNote)
    }


    function methodForReturningNotes() {
      var testNote = 'My favorite language is JavaScript'
      var note = new Note(testNote);
      assert.isTrue(note.returnsText() === testNote)

    }

    function givesEachNoteUniqueId () {
      var testNote = 'My favorite language is JavaScript'
      var note = new Note(testNote)
      var secondNote = new Note(testNote)
      var thirdNote = new Note(testNote)
      assert.isTrue(note.id === 2)
      assert.isTrue(secondNote.id === 3)
      assert.isTrue(thirdNote.id === 4)
    }
    //
    // console.log(methodForReturningNotes());
    // console.log(testsInstantiationWorks());
    // console.log(givesEachNoteUniqueId ());
})(this);
