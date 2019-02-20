(function(exports){

  var assert = {
      isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
          throw new Error ("YOUR TEST IS FAILING")
        }
      }
  }

  function NoteListModelDouble() {
   this.createNoteCount = 0;
   this.lists = ['Favorite drink: seltzer'];
  };

  var double = new NoteListModelDouble

  double.createNote = function(string) {
    this.createNoteCount += 1;
  };

  var testController = new Controller(double)

  function testingControllerInstantiation(){
    assert.isTrue(testController !== null)
    assert.isTrue(double.createNoteCount === 1)
  }



  function testingHtmlConverter(){

    var testController = new Controller(double)
    // console.log(testController.notelistview.viewHtml())

    testController.htmlConverter()

    var elem = document.querySelectorAll('#myApp')

    // elem.forEach(function(item){
        //
        // console.log('HELLO')
        // console.log(item.innerHTML)
    }

  console.log(testingControllerInstantiation())
  console.log(testingHtmlConverter())

})(this)
