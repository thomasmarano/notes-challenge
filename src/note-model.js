(function(exports){
    function Note(string) {
        this.noteStorer = string
    }


    Note.prototype.returnsText = function() {
        return this.noteStorer
    }

    exports.Note = Note

})(this);
