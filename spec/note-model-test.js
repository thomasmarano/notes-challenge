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

    console.log(methodForReturningNotes());
    console.log(testsInstantiationWorks());
})(this);
