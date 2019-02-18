(function(exports){

    function NoteListModel() {
        this.lists = []
    }

    NoteListModel.prototype.returnsNotes = function() {
        return this.lists
    }

    NoteListModel.prototype.createNote = function(string){
        var note = new Note(string)
        this.storesNote(string)
        return note
    }

    NoteListModel.prototype.storesNote = function(string) {
        this.lists.push(string)
    }

    exports.NoteListModel = NoteListModel

})(this)
