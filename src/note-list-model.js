(function(exports){

    function NoteListModel() {
        this.lists = []
    }

    NoteListModel.prototype.returnsNotes = function() {
        return this.lists
    }

    NoteListModel.prototype.createNote = function(noteContent){
        var note = new Note(noteContent)
        this.storesNote(note)
        // return string
    }

    NoteListModel.prototype.storesNote = function(note) {
        this.lists.push(note)
    }

    exports.NoteListModel = NoteListModel

})(this)
