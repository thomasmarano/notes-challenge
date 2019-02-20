(function(exports){
    function Controller(notelist){
        this.note = notelist
        this.note.createNote('Favorite drink: seltzer')
        this.notelistview = new NoteListView(this.note.lists)
    };


    Controller.prototype.htmlConverter = function(){
      this.inputToPage(this.notelistview.viewHtml())
    };

    Controller.prototype.inputToPage = function(html) {
      window.onload = function(){
          insertIntoPage(html)
      };
    }

    exports.Controller = Controller

})(this)
