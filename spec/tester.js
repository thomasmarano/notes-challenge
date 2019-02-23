(function(exports){

  // var assert = {
  //   isTrue: function(assertionToCheck){
  //     if (!assertionToCheck) {
  //       throw new Error ('The new assertion: ' + assertionToCheck + ' did not work appropriately')
  //     }
  //   }
  // }

  function playingAround(){
      var note1 = new Note('test1')
      var note2 = new Note('test2')
      var note3 = new Note('test3')
      var noteList = new NoteListModel()
      noteList.createNote(note1)
      noteList.createNote(note2)
      noteList.createNote(note3)
      console.log('TESTER')
      var noteView = new NoteListView(noteList)
      // console.log(noteView.testingFunction())


  }


  console.log(playingAround())

})(this);
