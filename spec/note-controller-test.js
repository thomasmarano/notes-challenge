(function(exports){


  function testingControllerOut(){
    var testNoteListModel = new NoteListModel();

    var testController = new Controller(testNoteListModel)
    testController.htmlConverter()
  }

  return testingControllerOut()



})(this)
