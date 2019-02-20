(function(exports){

    function NoteListView(notes){
        this.noteList = notes.map(function(x){
              return x
        })
    }

    NoteListView.prototype.viewHtml = function() {
      if (this.noteList.length > 0) {
        var htmlArray = ['<ul>']
        this.noteList.forEach(function(y){
          var emptyArray = []
          for (var i = 0; i < 20; i++) {
              emptyArray.push(y.split('')[i])
            }
          htmlArray.push('<li><div>' + emptyArray.join('') + '</div></li>')
          })
          return ((htmlArray.join('') + '</ul>'))
      } return ('The list of notes is empty!')
    }

    exports.NoteListView = NoteListView
  })(this)
