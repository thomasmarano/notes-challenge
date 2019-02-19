(function(exports){
    var assert = {
        isTrue: function(assertionToCheck) {
          if (!assertionToCheck) {
            throw new Error ("YOUR TEST IS FAILING")
          }
        }
    }

    function notesViewInitializesCorrectly() {
        var notes = new NoteListModel();
        notes.createNote('test1')
        notes.createNote('test2')
        var noteViewer = new NoteListView(notes.lists);
        assert.isTrue(console.log(notes.lists) === console.log(noteViewer.noteList))
    }


    function listToHtmlFor1() {
      var notes = new NoteListModel();
      notes.createNote('test1')
      notes.createNote('test2')
      var noteViewer = new NoteListView(notes.lists);
      assert.isTrue(noteViewer.viewHtml().includes('<li><div>test1</div></li>'))
      assert.isTrue(noteViewer.viewHtml().includes('<li><div>test2</div></li>'))
      }


      function listToHtmlFor0() {
        var noteViewer = new NoteListView([]);
        assert.isTrue(noteViewer.viewHtml() === 'The list of notes is empty!')
      }

      console.log('notesViewInitializesCorrectly')
      console.log(notesViewInitializesCorrectly())
      console.log('listToHtmlFor1')
      console.log(listToHtmlFor1())
      console.log('listToHtmlFor0')
      console.log(listToHtmlFor0())

})(this);
