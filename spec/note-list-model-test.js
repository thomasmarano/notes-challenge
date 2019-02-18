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
    assert.isTrue(noteList.lists == 0)
  }

  console.log(instantiatesWithEmptyArray());

})(this);


// Code is in a file called note-list-model.js.
// Code is wrapped in the module pattern.
// Uses the constructor and prototype pattern to define a note list model
// object that can be instantiated.
// Stores an array of note models.
// Has a method that will return all the note models stored in the array.
// Has a method that creates and stores a new single note
// model. This function takes as an argument a string that
// will be the value of the text property of
// the note e.g. "Favourite drink: seltzer".
