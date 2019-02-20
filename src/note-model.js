(function(exports){

    var id = 0;

    function Note(string) {
        this.noteStorer = string
        var newId = generateId();
        this.id = newId
    }

    function generateId() { return id++; };


    Note.prototype.returnsText = function() {
        return this.noteStorer
    }

    exports.Note = Note

})(this);
