(function(exports){

  var assert = {
      isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
          throw new Error ("YOUR TEST IS FAILING")
        }
      }
  }

  function testingControllerInstantiation(){
    var notelistmodel2 = new NoteListModel()

    var testController = new Controller(notelistmodel2)
    console.log(testController.notelistview.noteListy)

    testController.htmlConverter()

    assert.isTrue(testController !== null)
    // assert.isTrue(double.createNoteCount === 1)
  }


  //
  // function testingHtmlConverter(){
  //
  //   // // var testController = new Controller(double)
  //   // console.log('TEST')
  //   // console.log(testController.notelistview)
  //   // testController.htmlConverter()
  //   // // var elem = document.querySelectorAll('#myApp')
  //
  //   }

  console.log(testingControllerInstantiation())
  // console.log(testingHtmlConverter())

})(this)
