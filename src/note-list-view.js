(function(exports){

    function NoteListView(notes){
        this.noteList = notes.map(function(x){
              return x
        })
        this.htmlCode = []
    }

    NoteListView.prototype.viewHtml = function() {
      if (this.noteList.length > 0) {

      var htmlArray = ['<ul>']
      this.noteList.forEach(function(y){
            htmlArray.push('<li><div>' + y + '</div></li>')
      })

      htmlArray.push('<ul>')

      this.htmlCode = htmlArray

      return this.htmlCode

      } return ('The list of notes is empty!')
    }
    exports.NoteListView = NoteListView

  })(this)
