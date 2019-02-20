(function(exports){
    function SingleNoteView(note){
        this.note = note.noteStorer
    }

    SingleNoteView.prototype.toHtml = function() {
      var htmlArray = ['<div><ul><li>']
      htmlArray.push(this.note)
      htmlArray.push('</li></ul></div>')
      return htmlArray.join('')
    }




    exports.SingleNoteView = SingleNoteView

})(this)
