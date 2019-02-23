(function(exports){

    var id = 0;

    function Note(string) {

        var newId = generateId();
        this.id = newId
        this.noteContent = string

    }

    function generateId() { return id++; };


    Note.prototype.returnsText = function() {
        return this.noteContent
    }

    exports.Note = Note

})(this);
